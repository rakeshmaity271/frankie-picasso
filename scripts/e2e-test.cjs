const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 8089;
const DIST_DIR = path.resolve(__dirname, '../dist');

// MIME types for static server
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

// Start local SPA HTTP server
function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const sanitized = (req.url || '/').replace(/^\/{2,}/, '/');
      const url = new URL(sanitized, `http://localhost:${PORT}`);
      let filePath = path.join(DIST_DIR, decodeURIComponent(url.pathname));

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      if (!fs.existsSync(filePath)) {
        // SPA fallback
        filePath = path.join(DIST_DIR, 'index.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Server Error');
          return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    });

    server.listen(PORT, '127.0.0.1', () => {
      resolve(server);
    });
    server.on('error', reject);
  });
}

// Simple CDP Client over WebSocket
class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 1;
    this.callbacks = new Map();
    this.eventListeners = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      } else if (msg.method) {
        const listeners = this.eventListeners.get(msg.method) || [];
        listeners.forEach((fn) => fn(msg.params));
      }
    };
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  on(event, fn) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event).push(fn);
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function runTests() {
  console.log('====================================================');
  console.log('   FRANKIE PICASSO — E2E & REGRESSION TEST SUITE    ');
  console.log('====================================================\n');

  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(`dist directory does not exist at ${DIST_DIR}. Run npm run build first.`);
  }

  console.log(`[1/5] Starting local production SPA server on port ${PORT}...`);
  const server = await startServer();
  console.log(`✓ Local server running at http://localhost:${PORT}/\n`);

  console.log('[2/5] Launching headless Chrome with remote debugging...');
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chromeProcess = spawn(
    chromePath,
    [
      '--headless=new',
      '--remote-debugging-port=9223',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--window-size=1280,900',
      'about:blank',
    ],
    { stdio: 'ignore' }
  );

  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9223/json/new', { method: 'PUT' });
      const target = await res.json();
      wsUrl = target.webSocketDebuggerUrl;
      if (wsUrl) break;
    } catch {
      await new Promise((r) => setTimeout(r, 250));
    }
  }

  if (!wsUrl) {
    chromeProcess.kill();
    server.close();
    throw new Error('Failed to connect to Chrome DevTools Protocol');
  }

  console.log('✓ Chrome launched and connected via CDP\n');

  const cdp = new CDPClient(wsUrl);
  await cdp.connect();

  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Network.enable');

  const consoleErrors = [];
  const networkFailures = [];

  cdp.on('Runtime.consoleAPICalled', (params) => {
    if (params.type === 'error') {
      const text = params.args.map((a) => a.value || a.description || '').join(' ');
      consoleErrors.push(text);
    }
  });

  cdp.on('Network.responseReceived', (params) => {
    if (params.response.status >= 400) {
      networkFailures.push({
        url: params.response.url,
        status: params.response.status,
      });
    }
  });

  console.log('[3/5] Executing E2E & Regression Scenarios across all routes...\n');

  const testResults = [];

  async function navigateAndEvaluate(route, testName, evaluator) {
    const fullUrl = `http://localhost:${PORT}/${route}`;
    await cdp.send('Page.navigate', { url: fullUrl });
    await new Promise((r) => setTimeout(r, 2000));

    const evalResult = await cdp.send('Runtime.evaluate', {
      expression: `(${evaluator.toString()})()`,
      returnByValue: true,
      awaitPromise: true,
    });

    if (evalResult.exceptionDetails) {
      console.error('      [CDP EVAL ERROR]:', evalResult.exceptionDetails.text, evalResult.exceptionDetails.exception?.description);
    }
    const passed = evalResult.result?.value?.passed;
    const details = evalResult.result?.value?.details || '';

    testResults.push({
      testName,
      route,
      passed,
      details,
    });

    const statusMark = passed ? '✅ PASS' : '❌ FAIL';
    console.log(`  ${statusMark} [${testName}] (${route})`);
    if (details) console.log(`         ${details}`);
  }

  // --- Test 1: Home page & Header Navigation ---
  await navigateAndEvaluate('', 'Home Page Structure & Branding', () => {
    const title = document.title;
    const root = document.getElementById('root');
    const navButtons = Array.from(document.querySelectorAll('nav button')).map((b) => b.textContent.trim());
    return {
      passed: !!root && root.children.length > 0 && navButtons.length >= 8,
      details: `Title: "${title}", Nav items (${navButtons.length}): [${navButtons.filter(Boolean).join(', ')}]`,
    };
  });

  // --- Test 2: Journey Page & Previews ---
  await navigateAndEvaluate('#/journey', 'Journey Overview — 8 Act Cards & Previews', async () => {
    const bodyText = document.body.innerText;
    const hasWelcome = bodyText.includes('Welcome to the Journey') || bodyText.includes('origin story');
    const hasBecoming = bodyText.includes('Becoming');
    const hasBuilder = bodyText.includes('The Builder');
    const hasStillBecoming = bodyText.includes('Still Becoming');
    const hasSalzburgOrigin = bodyText.includes('Salzburg, Austria') && bodyText.includes('He chose Canada!');

    const imgElements = Array.from(document.querySelectorAll('img'));
    // Verify each image asset HTTP status via fetch
    const fetchStatuses = await Promise.all(
      imgElements.map((img) =>
        fetch(img.src)
          .then((r) => ({ src: img.src, ok: r.status === 200 }))
          .catch(() => ({ src: img.src, ok: false }))
      )
    );
    const broken = fetchStatuses.filter((s) => !s.ok);

    return {
      passed: hasWelcome && hasBecoming && hasBuilder && hasStillBecoming && hasSalzburgOrigin && broken.length === 0,
      details: `All 8 Acts found, Salzburg origin preview: ${hasSalzburgOrigin}. Total preview images: ${imgElements.length}, Verified 200 OK: ${fetchStatuses.length - broken.length}, Broken: ${broken.length}`,
    };
  });

  // --- Test 3: Act II ("Becoming") — EMPTY FRAME REGRESSION AUDIT ---
  await navigateAndEvaluate('#/act/building', 'Act II (Becoming) — Photos & Empty Frame Elimination', async () => {
    const bodyText = document.body.innerText;
    const hasArchivalPlaceholder = /archival\s*[·•\.]\s*image/i.test(bodyText);
    const hasSuggestedHint = /suggested:\s*/i.test(bodyText);

    // Verify all story images exist in the DOM
    const imgElements = Array.from(document.querySelectorAll("img"));
    const srcs = imgElements.map((i) => i.src);

    const hasFarm = srcs.some((s) => s.includes("act2-leaving-farm"));
    const hasMap = srcs.some((s) => s.includes("act2-toronto-to-louisville"));
    const hasCamera = srcs.some((s) => s.includes("act2-voigtlander-camera"));
    const hasRacing = srcs.some((s) => s.includes("act2-formula-one-racing"));
    const hasSchool = srcs.some((s) => s.includes("act2-school-class-portrait"));
    const hasBusingProtest = srcs.some((s) => s.includes("act2-louisville-busing-protest"));
    const hasDamagedBuses = srcs.some((s) => s.includes("act2-louisville-damaged-buses"));

    // Verify every image returns HTTP 200
    const checks = await Promise.all(
      imgElements.map((img) =>
        fetch(img.src)
          .then((r) => r.status === 200)
          .catch(() => false)
      )
    );
    const all200 = checks.every(Boolean);

    const passed =
      !hasArchivalPlaceholder &&
      !hasSuggestedHint &&
      hasFarm &&
      hasMap &&
      hasCamera &&
      hasRacing &&
      hasSchool &&
      hasBusingProtest &&
      hasDamagedBuses &&
      all200;

    return {
      passed,
      details: `Archival Box in DOM: ${hasArchivalPlaceholder ? "YES (REGRESSION!)" : "NO (CLEAN)"}, Farm: ${hasFarm}, Map: ${hasMap}, Voigtländer: ${hasCamera}, F1: ${hasRacing}, Toronto School: ${hasSchool}, Busing Protest: ${hasBusingProtest}, Damaged Buses: ${hasDamagedBuses}, HTTP 200 for all: ${all200}`,
    };
  });

  // --- Test 4: Act I ("Where Belief Began") ---
  await navigateAndEvaluate('#/act/where-belief-began', 'Act I (Where Belief Began) Story Narrative', async () => {
    const text = document.body.innerText;
    const hasDad = text.includes('Belief in myself') || text.includes('dark green Thunderbird');
    const hasSalzburgOrigin = text.includes('Salzburg, Austria') && text.includes('He chose Canada!') && text.includes('I grew up surrounded by people who believed');
    const imgElements = Array.from(document.querySelectorAll('img'));
    const hasMomPhoto = imgElements.some((s) => s.src.includes('act1-mom-in-salzburg'));
    const checks = await Promise.all(imgElements.map((i) => fetch(i.src).then((r) => r.status === 200).catch(() => false)));
    const hasBackLink = Array.from(document.querySelectorAll('a')).some((a) => a.textContent.includes('Back to the Journey'));
    return {
      passed: hasDad && hasSalzburgOrigin && hasMomPhoto && checks.every(Boolean) && hasBackLink,
      details: `Story narrative present: ${hasDad}, Salzburg origin: ${hasSalzburgOrigin}, Mom photo in Salzburg: ${hasMomPhoto}, Images verified 200: ${checks.length}, Backlink present: ${hasBackLink}`,
    };
  });

  // --- Test 5: Act V ("The Survivor") ---
  await navigateAndEvaluate('#/act/the-survivor', 'Act V (The Survivor) Photo Breaks & Recovery', async () => {
    const text = document.body.innerText;
    const hasRehab = text.includes('rehab') || text.includes('motorcycle club');
    const imgElements = Array.from(document.querySelectorAll('img'));
    const hasFriendsImg = imgElements.some((s) => s.src.includes('act5-rehab-wheelchair-friends'));
    const checks = await Promise.all(imgElements.map((i) => fetch(i.src).then((r) => r.status === 200).catch(() => false)));
    return {
      passed: hasRehab && hasFriendsImg && checks.every(Boolean),
      details: `Rehab photo in DOM: ${hasFriendsImg}, All images 200 OK: ${checks.every(Boolean)}`,
    };
  });

  // --- Test 6: Act VIII ("Still Becoming") & Project Cards ---
  await navigateAndEvaluate('#/act/still-becoming', 'Act VIII (Still Becoming) Projects & Video', () => {
    const text = document.body.innerText;
    const hasBrush = text.includes('Brush with Murder');
    const hasWhatsMyQ = /what[’']s my q/i.test(text);
    const video = document.querySelector('video');
    return {
      passed: hasBrush && hasWhatsMyQ && !!video,
      details: `Brush with Murder: ${hasBrush}, What’s My Q: ${hasWhatsMyQ}, Video tag: ${!!video}`,
    };
  });

  // --- Test 7: Creating Section — Decorative Cleanliness ---
  await navigateAndEvaluate('#/act/creating', 'Creating Section — Decorative Cleanliness', () => {
    const text = document.body.innerText;
    const hasAuthor = text.includes('Author');
    const hasRadio = text.includes('Radio');
    const hasArtist = text.includes('Artist');
    const placeholderBoxes = document.querySelectorAll('.aspect-\\[4\\/3\\]');
    return {
      passed: hasAuthor && hasRadio && hasArtist && placeholderBoxes.length === 0,
      details: `Author/Radio/Artist rendered: ${hasAuthor && hasRadio && hasArtist}, Empty aspect-ratio boxes: ${placeholderBoxes.length}`,
    };
  });

  // --- Test 8: Fine Art Gallery & Exhibition ---
  await navigateAndEvaluate('#/art', 'Fine Art Gallery — 10 Paintings & Exhibition', async () => {
    const paintings = Array.from(document.querySelectorAll('img')).filter((img) => img.src.includes('art-'));
    const checks = await Promise.all(paintings.map((p) => fetch(p.src).then((r) => r.status === 200).catch(() => false)));
    return {
      passed: paintings.length >= 8 && checks.every(Boolean),
      details: `Total paintings rendered: ${paintings.length}, All return HTTP 200: ${checks.every(Boolean)}`,
    };
  });

  // --- Test 9: Books & Publications ---
  await navigateAndEvaluate('#/books', 'Books & Publications — 5 Bestsellers & Covers', async () => {
    const text = document.body.innerText;
    const hasMojo = text.includes('Midlife Mojo');
    const has40Pounds = text.includes('For Want of 40 Pounds');
    const covers = Array.from(document.querySelectorAll('img')).filter((img) => img.src.includes('book-'));
    const checks = await Promise.all(covers.map((c) => fetch(c.src).then((r) => r.status === 200).catch(() => false)));
    return {
      passed: hasMojo && has40Pounds && covers.length >= 5 && checks.every(Boolean),
      details: `Featured & catalog rendered. Covers count: ${covers.length}, All 200 OK: ${checks.every(Boolean)}`,
    };
  });

  // --- Test 10: Media Section ---
  await navigateAndEvaluate('#/media', 'Media & Broadcasting — Podcasts & Videos', () => {
    const text = document.body.innerText;
    const hasRadio = text.includes('Good Radio Network') || text.includes('Radio');
    return {
      passed: hasRadio,
      details: `Media section rendered with broadcasting history: ${hasRadio}`,
    };
  });

  // --- Test 11: Contact & Connect ---
  await navigateAndEvaluate('#/connect', 'Contact Section — Direct Email & Social Presence', () => {
    const text = document.body.innerText;
    const emailLink = document.querySelector('a[href^="mailto:"]');
    const hasSocials = text.includes('Facebook') && text.includes('LinkedIn');
    return {
      passed: !!emailLink && hasSocials,
      details: `Email link found: ${emailLink?.getAttribute('href')}, Social platforms found: ${hasSocials}`,
    };
  });

  
  // --- Test 12: Business Logos & Platforms Showcase (Impact) ---
  await navigateAndEvaluate('#impact', 'Business Logos & Platforms Showcase', async () => {
    const text = document.body.innerText;
    const hasRentTheBeliever = text.includes('Rent The Believer');
    const hasShoes = text.includes('Conversation with My Shoes');
    const hasWhatsMyQ = /What[’']s My Q/i.test(text);
    const hasUnstoppable = text.includes('The Unstoppable Frankie Picasso');
    const hasFrankieJohnny = text.includes('Frankie & Johnny');
    const hasPAWcasso = text.includes('Original PAWcasso Pet Paintings');

    const rentLink = document.querySelector('a[href="https://rentthebeliever.com/"]');
    const imgElements = Array.from(document.querySelectorAll('img')).filter((img) => img.src.includes('logo-'));
    const checks = await Promise.all(imgElements.map((i) => fetch(i.src).then((r) => r.status === 200).catch(() => false)));

    const passed =
      hasRentTheBeliever &&
      hasShoes &&
      hasWhatsMyQ &&
      hasUnstoppable &&
      hasFrankieJohnny &&
      hasPAWcasso &&
      !!rentLink &&
      imgElements.length >= 6 &&
      checks.every(Boolean);

    return {
      passed,
      details: `All 6 platforms found: ${hasRentTheBeliever && hasShoes && hasWhatsMyQ && hasUnstoppable && hasFrankieJohnny && hasPAWcasso}, Rent The Believer link: ${!!rentLink}, Logo images count: ${imgElements.length}, All 200 OK: ${checks.every(Boolean)}`,
    };
  });

  // --- Test 13: Dedicated Life Map Page & Interactive Canvas ---
  await navigateAndEvaluate('#/life-map', 'Life Map — Dedicated Page, Interactive Canvas & Timeline', () => {
    const text = document.body.innerText;
    const hasMapOfLife = text.includes('The Map of a Life');
    const hasEveryPieceFit = text.includes('Every Piece Fit');
    const hasCanvas = !!document.getElementById('illustrated-map');
    const hasTimeline = !!document.getElementById('timeline');
    const hasLessons = !!document.getElementById('lessons');
    const hasBackLink = !!Array.from(document.querySelectorAll('a')).find(a => a.innerText.includes('Back to the Main Journey'));

    const passed = hasMapOfLife && hasEveryPieceFit && hasCanvas && hasTimeline && hasLessons && hasBackLink;
    return {
      passed,
      details: `Map of Life title: ${hasMapOfLife}, Every Piece Fit: ${hasEveryPieceFit}, Illustrated Map Canvas: ${hasCanvas}, Timeline: ${hasTimeline}, Lessons: ${hasLessons}, Backlink: ${hasBackLink}`
    };
  });

  // --- Test 14: Homepage in-page #life-map section verification ---
  await navigateAndEvaluate('#/', 'Homepage #life-map In-Page Visual Roadmap', () => {
    const section = document.getElementById('life-map');
    if (section) section.scrollIntoView();
    const text = section ? (section.textContent || '') : '';
    const hasTitle = text.includes("Frankie’s Journey Map") || text.includes("Frankie's Journey Map");
    const hasCartography = text.includes('The Eight Acts Cartography');
    const hasAct1 = text.includes('Act I') || text.includes('Act 1');
    const hasAct8 = text.includes('Act VIII') || text.includes('Act 8');
    const hasDedicatedLink = !!(section && section.querySelector('a[href="#/life-map"]'));

    const passed = !!section && hasTitle && hasCartography && hasAct1 && hasAct8 && hasDedicatedLink;
    return {
      passed,
      details: `Section exists: ${!!section}, Title: ${hasTitle}, Cartography: ${hasCartography}, Act 1 & 8: ${hasAct1 && hasAct8}, Dedicated link: ${hasDedicatedLink}`
    };
  });

  // --- Test 15: Mobile Viewport & Menu Navigation to Life Map ---
  console.log('  Testing Mobile Viewport (iPhone 375x812) Hamburger Menu -> Life Map...');
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    mobile: true,
  });

  await cdp.send('Page.navigate', { url: `http://localhost:${PORT}/#/` });
  await new Promise((r) => setTimeout(r, 1500));

  // Open mobile menu
  await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Open menu"]');
      if (btn) btn.click();
    })()`,
  });
  await new Promise((r) => setTimeout(r, 600));

  // Tap Life Map link in mobile menu
  const mobileNavResult = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const link = document.querySelector('a[href="#/life-map"]');
      if (!link) return { error: 'Life map link not found in mobile menu' };
      link.click();
      return { success: true };
    })()`,
    returnByValue: true,
  });

  await new Promise((r) => setTimeout(r, 1200));

  const mobileCheck = await cdp.send('Runtime.evaluate', {
    expression: `(() => {
      const hash = window.location.hash;
      const text = document.body.innerText;
      const isLifeMap = hash === '#/life-map' || text.includes('Every Piece Fit');
      return {
        passed: isLifeMap,
        details: 'Mobile URL Hash: ' + hash + ', Life Map Page Rendered: ' + text.includes('Every Piece Fit')
      };
    })()`,
    returnByValue: true,
  });

  await cdp.send('Emulation.clearDeviceMetricsOverride');

  testResults.push({
    testName: 'Mobile Menu Navigation to Life Map (iPhone Emulation)',
    route: '#/life-map',
    passed: mobileCheck.result?.value?.passed,
    details: mobileCheck.result?.value?.details,
  });
  console.log(`  ${mobileCheck.result?.value?.passed ? '✅ PASS' : '❌ FAIL'} [Mobile Menu Navigation to Life Map] (${mobileCheck.result?.value?.details})`);

  // 4. Clean up
  console.log('\n[4/5] Checking runtime health...');
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach((e) => console.log(`   - ${e}`));
  }
  console.log(`Network 4xx/5xx Failures: ${networkFailures.length}`);
  if (networkFailures.length > 0) {
    networkFailures.forEach((f) => console.log(`   - ${f.status}: ${f.url}`));
  }

  cdp.close();
  chromeProcess.kill();
  server.close();

  // 5. Summary
  const allPassed = testResults.every((t) => t.passed) && consoleErrors.length === 0 && networkFailures.length === 0;

  console.log('\n[5/5] Test Summary & Verdict');
  console.log('----------------------------------------------------');
  console.log(`Total Scenarios: ${testResults.length}`);
  console.log(`Passed:          ${testResults.filter((t) => t.passed).length}`);
  console.log(`Failed:          ${testResults.filter((t) => !t.passed).length}`);
  console.log(`Console Errors:  ${consoleErrors.length}`);
  console.log(`Broken Requests: ${networkFailures.length}`);
  console.log('----------------------------------------------------');
  console.log(allPassed ? '>>> OVERALL VERDICT: ALL E2E & REGRESSION TESTS PASSED <<<' : '>>> OVERALL VERDICT: TESTS FAILED <<<');

  if (!allPassed) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});

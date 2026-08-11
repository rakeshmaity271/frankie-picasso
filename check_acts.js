const { content } = require('./src/data/content.js');
console.log('Number of acts:', content.acts.length);
content.acts.forEach((a, i) => {
  console.log(`Act ${i}: ${a.id} (${a.number})`);
});

export const content = {
  hero: {
    eyebrow: 'A Life in Six Acts',
    headline: 'This isn\u2019t a r\u00e9sum\u00e9!',
    quote: '\u201cWherever there is a human being, there is an opportunity for a kindness.\u201d',
    quoteAttribution: '\u2014 Lucius Annaeus Seneca',
    // Original headline/subheadline — preserved for reuse elsewhere
    originalHeadline: 'Built Platforms. Created Opportunities. Developed Partnerships. Led Teams. Amplified Impact.',
    originalSubheadline: 'You\'re not exploring a r\u00e9sum\u00e9. You\'re beginning a journey through a life dedicated to freedom, creativity, community, and impact \u2014 a story that asks one quiet question: What could you become if someone believed in you?',
    tagline: 'One person can create ripple effects that change lives.',
    ctaPrimary: 'Begin the Journey',
    ctaSecondary: 'Connect'
  },
  
  preAct1Intro: {
    lines: [
      'It\u2019s the story of an ordinary girl who never stopped saying,',
      '\u201cI can do that.\u201d',
      'Those four little words changed the direction of my life more times than I can count.',
      'Come take a walk with me through time.',
      'I\u2019ll tell you my story.',
      'Maybe it\u2019ll remind you to write the next chapter of yours.',
    ],
    frankieism: '\u201cBelief is where every dream begins.\u201d',
    actTransition: 'Let\u2019s Begin\u2026',
    welcomeLine: 'Welcome to the Journey',
  },

  whoIsFrankie: {
    title: 'Who Is Frankie?',
    opening: 'I have spent my life building things.',
    openingFollow: 'Not because I wanted more businesses, more titles, or more recognition — but because I saw possibilities where others saw obstacles.',
    builtList: [
      'I\'ve built companies.',
      'I\'ve built media platforms.',
      'I\'ve built communities.',
      'I\'ve built partnerships.',
      'I\'ve built opportunities for people who simply needed someone to believe in them.'
    ],
    thread: 'If there\'s one thread that connects everything I\'ve ever done, it\'s this:',
    belief: 'I believe people are capable of far more than they imagine.',
    beliefFollow: 'That belief has taken me on an extraordinary journey.',
    roles: 'I\'ve been an entrepreneur, broadcaster, author, artist, coach, investigator, nonprofit leader, government strategist, kickboxing promoter, and social impact advocate. Some careers lasted years. Others were seasons. None were accidents.',
    rolesFollow: 'Each one taught me something about people, resilience, creativity, and possibility.',
    valuesIntro: 'Three values have quietly guided every decision I\'ve ever made.',
    values: [
      { label: 'Entrepreneurship', reason: 'because freedom has always mattered more to me than security.' },
      { label: 'Creativity', reason: 'because creating is how I make sense of the world and express who I am.' },
      { label: 'Community', reason: 'because life\'s greatest achievements are never built alone.' }
    ],
    valuesFollow: 'Those three values have shaped every business, every radio show, every painting, every book, every cause, and every platform I\'ve created.',
    question: 'People often ask how I\'ve managed to do so many different things.',
    answer: 'The answer is simple.',
    followedList: [
      'I never chased careers.',
      'I followed curiosity.',
      'I followed purpose.',
      'And whenever a door didn\'t exist, I built one.'
    ],
    today: 'Today, I spend my time doing what I\'ve always loved most — connecting people, amplifying voices, creating opportunities, and reminding others that impossible is often just another word for "not yet."',
    closing: 'If my story inspires you, I hope it isn\'t because of what I\'ve accomplished.',
    closingFollow: 'I hope it\'s because it reminds you of what\'s still possible for your own life.',
    finalThought: 'Because visitors should leave here inspired, not impressed.',
    finalLine: 'And sometimes all a dream needs is someone bold enough to say…',
    cta: 'Let\'s do the impossible.'
  },

  acts: [
    {
      id: 'where-belief-began',
      number: 'I',
      title: 'Where Belief Began',
      tagline: 'Every life has an origin story.',
      color: '#D8C8EE',
      cssVar: '--act-belief',
      // Full narrative blocks rendered in sequence
      narrative: [
        { type: 'text', content: 'Every life has an origin story, and mine began in a home where my parents believed I could be or do anything I set my mind to. Being a girl was never presented as a limitation.' },
        { type: 'emphasis', content: 'For a little girl growing up in the late 1950s, that was a remarkable gift.' },
        { type: 'emphasis', content: 'It allowed me to imagine a life filled with possibilities.' },
        { type: 'text', content: 'My mother gave me one of the greatest gifts of all. She taught me to read by the age of three. The books I discovered and the characters who became my friends have been a source of comfort and joy ever since.' },
        { type: 'text', content: 'As a little girl, I disappeared into fairy tales every night. As I got older Nancy Drew was my hero. Books became my lifelong companion, and my love for reading has never faded. As long as I have a story to disappear into, I\u2019m never bored or lonely. Even today, I begin most mornings by reading. It\u2019s my meditation. Before the world starts asking things of me, I spend a little time feeding my imagination.' },
        { type: 'text', content: 'My parents didn\u2019t just encourage my imagination. They found ways for my creativity to express itself.' },
        { type: 'text', content: 'I didn\u2019t fully appreciate that until many years later while writing an exercise for my first book, Midlife Mojo\u2026.' },
        { type: 'text', content: 'When I was about six years old, they let me design my own bedroom.' },
        { type: 'emphasis', content: 'Of course it was going to be purple.' },
        { type: 'text', content: 'I chose lavender walls, deep purple carpet, and a beautiful white canopy bed any girl would have loved.' },
        { type: 'text', content: 'To everyone else, it was just a lot of purple.' },
        { type: 'bold-emphasis', content: 'To me, it was perfect!' },
        { type: 'emphasis', content: 'It was where a little girl became a princess every night\u2026 and where dreams were born.' },
        { type: 'text', content: 'The only thing missing was a puppy.' },
        { type: 'text', content: 'That would come next.' },
        { type: 'bold-emphasis', content: 'I learned that making decisions was exciting….and that paint isn’t permanent.' },
        { type: 'text', content: 'It was just one of those moments where Dad and I shared a language of freedom disguised as creativity.' },
        { type: 'text', content: 'My dad refused to let other people\u2019s fears become his reality and he never measured my dreams against what seemed practical. Did he ever tell me to be realistic? To dream smaller because I was a girl?' },
        { type: 'bold-emphasis', content: 'Not on your life!' },
        { type: 'emphasis', content: 'Instead, he simply believed I could do whatever I set my mind to.' },
        { type: 'emphasis', content: 'Because he believed it, I believed it too.' },
        { type: 'text', content: 'When I was eight years old, my father promised his horse-crazy daughter that when she turned ten, he\u2019d buy her a horse. There was just one tiny problem. Horses don\u2019t fit very well in suburban backyards. You can\u2019t have a horse without a farm.' },
        { type: 'text', content: 'So every weekend, the two of us climbed into his dark green Thunderbird and drove through the countryside looking at farms for sale.' },
        { type: 'text', content: 'My father dreamed of rolling hills that reminded him of the English countryside and the farm where he had worked as a young immigrant.' },
        { type: 'text', content: 'I dreamed about the horse and all the animals that would one day be waiting for me.' },
        { type: 'text', content: 'Eventually, we found the farm, and soon after he kept his promise. One day I came home to see a beautiful white gelding with striking blue eyes and the gentlest soul imaginable waiting for me. He was a perfect gentleman and so I named him Cavalier.' },
        { type: 'emphasis', content: 'He wasn\u2019t simply my horse.' },
        { type: 'emphasis', content: 'He was my best friend.' },
        { type: 'text', content: 'He also had a sense of humour only a horse could appreciate\u2026.' },
        { type: 'text', content: 'Years later, I realized the greatest gift wasn\u2019t Cavalier, although he was pretty wonderful.' },
        { type: 'text', content: 'The real gift was watching my father embrace my dream as though it were his own. He didn\u2019t just buy me a horse. He spent months driving country roads looking for the right farm. He gave up weekends. He invested his time, his money, and his heart so a little girl\u2019s dream could become reality.' },
        { type: 'text', content: 'Looking back now, as a parent myself, I understand it in a completely different way. There is something deeply satisfying about helping your children experience the joy of a dream fulfilled.' },
        { type: 'emphasis', content: 'Only later did I understand what my father had quietly shown me all along.' },
        { type: 'emphasis', content: 'Keep your promises.' },
        { type: 'emphasis', content: 'Dreams require space to breathe and commitment to bring into reality.' },
        { type: 'emphasis', content: 'Refuse to let other people’s fears redefine your reality.' },
      ],
      // Visual breaths — standalone lines rendered in large typography
      visualBreaths: [
        'With that kind of encouragement, it\u2019s no wonder my dreams kept multiplying.',
      ],
      // Second half of the narrative (after visual breaths)
      narrativePart2: [],
      // Playful childhood dreams section (scrapbook style)
      childhoodDreams: [
        { dream: 'veterinarian', image: '/veterinarian.png' },
        { dream: 'jockey', image: '/jockey.png' },
        { dream: 'radio DJ', image: '/radio-dj.png' },
        { dream: 'author', image: '/author.png' },
        { dream: 'artist', image: '/artist.png' },
        { dream: 'National Geographic Photographer', image: '/national-geographic- photographer.png' },
        { dream: 'writer for Life Magazine', image: '/writer-of-life-magazine.png' },
        { dream: 'actor', image: '/actor.png' },
      ],
      // Post-scrapbook narrative
      narrativePart3: [
        { type: 'text', content: 'I played records on my little suitcase record player and imagined introducing songs to listeners I couldn\u2019t see. I sent away for the National Institute of Broadcasting Record so I could learn how to be on the radio. I filled diaries with stories, dreaming about the books I would write of my own.' },
        { type: 'text', content: 'I wasn\u2019t just dreaming about these things. I was already trying to become them.' },
        { type: 'text', content: 'As I grew older, the circle of people who believed in me grew too.' },
        { type: 'text', content: 'I was fortunate to have another \u2018believer\u2019 in my life, and her name was Mrs. Loughty.' },
        { type: 'text', content: 'My parents decided to send me to Havergal College, an all-girls\u2019 school with the structure, traditions, and discipline of a British boarding school. In fact, I lived there my last year of attendance.' },
        { type: 'text', content: 'It was there that I met my English teacher, Mrs. Loughty, who recognized my potential as a writer long before I saw it in myself.' },
        { type: 'emphasis', content: 'Mrs. Loughty was as tough as nails.' },
        { type: 'text', content: 'I wasn\u2019t the only student to feel this way. My whole class did. The first half of the semester went by and no one ever received a mark higher than a \u2018C\u2019. I used to say that she expected us to be Pearl S. Buck or some other famous author before she would give us a good mark.' },
        { type: 'bold-emphasis', content: 'Some might call this a lesson in perseverance. I called it getting another \u2018D\u2019!' },
        { type: 'text', content: 'Mrs. Loughty taught me that talent alone wasn\u2019t enough. After collecting so many \u2018D\u2019s, I certainly didn\u2019t think I had much talent. What I did have though was a love for writing and reading. I knew that to be a great writer one had to be a great reader. Thankfully that part came naturally to me.' },
        { type: 'text', content: 'The lesson I learned in that class was this:' },
        { type: 'emphasis', content: 'Hard work mattered.' },
        { type: 'emphasis', content: 'Discipline mattered.' },
        { type: 'emphasis', content: 'Staying the course mattered.' },
        { type: 'text', content: 'I didn\u2019t know it then, and maybe she didn\u2019t either, but her unwavering standards prepared me for university and, more importantly, they prepared me for life.' },
        { type: 'emphasis', content: 'The day I finally received an \u2018A\u2019 in her class felt like winning Olympic gold. I didn\u2019t just earn her respect, I earned my own too, and that meant everything to me.' },
        { type: 'text', content: 'Between my parents and Mrs. Loughty, I was given an extraordinary foundation.' },
        { type: 'emphasis', content: 'One taught me to love reading.' },
        { type: 'emphasis', content: 'One taught me to believe in myself.' },
        { type: 'emphasis', content: 'One taught me that talent without perseverance remains only potential.' },
        { type: 'separator' },
        { type: 'text', content: 'Life, of course, had plans of its own.' },
        { type: 'text', content: 'Those childhood dreams quietly slipped into the background. Or so I thought.' },
        { type: 'text', content: 'Years later, I discovered they had never really left me. I became a DrumHER in my 30\u2019s, and an author in my late 40\u2019s. I found my voice behind a microphone in 2007. I discovered painting and became a professional artist in my fifties. My love for animals never faded. It simply found new ways to express itself.' },
        { type: 'text', content: 'Years of coaching people through reinvention taught me something remarkable.' },
        { type: 'boxed', content: 'Our childhood dreams don\u2019t disappear. They simply wait for us to remember them. Midlife isn\u2019t about finding yourself. It\u2019s about returning to the parts of yourself you left behind.' },
        { type: 'text', content: 'Looking back, I realize my father didn\u2019t just give me a horse, and Mrs. Loughty didn\u2019t just teach me English. Together they gave me the confidence to become the architect of my own life.' },
        { type: 'text', content: 'Someone who would spend the rest of her life helping other people believe in themselves.' },
        { type: 'centered', lines: ['A Builder and A Believer.'] },
        { type: 'text', content: 'Every meaningful thing I\u2019ve ever built was the direct result of someone\u2019s belief in me, even if that someone was me.' },
      ],
      frankieism: 'Believing in someone is one of the purest expressions of love.',
      reflection: 'Who first believed in you?',
      heartbeat: 'Love expressed through belief.',
      timeline: [
        { year: 'Early Years', title: 'Austria & Immigration', description: 'A childhood in Austria, followed by the bold move of immigration — carrying dreams, resilience, and entrepreneurial spirit that refused to be limited by circumstance.' },
        { year: 'Early Career', title: 'Entrepreneurial Beginnings', description: 'Founded Condom Sense, L\'esthétique, Connalin Development Corporation, and Franko Investigations — building diverse business experience across health promotion, aesthetics, development, and investigations.' }
      ]
    },
    {
      id: 'building',
      number: 'II',
      title: 'Becoming',
      tagline: 'Some lessons can\u2019t be taught in a classroom.',
      color: '#FFF0CC',
      cssVar: '--act-building',
      // Act II narrative — Frankie’s teen years: Kentucky, desegregation, photography, sales, first ventures.
      // Words preserved exactly from "Act Two Revised and Ready"; only formatting/hierarchy/pacing applied.
      // Image blocks are styled placeholders; replace `src` when archival assets arrive (see suggestions in each caption).
      story: [
        { type: 'emphasis', content: 'It\u2019s one thing to think something and another to experience it.' },
        { type: 'text', content: 'I was 14 when we moved from Toronto to Louisville, Kentucky.' },
        { type: 'text', content: 'My father was given a big promotion and asked to make a newly acquired company in the USA profitable for its new owners.' },
        { type: 'text', content: 'We didn\u2019t know how long we would be gone, so my dad sold most of the farm, all the animals, and our home. He kept 100 acres for a future time.' },
        { type: 'text', content: 'As for me, I left everything I loved behind: my horses, my best friend, and the only world I knew.' },
        { type: 'image', id: 'act2-move', alt: 'A vintage moving truck on the long road from Canada to Kentucky', caption: 'Leaving Canada \u2014 the farm, the horses, and the only world she knew.', hint: 'Suggested: vintage moving truck, a Canada\u2192Kentucky map, farm and horses.' },
        { type: 'text', content: 'We moved into a beautiful home in a lovely gated community with a country club where I could go with my friends, order food, and sign a tab whenever I wanted. Sounds horrible, right?' },
        { type: 'text', content: 'I went from a school with 10 girls in a class to a high school of more than 3,000 students. My English class consisted of 10 televisions that seemed to be tuned to The Beverly Hillbillies at all times. I don\u2019t even remember seeing an English teacher.' },
        { type: 'text', content: 'Culture shock? That wasn\u2019t the half of it. Football? Homecoming queen? I had never heard of these things. Then this happened.' },

        { type: 'heading', content: 'When History Walked Into My Classroom' },
        { type: 'image', id: 'act2-desegregation', alt: 'An empty school hallway lined with lockers', caption: 'The first year of desegregation, Louisville, Kentucky.', hint: 'Suggested: old school hallway, a classroom door, lockers, or a school bus. Documentary tone, dignified \u2014 no graphic imagery.' },
        { type: 'text', content: 'It was the first year of desegregation, and our school was no exception.' },
        { type: 'text', content: 'What do you think happens when you put 1,000 inner-city Black students on school buses and drop them into the richest, whitest neighborhood in Louisville?' },
        { type: 'emphasis', content: 'Kumbaya? Not even close.' },
        { type: 'text', content: 'Unbeknownst to me, I had just moved into a powder keg of American history. Great for a photojournalist. Not so great for a 14 year old with no friends and no frame of reference.' },
        { type: 'text', content: 'Even in my neighborhood, the lines were being drawn.' },
        { type: 'text', content: 'The first girl I met, Lissie, lived two doors down. She wore a bracelet with the letters MIA. I had no idea what they meant. When I asked, she looked surprised.' },
        { type: 'dialogue', content: '\u201cIt means my dad is Missing in Action.\u201d' },
        { type: 'text', content: 'He had gone to Vietnam and never come home.' },
        { type: 'emphasis', content: 'That was my first real lesson in world affairs.' },
        { type: 'text', content: 'Vietnam. Civil rights. Racism. These weren\u2019t conversations my parents and I had around the dinner table. They soon became impossible to avoid.' },
        { type: 'text', content: 'Many of the parents in our neighborhood fiercely opposed integration. They didn\u2019t believe the races should mix. I couldn\u2019t understand why.' },
        { type: 'text', content: 'The Black people I had known growing up in Canada were mostly from Jamaica and Trinidad. I had no reference for the racial divide I was about to witness in the American South.' },
        { type: 'text', content: 'When Jefferson County implemented its integration plan, all hell broke loose.' },
        { type: 'text', content: 'White students threw bricks at school buses carrying Black students. Fires were started. Protests erupted.' },
        { type: 'text', content: 'And inside the school, the tension was relentless.' },
        { type: 'text', content: 'Fights broke out almost daily in the hallways, by the lockers, and in the cafeteria. We were sitting on a powder keg of fear, anger, and resentment.' },
        { type: 'text', content: 'There was no safe space for these students.' },
        { type: 'emphasis', content: 'They were just kids trying to go to school.' },
        { type: 'text', content: 'Instead, they were kicked, punched, insulted, and expected to somehow accept it with grace.' },
        { type: 'bold-emphasis', content: 'I was horrified.' },
        { type: 'text', content: 'I wanted to stop the violence, to reason with someone, anyone. But I was fourteen and completely powerless.' },
        { type: 'text', content: 'Until then, racism had been something I\u2019d heard about. Now I was watching it unfold in front of me.' },
        { type: 'emphasis', content: 'I did understand prejudice.' },
        { type: 'text', content: 'I had grown up in a Jewish family. Most of my father\u2019s family had been murdered in the Holocaust, and my dad had risked everything to help save his parents and brother. (You can read that remarkable story in my book For Want of 40 Pounds.)' },
        { type: 'text', content: 'I also knew that my father had once been refused entry to a prestigious Toronto country club because of a sign that effectively read:' },
        { type: 'pullquote', content: 'No Jews Allowed.' },
        { type: 'text', content: 'Toronto in the 1960s and \u201970s was still very much a WASP society: White Anglo Saxon Protestant.' },
        { type: 'text', content: 'I was furious on my father\u2019s behalf. How could they insult the best man I knew, someone everyone respected and loved? I was about 10 years old, and that day I learned one of the most important lessons of my life.' },
        { type: 'text', content: 'I asked my dad, \u201cWhy didn\u2019t you just pass and go in?\u201d He didn\u2019t have what people called an ethnic look. He could pull off almost any accent and seem as though he came from anywhere. His skin was light, his nose was neither large nor small, and he was handsome.' },
        { type: 'text', content: 'He told me that if he did that, he would be dishonouring the memory of every Jew killed in the Holocaust. They had died for the crime of being Juden. Even if I chose not to practise a religion, or chose a different one in the future, I should never deny where I came from.' },
        { type: 'text', content: 'By the age of 12, I had decided I wanted nothing to do with organized religion. I attended an Anglican girls\u2019 school, where we had prayers every morning, and on Sundays I attended temple services. To me, religion seemed like a way to control the masses and make people who had very little give money so the institution could become richer.' },
        { type: 'text', content: 'I believed in a higher being, but I believed I could pray anywhere. In fact, I felt closer to God in a cornfield than in a place where everyone arrived wearing their finest clothes and jewellery. To me, it felt as though they were showing off.' },
        { type: 'text', content: 'Then there were all the wasted years of war and killing in the name of religion. Jews and Christians. Christians and Muslims. Sunni and Shia. Protestants and Anglicans. What had any of it accomplished? Absolutely nothing. For thousands of years they fought, and they still fight. All for nothing. What a waste.' },
        { type: 'text', content: 'As livid as I was, he wasn\u2019t.' },
        { type: 'text', content: 'He simply told me not to worry about it. He believed things would eventually change.' },
        { type: 'emphasis', content: 'And they did.' },
        { type: 'text', content: 'Immigration has a remarkable way of reshaping a city.' },
        { type: 'text', content: 'Each new wave of newcomers initially faced the same suspicion once directed at those who had arrived before them. But over time they became part of the city\u2019s fabric, enriching it with new languages, traditions, food, music, and ideas.' },
        { type: 'text', content: 'Watching Toronto evolve taught me something I\u2019ve never forgotten.' },
        { type: 'emphasis', content: 'Prejudice isn\u2019t permanent. It simply finds a new target until people decide it doesn\u2019t have one anymore.' },
        { type: 'text', content: 'Today, Toronto is one of the most multicultural cities in the world. Its diversity is one of its greatest strengths.' },
        { type: 'text', content: 'Watching that transformation gave me hope for a better future.' },
        { type: 'text', content: 'Not long ago, I made an incredible observation while on a day trip with my husband.' },
        { type: 'text', content: 'While he went to get me a bottle of water, I looked around and noticed something remarkable. Every couple holding hands appeared to be from different ethnic backgrounds: an East Indian girl with a Black boy, a Japanese boy with a white girl, a Chinese girl with an East Indian boy. My husband and I seemed to be the only white couple there. When he returned, I told him, \u201cReally, really soon, we will be one people. Won\u2019t that be something?\u201d' },
        { type: 'emphasis', content: 'Societies can change.' },
        { type: 'emphasis', content: 'Just not always at the same pace.' },
        { type: 'frankieism', content: 'Some lessons can\u2019t be taught in a classroom. They have to be experienced.' },

        { type: 'heading', content: 'Finding My Eye' },
        { type: 'image', id: 'act2-photography', alt: 'A vintage Voigtl\u00e4nder camera resting beside strips of film', caption: 'Her father\u2019s old Voigtl\u00e4nder \u2014 and the school darkroom where she found her eye.', hint: 'Suggested: Voigtl\u00e4nder camera, negatives, darkroom, contact sheets, film strips.' },
        { type: 'text', content: 'I began spending more and more time in the school darkroom. It kept me out of the classroom while feeding my growing love of photography.' },
        { type: 'text', content: 'Most of the wealthy kids had expensive SLR cameras. I had my dad\u2019s old Voigtl\u00e4nder.' },
        { type: 'bold-emphasis', content: 'It didn\u2019t matter.' },
        { type: 'text', content: 'The camera taught me something far more valuable than owning the latest equipment. Great photographs aren\u2019t made by expensive cameras. They\u2019re made by the person looking through the lens.' },
        { type: 'text', content: 'Seeing the subject before pressing the shutter. Composing the story. Then bringing it to life in the darkroom.' },
        { type: 'emphasis', content: 'Part instinct. Part creativity.' },
        { type: 'text', content: 'I hated school, with a capital H.' },
        { type: 'emphasis', content: 'So, at sixteen, I left.' },
        { type: 'text', content: 'I went to the Board of Education, earned my GED, then asked if I could write the SATs. I finished in the top 16 percent in the United States that year.' },
        { type: 'bold-emphasis', content: 'Thank you, Mrs. Loughty.' },
        { type: 'text', content: 'Aside from her Grade 8 English class, I had very little formal instruction. She truly was a godsend.' },
        { type: 'text', content: 'Now I was sixteen, out of school, and it was time to earn a living. I\u2019d already worked as a dishwasher, waitress, and server, but I knew those jobs weren\u2019t going to become my future.' },
        { type: 'text', content: 'The camera had taught me something else.' },
        { type: 'text', content: 'It showed me positive and negative space.' },
        { type: 'text', content: 'Life, I discovered, worked much the same way.' },
        { type: 'emphasis', content: 'You get to choose what you focus on.' },

        { type: 'heading', content: 'Fast Cars, Fast Lessons' },
        { type: 'text', content: 'Like a lot of teenagers, I started hanging around with kids who were a little older, and a little faster.' },
        { type: 'text', content: 'Louisville had a nightlife all its own. People didn\u2019t head out until ten or eleven at night because the bars stayed open until four in the morning, and until six during Derby weekend. Breakfast came after the clubs. Then everyone went to bed.' },
        { type: 'emphasis', content: 'Alcohol and drugs were everywhere.' },
        { type: 'bold-emphasis', content: 'Yes. I was part of that scene.' },
        { type: 'text', content: 'I landed a job cocktail waitressing at The Timepiece, one of Louisville\u2019s hottest clubs. Before they became household names, bands like Bob Seger, Charlie Daniels, and Lynyrd Skynyrd played there.' },
        { type: 'text', content: 'Two doors down was a gay bar where I loved to begin my evenings. We\u2019d dance with the drag queens before their shows and laugh until our sides hurt. Does anyone remember the Bump? On the other side was a bluegrass bar, and eventually I worked there too.' },
        { type: 'text', content: 'Just after my birthday, my dad bought me a little Fiat 124 convertible. I adored that car.' },
        { type: 'emphasis', content: 'My job interview?' },
        { type: 'emphasis', content: 'Seeing how many tequila shots I could drink.' },
        { type: 'bold-emphasis', content: 'I made it to eleven.' },
        { type: 'bold-emphasis', content: 'I got the job.' },
        { type: 'text', content: 'I also remember crawling to my car on my hands and knees.' },
        { type: 'text', content: 'I don\u2019t remember getting home.' },
        { type: 'emphasis', content: 'I never did that again.' },
        { type: 'text', content: 'Ironically, today I don\u2019t drink at all.' },
        { type: 'text', content: 'When I returned to Canada, my parents had divorced, and I moved into an apartment with my dad. Not long afterward, I received a recruitment letter from Webster College in St. Louis. My SAT scores had earned me a place in their photojournalism program.' },
        { type: 'text', content: 'It sounded like exactly the kind of adventure I\u2019d been waiting for.' },
        { type: 'emphasis', content: 'Besides..' },
        { type: 'bold-emphasis', content: 'My dad was getting remarried.' },
        { type: 'emphasis', content: 'Yes..' },
        { type: 'bold-emphasis', content: 'I was jealous.' },

        { type: 'heading', content: 'Journalism Meets Reality' },
        { type: 'image', id: 'act2-journalism', alt: 'A vintage typewriter beside an open reporter\u2019s notebook', caption: 'Notebooks, a typewriter, and the conviction to shine a light.', hint: 'Suggested: newspaper textures, notebooks, vintage typewriter, interview notes, a microphone.' },
        { type: 'text', content: 'My dad drove me to St. Louis so I\u2019d have my car, then flew back to Toronto.' },
        { type: 'text', content: 'Within five minutes I thought I was going to die.' },
        { type: 'text', content: 'I\u2019d never experienced heat and humidity like that before. It was August, the dorms had no air conditioning, and I couldn\u2019t imagine surviving four years.' },
        { type: 'text', content: 'Looking back, it probably sounds as though I hated school.' },
        { type: 'bold-emphasis', content: 'I didn\u2019t.' },
        { type: 'emphasis', content: 'I loved learning.' },
        { type: 'text', content: 'I just didn\u2019t always love where I was learning.' },
        { type: 'text', content: 'Webster was filled with incredibly talented musicians, actors, singers, writers, and artists. If someone could have picked it up and dropped it into another city, I probably would have stayed forever.' },
        { type: 'text', content: 'Instead, I couldn\u2019t wait to move off campus.' },
        { type: 'text', content: 'My best friend, Deniece, and I decided to find an apartment together.' },
        { type: 'text', content: 'She was Black and an extraordinary singer.' },
        { type: 'text', content: 'Before we even started looking, she warned me not to visit her neighbourhood in East St. Louis.' },
        { type: 'dialogue', content: '\u201cThey\u2019ll kill you.\u201d' },
        { type: 'emphasis', content: 'Literally.' },
        { type: 'text', content: 'What kind of city was this?' },
        { type: 'text', content: 'In St. Louis, one block could be Black, the next white.' },
        { type: 'text', content: 'We found an apartment advertised for $400 a month.' },
        { type: 'emphasis', content: 'Perfect.' },
        { type: 'text', content: 'The landlord smiled until he looked at Deniece.' },
        { type: 'dialogue', content: '\u201cIs she going to be living with you?\u201d' },
        { type: 'dialogue', content: '\u201cYes.\u201d' },
        { type: 'text', content: 'His smile disappeared.' },
        { type: 'dialogue', content: '\u201cThen it\u2019s a thousand dollars.\u201d' },
        { type: 'text', content: 'I stared at him.' },
        { type: 'dialogue', content: '\u201cYou just said four hundred.\u201d' },
        { type: 'dialogue', content: '\u201cI don\u2019t want Black people living in my building.\u201d' },
        { type: 'bold-emphasis', content: 'I was furious.' },
        { type: 'bold-emphasis', content: 'Deniece wasn\u2019t.' },
        { type: 'text', content: 'She simply smiled, as though she\u2019d heard it a hundred times before.' },
        { type: 'emphasis', content: 'That broke my heart even more.' },
        { type: 'text', content: 'I didn\u2019t know what to do with all that anger.' },
        { type: 'bold-emphasis', content: 'So I wrote.' },
        { type: 'emphasis', content: 'That\u2019s what journalists do.' },
        { type: 'text', content: 'That moment reminded me why I\u2019d wanted to become a photojournalist in the first place: to shine a light on the things that were wrong with society.' },
        { type: 'text', content: 'Not long afterward, I landed my first major interview.' },
        { type: 'bold-emphasis', content: 'The Reverend Jesse Jackson.' },
        { type: 'emphasis', content: 'Civil rights leader. Founder of Operation PUSH.' },
        { type: 'text', content: 'I could hardly believe he agreed to meet with me.' },
        { type: 'text', content: 'To me, it felt like interviewing a rock star. He was to me!' },

        { type: 'heading', content: 'Going North Again' },
        { type: 'text', content: 'I couldn\u2019t wait to leave St. Louis and return to Canada.' },
        { type: 'text', content: 'But when I got home, something had changed.' },
        { type: 'emphasis', content: 'Or maybe\u2026' },
        { type: 'bold-emphasis', content: 'I had.' },
        { type: 'text', content: 'Friends of my dad generously opened their home to me while I got settled.' },
        { type: 'text', content: 'One evening I went out for a drink by myself and was refused entry to a bar.' },
        { type: 'dialogue', content: '\u201cWhy?\u201d I asked.' },
        { type: 'text', content: 'Apparently, a woman alone couldn\u2019t possibly be there to enjoy a drink.' },
        { type: 'text', content: 'They assumed I was a prostitute.' },
        { type: 'emphasis', content: 'I laughed.' },
        { type: 'dialogue', content: '\u201cI\u2019m with the band,\u201d I said.' },
        { type: 'bold-emphasis', content: 'I wasn\u2019t.' },
        { type: 'text', content: 'But I wasn\u2019t a lady of the night either.' },
        { type: 'emphasis', content: 'Maybe there really is no such thing as going home.' },

        { type: 'heading', content: 'Never Say No to a Dare' },
        { type: 'text', content: 'One night I was sitting in a bar when I overheard a group of guys talking about the life insurance licensing exam. One of them had already passed, and the others were complaining about how difficult it was.' },
        { type: 'text', content: 'Eventually they started chatting me up and bet me I couldn\u2019t pass it.' },
        { type: 'text', content: 'I looked at them like they were crazy.' },
        { type: 'text', content: 'They looked at me like I had two heads.' },
        { type: 'text', content: 'I needed a job, so I made them a deal.' },
        { type: 'dialogue', content: '\u201cI\u2019ll take the exam, but only if you guarantee me a job if I pass.\u201d' },
        { type: 'text', content: 'They laughed.' },
        { type: 'text', content: 'I think they were pretty confident I wouldn\u2019t.' },
        { type: 'bold-emphasis', content: 'I passed.' },
        { type: 'text', content: 'Not only did I pass, I outsold every man in my department for weeks.' },
        { type: 'text', content: 'Eventually my manager called me into his office.' },
        { type: 'dialogue', content: '\u201cFrankie,\u201d he said, \u201cyou\u2019re demoralizing the team.\u201d' },
        { type: 'dialogue', content: '\u201cOh?\u201d' },
        { type: 'dialogue', content: '\u201cCould you sell less?\u201d' },
        { type: 'emphasis', content: 'Sell less?' },
        { type: 'text', content: 'I stared at him.' },
        { type: 'dialogue', content: '\u201cWhy don\u2019t you tell them to sell more?\u201d' },
        { type: 'text', content: 'I loved working on commission. There was no ceiling. If I worked harder, I earned more. It was one of the first times I realized I wasn\u2019t built for limits, or bosses who thought average was a goal.' },
        { type: 'text', content: 'People told me I was lucky.' },
        { type: 'bold-emphasis', content: 'I disagreed.' },
        { type: 'emphasis', content: 'Luck is where preparation meets opportunity.' },
        { type: 'frankieism', content: 'Opportunities come to all of us. The difference is whether we act on them.' },
        { type: 'text', content: 'I eventually left that company because some of the men decided my success had nothing to do with ability.' },
        { type: 'emphasis', content: 'Apparently\u2026' },
        { type: 'bold-emphasis', content: 'It was my breasts.' },
        { type: 'text', content: 'I heard the same thing when I became the top salesperson at a car dealership.' },
        { type: 'text', content: 'My \u201cmagical breasts\u201d were, once again, crushing fragile male egos.' },
        { type: 'text', content: 'It couldn\u2019t possibly have been because I\u2019d studied what was under the hood, understood the products, or learned how to read people.' },
        { type: 'text', content: 'Long before emotional intelligence became a business buzzword, I was using it every day. I instinctively adapted my approach to different personality types, listened carefully, and sold people what they actually needed, not just what I wanted to sell.' },
        { type: 'emphasis', content: 'Funny\u2026' },
        { type: 'text', content: 'No one ever gave my brain much credit.' },
        { type: 'separator' },
        { type: 'text', content: 'Photography never completely let go of me.' },
        { type: 'image', id: 'act2-racing', alt: 'A film camera at the edge of a Formula One pit lane', caption: 'A summer with Team EST \u2014 Formula One, from Bowmanville to Watkins Glen.', hint: 'Suggested: vintage race photography, pit-lane atmosphere, a film camera.' },
        { type: 'text', content: 'For one unforgettable summer I travelled with Werner Gerhard\u2019s Team EST Formula One racing team, photographing races from Bowmanville to Watkins Glen.' },
        { type: 'emphasis', content: 'It was exciting, loud, fast, and everything I\u2019d imagined.' },
        { type: 'text', content: 'Unfortunately, excitement doesn\u2019t always pay the rent.' },
        { type: 'text', content: 'So I became a travelling baby photographer across Ontario.' },
        { type: 'text', content: 'The photographers and salespeople often shared rooms to stretch our tiny expense allowance of twenty dollars a day for food and lodging.' },
        { type: 'text', content: 'It was there that I met the man who would eventually become my first husband.' },
        { type: 'text', content: 'He was a wonderful baby photographer, and selling his portraits was effortless.' },
        { type: 'text', content: 'Once again, I discovered I loved sales.' },
        { type: 'emphasis', content: 'Commission suited me.' },
        { type: 'text', content: 'I made one small mistake, though.' },
        { type: 'text', content: 'I assumed that because he was wonderful with babies, he\u2019d automatically make a wonderful father.' },
        { type: 'text', content: 'Years later we married.' },
        { type: 'emphasis', content: 'Let\u2019s just say\u2026' },
        { type: 'bold-emphasis', content: 'I misjudged the daddy gene.' },
        { type: 'separator' },
        { type: 'text', content: 'Eventually I left photography to study makeup artistry and esthetics, another passion of mine.' },
        { type: 'image', id: 'act2-entrepreneurship', alt: 'A small salon storefront with a hand-lettered sign', caption: 'Her first real taste of entrepreneurship \u2014 a business of her own inside a salon.', hint: 'Suggested: salon, storefront, business cards, small-business details.' },
        { type: 'text', content: 'I bartended while I studied, then managed a women\u2019s fashion store before opening my own esthetics business inside a hair salon.' },
        { type: 'bold-emphasis', content: 'It was my first real taste of entrepreneurship.' },
        { type: 'emphasis', content: 'Creating something that belonged to me.' },
        { type: 'emphasis', content: 'Building a career with my own hands.' },
        { type: 'text', content: 'Discovering that if opportunity didn\u2019t knock\u2026' },
        { type: 'bold-emphasis', content: 'I could build my own door.' },

        { type: 'heading', content: 'Collecting Tools' },
        { type: 'text', content: 'Looking back, I can see I wasn\u2019t changing careers because I lacked direction.' },
        { type: 'bold-emphasis', content: 'I was collecting tools.' },
        { type: 'text', content: 'Every city, every job, every success, every mistake, every injustice, and every unexpected opportunity was quietly preparing me for something I couldn\u2019t yet see.' },
        { type: 'text', content: 'At the time, none of it seemed connected.' },
        { type: 'emphasis', content: 'Years later, every piece fit.' },
        { type: 'emphasis', content: 'Photography taught me to observe.' },
        { type: 'emphasis', content: 'Sales taught me to understand people.' },
        { type: 'emphasis', content: 'Entrepreneurship taught me to trust my instincts.' },
        { type: 'text', content: 'Together, they became the foundation for everything that followed.' },
        { type: 'text', content: 'By then I had already left home more than once.' },
        { type: 'emphasis', content: 'Soon\u2026' },
        { type: 'bold-emphasis', content: 'I would discover another arena.' },
        { type: 'centered', lines: ['The ring.'] },
      ],
      intro: 'With resilience as her foundation, Frankie began building — businesses, systems, and organizations that would create opportunities for others. From pioneering kickboxing promotion to leading government transformation.',
      heartbeatLine: 'Every remarkable life begins because someone believed first.',
      frankieism: 'Every remarkable life begins because someone believed first.',
      ventures: [
        { name: 'The Good Radio Network', role: 'Founder and CEO', description: 'International positive-impact media platform. Host of Mission Unstoppable and FrankieSense and More.', impact: 'International reach' },
        { name: 'G-Woman Media', role: 'Co-Founder and VP, Americas', description: 'Global multimedia platform focused on women\'s leadership, publishing, media, and community initiatives. Home to Conversation with My Shoes and Thoughtatudes.', impact: 'Global platform' },
        { name: 'Rent A Believer', role: 'Founder • Executive Coach • Master Coach Trainer', description: 'Executive coaching and master coach training focused on leadership, personal development, and transformational growth.', impact: 'Leaders transformed' },
        { name: 'Roundhouse Promotions', role: 'Founder and Owner', description: 'First professional female kickboxing promoter in the world. Produced championship events, secured media exposure, and managed an ISKA World Champion.', impact: 'World first' },
        { name: 'Traffic Marketing', role: 'Contractor', description: 'Professional boxing management, fight promotion, sponsorship development, and event marketing.', impact: 'Events promoted' },
        { name: 'Government of Ontario', role: 'Strategic Planning and Organizational Development Leader', description: 'Led strategic planning, organizational development, and employee engagement across Ministry of Solicitor General, Cabinet Office, and Ministry of Labour.', impact: 'Multiple ministries' }
      ],
      timeline: [
        { year: '1990s', title: 'Sports Promotion Pioneer', description: 'Founded Roundhouse Promotions, becoming the first professional female kickboxing promoter in the world. Produced championship events and managed an ISKA World Champion.' },
        { year: '2000s', title: 'Government & Organizational Leadership', description: 'Led strategic planning, organizational development, and employee engagement across multiple Ontario government ministries including Solicitor General, Cabinet Office, and Ministry of Labour.' }
      ]
    },
    {
      id: 'amplifying',
      number: 'III',
      title: 'Amplifying',
      tagline: 'Every voice deserves to be heard.',
      color: '#E0F4F4',
      cssVar: '--act-amplifying',
      intro: 'Having built the foundation, Frankie turned to amplifying voices — through radio, media, and platforms that gave others the stage they deserved. The Good Radio Network, Mission Unstoppable, and G-Woman Media became vehicles for changemakers everywhere.',
      heartbeatLine: 'When we amplify others, we discover our own voice.',
      frankieism: 'When we amplify others, we discover our own voice.',
      interviews: [
        { title: 'Women\'s Economic Forum Recognition', outlet: 'WEF', year: '2024' },
        { title: 'Top 50 Writers You Should Be Reading', outlet: 'Literary Recognition', year: '2015' },
        { title: 'Mission Unstoppable Guest Interviews', outlet: 'The Good Radio Network', year: 'Ongoing' }
      ],
      timeline: [
        { year: '2010s', title: 'Media Empire Building', description: 'Founded The Good Radio Network, an international positive-impact media platform. Host of Mission Unstoppable and FrankieSense and More. Co-founded G-Woman Media as VP, Americas.' }
      ]
    },
    {
      id: 'creating',
      number: 'IV',
      title: 'Creating',
      tagline: 'Art changes the way we see the world.',
      color: '#FDE8EF',
      cssVar: '--act-creating',
      intro: 'Beyond business and broadcasting, creativity runs through everything Frankie does — from publishing and painting to music and writing. Each creative endeavor has been a platform for connection and expression.',
      heartbeatLine: 'Art changes the way we see the world.',
      frankieism: 'Every platform we build becomes a stage for someone else\'s breakthrough moment.',
      works: [
        { type: 'book', title: 'International Bestselling Author', description: 'Midlife Mojo, For Want of 40 Pounds, and I Bared My Chest — all international bestsellers. Plus No Bull Allowed and contributing author to Business, Life and The Universe, Volume 3.' },
        { type: 'radio', title: 'Radio Broadcasting', description: 'Host of Mission Unstoppable and FrankieSense and More on The Good Radio Network, creating positive-impact programming.' },
        { type: 'art', title: 'Professional Artist', description: 'Original and commissioned works featured through Fine Art America. Creator of custom pet portraits and artwork supporting animal welfare and children\'s causes.' },
        { type: 'writing', title: 'Thought Leadership', description: 'Creator of Conversation with My Shoes and Thoughtatudes — platforms for voice, reflection, and community dialogue.' },
        { type: 'radio', title: 'Executive Coaching', description: 'Master Coach Trainer and ICF Accredited Coach, developing leaders and facilitating transformational growth through Rent A Believer.' },
        { type: 'art', title: 'Event Production', description: 'From championship kickboxing events to media productions, creating experiences that engage, inspire, and leave lasting impact.' }
      ],
      books: {
        featured: {
          title: 'Midlife Mojo',
          description: 'An international bestseller that offers wisdom, insight, and inspiration for navigating life\'s transitions with power and purpose. Part personal journey, part empowerment guide, this book speaks to anyone ready to embrace their next chapter.',
          quote: 'Every platform we build becomes a stage for someone else\'s breakthrough moment.'
        },
        other: [
          { title: 'For Want of 40 Pounds', year: 'International Bestseller', description: 'A compelling narrative exploring transformation and the power of small changes.' },
          { title: 'I Bared My Chest', year: 'International Bestseller', description: 'A vulnerable and powerful exploration of authenticity and courage.' },
          { title: 'No Bull Allowed', year: 'Published', description: 'A direct, no-nonsense guide to living authentically and leading with integrity.' },
          { title: 'Business, Life and The Universe, Volume 3', year: 'Contributing Author', description: 'Collaborative work exploring the intersections of business, life, and broader perspectives.' }
        ]
      }
    },
    {
      id: 'giving',
      number: 'V',
      title: 'Giving',
      tagline: 'Success means little unless it lifts someone else.',
      color: '#E8F0E0',
      cssVar: '--act-giving',
      intro: 'At the heart of Frankie\'s work is an unwavering commitment to community — building connections, creating opportunities, and empowering others to lead. From humanitarian work to mentoring, this act is about lifting as you climb.',
      heartbeatLine: 'Lifting others is how we rise ourselves.',
      frankieism: 'Lifting others is how we rise ourselves.',
      initiatives: [
        { name: 'Women\'s Leadership Initiatives', role: 'Platform Builder', description: 'Creating spaces through G-Woman Media and other ventures for women leaders to connect, share, and amplify each other\'s impact.' },
        { name: 'Health Promotion', role: 'Founder', description: 'Through Condom Sense, developed health promotion initiatives supporting safer-sex awareness and education.' }
      ],
      quote: 'Community is not just about being together — it\'s about building together, creating together, and rising together.',
      timeline: [
        { year: '2020s', title: 'Recognition & Legacy', description: 'Named Woman of the Decade by Women\'s Economic Forum (2024). Continues to build, mentor, and create through coaching, publishing, and community leadership.' }
      ]
    },
    {
      id: 'still-becoming',
      number: 'VI',
      title: 'Still Becoming',
      tagline: 'Your story is still unfolding.',
      color: '#FFF8F0',
      cssVar: '--act-still-becoming',
      intro: 'Act I gave her resilience. Act II taught her how to create. Act III showed her the power of giving others a voice. Act IV reminded her that art changes hearts. Act V proved that success means lifting others. Act VI says the story is still unfolding.',
      heartbeatLine: 'Reinvention is possible at every age.',
      frankieism: 'Reinvention is possible at every age.',
      mission: 'To continue building platforms that empower people, amplify ideas, and create lasting impact — while mentoring the next generation of leaders through coaching, media, and community development.',
      currentProjects: [
        { title: 'The Good Radio Network', description: 'Continuing to expand international positive-impact media programming and amplify voices that matter.' },
        { title: 'Executive Coaching', description: 'Developing leaders and facilitating transformational growth through Rent A Believer and master coach training.' },
        { title: 'Writing and Publishing', description: 'Continuing to share wisdom and insight through books, articles, and thought leadership.' },
        { title: 'Visual Art', description: 'Creating original and commissioned artwork supporting animal welfare and children\'s causes through Fine Art America.' }
      ],
      awards: {
        featured: {
          title: 'Woman of the Decade',
          org: 'Women\'s Economic Forum',
          description: 'Recognized for exceptional leadership in platform building, community development, and social impact entrepreneurship.',
          year: '2024'
        },
        items: [
          { title: 'Top 50 Writers You Should Be Reading', org: 'Literary Recognition', year: '2015' },
          { title: 'Communicator Achievement Recognition', org: 'Media Excellence', year: '2020s' },
          { title: 'Riipen Level UP Project Facilitator', org: 'Riipen', year: '2020s' },
          { title: 'Advance Ontario Project Facilitator', org: 'Advance Ontario', year: '2020s' },
          { title: 'International Bestselling Author', org: 'Multiple Titles', year: '2020s' },
          { title: 'First Female Kickboxing Promoter', org: 'Roundhouse Promotions', year: '1990s' }
        ]
      },
      legacyEvents: [
        { year: '1990s', title: 'Roundhouse Promotions', description: 'First professional female kickboxing promotion company.' },
        { year: '2000s', title: 'Government Leadership', description: 'Strategic planning across Ontario government ministries.' },
        { year: '2010s', title: 'The Good Radio Network', description: 'International positive-impact media platform launched.' },
        { year: '2020s', title: 'International Bestsellers', description: 'Midlife Mojo and other titles become international bestsellers.' },
        { year: '2024', title: 'Woman of the Decade', description: 'Honored by Women\'s Economic Forum for decade of impact.' },
        { year: 'Present', title: 'Still Becoming', description: 'Still building, still creating, still connecting.' }
      ]
    }
  ],

  impact: {
    title: 'Impact',
    subtitle: 'Legacy isn\'t what we leave behind — it\'s what we awaken in others.',
    stats: [
      { number: '30+', label: 'Years of Impact' },
      { number: '6', label: 'International Bestsellers' },
      { number: '1st', label: 'Female Kickboxing Promoter' },
      { number: '∞', label: 'Lives Touched' }
    ],
    pillars: [
      {
        title: 'Entrepreneurship',
        description: 'Built companies from the ground up — from health promotion to kickboxing promotion to media platforms. Each venture created opportunities for others.',
        icon: 'freedom'
      },
      {
        title: 'Creativity',
        description: 'Through art, writing, broadcasting, and music — creativity became the bridge between personal expression and community connection.',
        icon: 'creativity'
      },
      {
        title: 'Community',
        description: 'Every platform built became a stage for someone else\'s breakthrough. Mentoring, amplifying voices, and creating spaces for others to rise.',
        icon: 'community'
      },
      {
        title: 'Leadership',
        description: 'From government ministries to international media — leading with belief, not authority. Creating environments where reinvention is possible.',
        icon: 'leadership'
      }
    ]
  },

  art: {
    title: 'Art',
    subtitle: 'Creating is how I make sense of the world and express who I am.',
    intro: 'Art has always been Frankie\'s first language — before business, before broadcasting, before books. Painting, writing, and music are not hobbies. They are the core of who she is.',
    mediums: [
      {
        title: 'Painting',
        description: 'Original and commissioned works featured through Fine Art America. Custom pet portraits and artwork supporting animal welfare and children\'s causes.',
        style: 'Expressive, vibrant, emotionally driven'
      },
      {
        title: 'Writing',
        description: 'Six published books including international bestsellers. From memoir to empowerment guides — each book is a conversation with the reader.',
        style: 'Authentic, vulnerable, transformative'
      },
      {
        title: 'Broadcasting',
        description: 'Mission Unstoppable, FrankieSense and More, Conversation with My Shoes, Thoughtatudes — each show a platform for voices that deserve to be heard.',
        style: 'Conversational, inspiring, community-focused'
      },
      {
        title: 'Music',
        description: 'Music as emotional expression and creative outlet — another channel for the stories that need to be told.',
        style: 'Soulful, personal, expressive'
      }
    ],
    gallery: [
      { title: 'Original Works', description: 'Featured on Fine Art America' },
      { title: 'Commissioned Portraits', description: 'Custom pet and people portraits' },
      { title: 'Charity Art', description: 'Supporting animal welfare & children' }
    ]
  },

  media: {
    title: 'Media',
    subtitle: 'Every voice deserves to be heard.',
    shows: [
      { title: 'Mission Unstoppable', type: 'radio', description: 'Flagship show on The Good Radio Network featuring conversations with leaders, artists, and community builders.', years: 'Ongoing' },
      { title: 'FrankieSense and More', type: 'radio', description: 'Dynamic radio program exploring leadership, personal development, and social impact.', years: 'Ongoing' },
      { title: 'Conversation with My Shoes', type: 'podcast', description: 'Intimate podcast series sharing personal stories of transformation and growth.', years: 'G-Woman Media' },
      { title: 'Thoughtatudes', type: 'podcast', description: 'Thought-provoking content exploring ideas, perspectives, and community dialogue.', years: 'G-Woman Media' }
    ],
    press: [
      { title: 'Woman of the Decade', outlet: 'Women\'s Economic Forum', year: '2024' },
      { title: 'International Bestselling Author', outlet: 'Multiple Publications', year: '2020s' },
      { title: 'First Female Kickboxing Promoter', outlet: 'Sports Media', year: '1990s' },
      { title: 'Top 50 Writers You Should Be Reading', outlet: 'Literary Recognition', year: '2015' }
    ]
  },

  closing: {
    question: 'What will your next Act be?',
    quote: 'If my journey has taught me anything, it\'s that reinvention is always possible. The next chapter isn\'t something that happens to us — it\'s something we choose to create.',
    heartbeatLine: 'Legacy isn\'t what we leave behind; it\'s what we awaken in others.',
    cta: 'Let\'s Connect'
  },

  heartbeat: [
    'Love expressed through belief.',
    'Every remarkable life begins because someone believed first.',
    'Reinvention is possible at every age.',
    'Success matters most when it creates opportunity for someone else.',
    'When we amplify others, we discover our own voice.',
    'Lifting others is how we rise ourselves.',
    'Legacy isn\'t what we leave behind; it\'s what we awaken in others.',
    'Visitors should feel inspired, not impressed.'
  ],

  contact: {
    intro: 'Interested in collaborating, booking Frankie for a speaking engagement, or featuring her in media? Let\'s connect.',
    email: 'hello@frankiepicasso.com',
    speakingTopics: [
      'Platform Building for Impact',
      'Community Leadership in the Digital Age',
      'The Art of Entrepreneurship',
      'Media as a Force for Good',
      'Building Legacy Through Purpose'
    ],
    socials: [
      { name: 'Facebook', url: '#' },
      { name: 'Instagram', url: '#' },
      { name: 'YouTube', url: '#' },
      { name: 'LinkedIn', url: '#' }
    ]
  }
}

export const sectionIds = [
  'hero',
  'who-is-frankie',
  'where-belief-began',
  'building',
  'amplifying',
  'creating',
  'giving',
  'still-becoming',
  'impact',
  'media',
  'books',
  'art',
  'timeline',
  'closing',
  'contact'
]

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'who-is-frankie', label: 'Who is Frankie?' },
  { id: 'where-belief-began', label: 'Journey' },
  { id: 'impact', label: 'Impact' },
  { id: 'media', label: 'Media' },
  { id: 'books', label: 'Books' },
  { id: 'art', label: 'Art' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Connect' }
]

export const actColors = {
  'where-belief-began': '#D8C8EE',
  building: '#FFF0CC',
  amplifying: '#E0F4F4',
  creating: '#FDE8EF',
  giving: '#E8F0E0',
  'still-becoming': '#FFF8F0'
}

// ── The Map of a Life ─────────────────────────────────────────────
// 9 lessons collected across the Acts. Each unlocks a constellation star
// and a puzzle piece. Positions are in a 100x100 SVG viewBox.
export const mapOfLife = {
  title: 'The Map of a Life',
  subtitle: 'A life is not a straight line. It is a collection of lessons, choices, people, risks, losses, and opportunities that only make complete sense when we step back and see the whole picture.',
  closingLine: 'At the time, none of it seemed connected. Years later, every piece fit.',
  paintingSrc: '/mama-bear.jpg',
  lessons: [
    { id: 1, word: 'Responsibility', chapter: 'The Farm', meaning: 'Caring for something larger than yourself.', emoji: '\ud83c\udfc7', act: 'where-belief-began', x: 15, y: 72 },
    { id: 2, word: 'Observation', chapter: 'Photography', meaning: 'Learn to see before you learn to judge.', emoji: '\ud83d\udcf7', act: 'building', x: 28, y: 45 },
    { id: 3, word: 'Courage', chapter: 'Racism & Journalism', meaning: 'Some lessons cannot be taught. They have to be witnessed.', emoji: '\u270a', act: 'building', x: 38, y: 68 },
    { id: 4, word: 'Human Nature', chapter: 'Sales', meaning: 'People buy for their reasons, not yours.', emoji: '\ud83d\udcbc', act: 'building', x: 50, y: 38 },
    { id: 5, word: 'Self-Care', chapter: 'Esthetics', meaning: 'Taking care of yourself is not vanity. It is maintenance.', emoji: '\ud83d\udc84', act: 'building', x: 55, y: 62 },
    { id: 6, word: 'Resilience', chapter: 'Boxing & Kickboxing', meaning: 'Getting knocked down is not the lesson. Getting back up is.', emoji: '\ud83e\udd4a', act: 'creating', x: 65, y: 30 },
    { id: 7, word: 'Connection', chapter: 'Radio', meaning: 'Every person has a story worth hearing.', emoji: '\ud83c\udf99\ufe0f', act: 'amplifying', x: 72, y: 55 },
    { id: 8, word: 'Perspective', chapter: 'Motorcycle Accident', meaning: 'Everything can change in a heartbeat. So can you.', emoji: '\ud83d\ude91', act: 'giving', x: 82, y: 40 },
    { id: 9, word: 'Collaboration', chapter: 'World Supply Tent', meaning: 'The problem is not scarcity. It is connection.', emoji: '\ud83c\udf0d', act: 'still-becoming', x: 90, y: 65 },
  ],
}

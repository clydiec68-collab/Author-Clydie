// ============================================================
// All book, series & site data — edit here, updates everywhere.
//
// STATUS — the honest state of each manuscript. One of:
//   "available"  → published, buy links live      (brass stamp)
//   "launching"  → publish-ready, launching soon  (brass stamp)
//   "final"      → final edits, nearly there      (red stamp)
//   "revision"   → in revision                    (red stamp)
//   "drafting"   → still being written            (grey stamp)
//
// PAPERBACK (IngramSpark) — as retail listings go live, add them:
//   isbn: "978-...",
//   retailers: [ { name: "Amazon", url: "https://..." },
//                { name: "Takealot", url: "https://..." } ]
// ...and flip the book's status to "available".
// ============================================================

export const STATUS = {
  available: { label: "Available now", tone: "brass" },
  launching: { label: "Launching soon", tone: "brass" },
  final: { label: "Final edits", tone: "stamp" },
  revision: { label: "In revision", tone: "stamp" },
  drafting: { label: "Drafting", tone: "dim" },
};

export const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://clydiecronje.com",
  // Fill these in to activate footer / contact links. Empty = hidden.
  social: {
    goodreads: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
};

// ---- The flagship — everything on the homepage points here ----
export const featured = {
  seriesSlug: "the-hollow-library",
  bookNum: 1,
};

export const series = [
  {
    slug: "the-hollow-library",
    title: "The Hollow Library Series",
    shortTitle: "The Hollow Library",
    tagline: "A boarding school where the building itself is alive and listening.",
    description:
      "Seven students. Seven stories. One library that holds more than books — it holds the memories and secrets of every person who has ever walked its halls.",
    genre: "YA supernatural mystery",
    setting: "Ashford Academy",
    note: "A different narrator per book",
    bookCount: 7,
    tags: ["YA", "Supernatural", "Mystery", "Boarding school"],
  },
  {
    slug: "the-overlap-saga",
    title: "The Overlap Saga",
    shortTitle: "The Overlap Saga",
    tagline: "What happens when the boundaries between worlds start to dissolve?",
    description:
      "A seven-book YA sci-fi series following Jess Reeves through the overlap — a collision of realities that begins with a text from a dead girl.",
    genre: "YA sci-fi / supernatural",
    setting: "Multiple realities",
    note: "Protagonist: Jess Reeves",
    bookCount: 7,
    tags: ["YA", "Sci-fi", "Supernatural"],
  },
  {
    slug: "midnight-society",
    title: "Midnight Society Series",
    shortTitle: "Midnight Society",
    tagline: "At Ravenmoor, the building is not just watching — it is becoming.",
    description:
      "Six literary YA novels set at Ravenmoor Boarding School, where the building itself is gaining consciousness. Each book is told by a different narrator.",
    genre: "Literary YA",
    setting: "Ravenmoor Boarding School",
    note: "Building as consciousness",
    bookCount: 6,
    tags: ["YA", "Literary", "Supernatural"],
  },
  {
    slug: "the-attuned",
    title: "The Attuned Series",
    shortTitle: "The Attuned",
    tagline: "Some gifts are heavier than silence.",
    description:
      "YA supernatural set in Bristol. Jude discovers a psychic ability that changes everything. The longest and richest world-building of any book in the catalogue.",
    genre: "YA supernatural",
    setting: "Bristol",
    note: "Protagonist: Jude · Ongoing series",
    bookCount: 1,
    tags: ["YA", "Supernatural", "Psychic"],
  },
  {
    slug: "the-sterling-ledger",
    title: "The Sterling Ledger Trilogy",
    shortTitle: "The Sterling Ledger",
    tagline: "From the shadows of the South African Special Task Force to the streets of New York.",
    description:
      "Arthur Sterling — Special Task Force operator turned New York detective — emerges from invisibility to confront a network that has been hiding in plain sight.",
    genre: "SA thriller",
    setting: "South Africa / New York",
    note: "Protagonist: Arthur Sterling",
    bookCount: 3,
    tags: ["Thriller", "South Africa", "Crime"],
  },
  {
    slug: "the-love-trilogy",
    title: "The Love Trilogy",
    shortTitle: "Love Trilogy",
    tagline: "What is love when you strip away everything culture has added?",
    description:
      "Three books exploring the source code of love across religious traditions, neuroscience, and daily practice. Spiritual non-fiction honest enough to examine the shadow side.",
    genre: "Spiritual non-fiction",
    setting: "Cross-tradition",
    note: "Religion, neuroscience, and the practice of love",
    bookCount: 3,
    tags: ["Non-fiction", "Spiritual", "Philosophy"],
  },
];

export const seriesBooks = {
  "the-hollow-library": [
    { num: 1, title: "The Hollow Library", narrator: "Maren Cole", status: "launching", desc: "Maren arrives at Ashford Academy and discovers the library — a place that holds more than books. It holds the building's memory, and it has been waiting for someone like her.", cover: 1, image: "/covers/hl1.jpg", badge: "Start here", isbn: "", retailers: [] },
    { num: 2, title: "The Sister's Shelf", image: "/covers/hl2.jpg", narrator: "Kai", status: "final", desc: "Kai searches for his sister Lin, who has vanished into the library's deeper reaches. The building knows where she is — but it has its own reasons for keeping her.", cover: 2, isbn: "", retailers: [] },
    { num: 3, title: "The Changing Portrait", image: "/covers/hl3.jpg", narrator: "Sunday Osei — the art student", status: "final", desc: "Sunday Osei sees what others miss. As Ashford's most gifted art student, she notices the portraits on the walls are changing — and the faces in them are watching back.", cover: 3, isbn: "", retailers: [] },
    { num: 4, title: "The Founding Record", image: "/covers/hl4.jpg", narrator: "James Whitmore — Head Boy", status: "final", desc: "James Whitmore holds the title of Head Boy, but Ashford answers to older authority. When he uncovers the founding record, he realises the school was never built — it was summoned.", cover: 4, isbn: "", retailers: [] },
    { num: 5, title: "The Uninvited", image: "/covers/hl5.jpg", narrator: "Priya Bakshi — the uninvited student", status: "final", desc: "Priya Bakshi was never supposed to be at Ashford. She arrived without an invitation, and the building knows it. What happens to someone the library never asked for?", cover: 5, isbn: "", retailers: [] },
    { num: 6, title: "The Warden's Book", image: "/covers/hl6.jpg", narrator: "Lin Zhang — the recovered student", status: "final", desc: "Lin Zhang is back. After being lost inside the library's depths, she has returned changed. She carries the Warden's Book, and with it, knowledge the building never meant to share.", cover: 6, isbn: "", retailers: [] },
    { num: 7, title: "The Deeper Stacks", image: "/covers/hl7.jpg", narrator: "Series conclusion", status: "final", desc: "The final book. Everything the library has been building towards converges in the Deeper Stacks — where the oldest memories are kept and the building finally reveals what it wants.", cover: 7, isbn: "", retailers: [] },
  ],
  "the-overlap-saga": [
    { num: 1, title: "Dead Girls Don't Text Back", narrator: "Jess Reeves", status: "revision", desc: "It starts with a text from a dead girl. Jess Reeves didn't believe in the impossible — until the impossible started sending messages.", cover: 1, isbn: "", retailers: [] },
    { num: 2, title: "The Overlap Protocol", narrator: "Jess Reeves", status: "revision", desc: "The boundaries between realities are thinning. Jess discovers there's a protocol for what happens when worlds collide — and she's already inside it.", cover: 2, isbn: "", retailers: [] },
    { num: 3, title: "When the Sky Answered", narrator: "Jess Reeves", status: "revision", desc: "The sky answered. Not with light or sound, but with something older. Jess is no longer just crossing between worlds — the worlds are crossing into her.", cover: 3, isbn: "", retailers: [] },
    { num: 4, title: "Harmonic War", narrator: "Jess Reeves", status: "revision", desc: "The overlapping realities are no longer coexisting — they are at war. And Jess is caught between harmonics that could tear everything apart.", cover: 4, isbn: "", retailers: [] },
    { num: 5, title: "The Predator Above Earth", narrator: "Jess Reeves", status: "revision", desc: "Something has noticed the overlap. Something vast, patient, and predatory. It has been waiting above Earth for exactly this moment.", cover: 5, isbn: "", retailers: [] },
    { num: 6, title: "Judgment of the Vastness", narrator: "Jess Reeves", status: "revision", desc: "The vastness has made its judgment. Jess must face what it means when the universe itself decides you have gone too far.", cover: 6, isbn: "", retailers: [] },
    { num: 7, title: "Dead Girls Don't", narrator: "Series conclusion", status: "drafting", desc: "The final reckoning. Where the saga began with a text from a dead girl, it ends with a question: what does it mean to truly be alive?", cover: 7, isbn: "", retailers: [] },
  ],
  "midnight-society": [
    { num: 1, title: "The East Wing", narrator: "Lena — the historian", status: "revision", desc: "Lena arrives at Ravenmoor and is drawn to the East Wing, where the oldest records are kept — and where the building's consciousness first began to stir.", cover: 7, isbn: "", retailers: [] },
    { num: 2, title: "The Burning Room", narrator: "Owen — the poet", status: "revision", desc: "Owen writes poetry in a room that shouldn't exist. The Burning Room appears only to those the building has chosen, and it has something to show him.", cover: 1, isbn: "", retailers: [] },
    { num: 3, title: "The Experiment", narrator: "Dez — the scientist", status: "revision", desc: "Dez approaches Ravenmoor as a scientist. She wants to measure, quantify, and explain. The building has other plans for her certainty.", cover: 3, isbn: "", retailers: [] },
    { num: 4, title: "The Archive", narrator: "Photographer narrator", status: "revision", desc: "Through the lens of a camera, the archive reveals what the human eye cannot see. Every photograph taken at Ravenmoor contains something extra.", cover: 4, isbn: "", retailers: [] },
    { num: 5, title: "The Standing Stones", narrator: "Isla Drummond — violinist", status: "revision", desc: "Isla Drummond plays the violin among the standing stones behind Ravenmoor. The music reaches something deep beneath the school — and it responds.", cover: 5, isbn: "", retailers: [] },
    { num: 6, title: "The Founder's Tale", narrator: "Theo — series conclusion", status: "drafting", desc: "The final book. Theo discovers the founder's tale — the truth about why Ravenmoor was built and what it has been becoming all along.", cover: 2, isbn: "", retailers: [] },
  ],
  "the-attuned": [
    { num: 1, title: "The Attuned — Book One", narrator: "Jude", status: "drafting", desc: "Set in Bristol, Jude discovers a psychic ability that changes everything. The longest and richest world-building of any book in the catalogue.", cover: 1, isbn: "", retailers: [] },
  ],
  "the-sterling-ledger": [
    { num: 1, title: "The Invisible War", narrator: "Arthur Sterling", status: "revision", desc: "Arthur Sterling emerges from years of invisibility — a South African Special Task Force operator turned New York detective, confronting a war that was never meant to be seen.", cover: 4, isbn: "", retailers: [] },
    { num: 2, title: "The Indigo Audit", narrator: "Arthur Sterling", status: "revision", desc: "The network Sterling has been hunting is larger than he imagined. The Indigo Audit forces a confrontation that will cost him everything he's rebuilt.", cover: 2, isbn: "", retailers: [] },
    { num: 3, title: "The Thermal Leak", narrator: "Arthur Sterling", status: "revision", desc: "The final accounting. Sterling follows the thermal leak — the one trace the network couldn't hide — to its source. Some debts can only be settled in person.", cover: 6, isbn: "", retailers: [] },
  ],
  "the-love-trilogy": [
    { num: 1, title: "Love Unveiled", narrator: "", status: "revision", desc: "The source code of love across religious traditions and neuroscience. What is love when you strip away everything culture, religion, and expectation have added?", cover: 3, isbn: "", retailers: [] },
    { num: 2, title: "Love Contested", narrator: "", status: "revision", badge: "Strongest of the three", desc: "The shadow side of love. An unflinching look at what happens when love is weaponised, withheld, and misunderstood.", cover: 1, isbn: "", retailers: [] },
    { num: 3, title: "Love Embodied", narrator: "", status: "revision", desc: "The daily practice. How to live love as a verb — in marriage, in silence, in the small hours before dawn. Ends with one of the most beautiful passages in the catalogue.", cover: 5, isbn: "", retailers: [] },
  ],
};

export const standalones = [
  { title: "The Tao Te Ching", subtitle: "Modern leadership philosophy", status: "final", desc: "All 81 verses reimagined for modern leadership, with introduction and afterword.", cover: 2, coverText: "The Tao\nTe Ching", isbn: "", retailers: [] },
  { title: "The Digital Alchemist", subtitle: "Sci-fi · AI, love, Seattle", status: "final", desc: "A sci-fi novel about artificial intelligence and what it might mean to engineer love.", cover: 1, coverText: "The Digital\nAlchemist", isbn: "", retailers: [] },
  { title: "The Rendered World", subtitle: "Non-fiction · Neuroscience & perception", status: "final", desc: "An exploration of how the brain constructs reality and what it means for consciousness.", cover: 4, coverText: "The Rendered\nWorld", isbn: "", retailers: [] },
  { title: "The Centenary Debt", subtitle: "SA historical fiction · 1888 to present", status: "revision", desc: "The du Toit and Dawson families — intertwined across a century of South African history, from the gold rush to the present day.", cover: 7, coverText: "The\nCentenary\nDebt", isbn: "", retailers: [] },
  { title: "PMP Exam Prep PMBOK 7", subtitle: "Professional · Exam preparation", status: "revision", desc: "Comprehensive PMP exam preparation aligned with the PMBOK 7th edition. The largest manuscript in the catalogue.", cover: 6, coverText: "PMP Exam\nPrep\nPMBOK 7", isbn: "", retailers: [] },
];

export const themes = [
  { name: "Consciousness", desc: "what it means to truly perceive reality" },
  { name: "Inherited damage", desc: "what families and histories pass down" },
  { name: "Love as practice", desc: "not feeling, but daily choice" },
  { name: "Living places", desc: "buildings and landscapes as presences" },
  { name: "South African weight", desc: "the history and landscape" },
  { name: "Technology & humanity", desc: "can they coexist with the soul?" },
  { name: "The quiet hours", desc: "meditation, stillness, clarity before dawn" },
  { name: "Patience", desc: "bonsai, writing, relationships: all require the same thing" },
];

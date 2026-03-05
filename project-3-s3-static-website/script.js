const quotes = [
  { text: "Small steps compound into big wins.", by: "Cloud Sprint" },
  { text: "Build the thing, then improve the thing.", by: "Maker mindset" },
  { text: "If it's not tested, it's a guess.", by: "Ops truth" },
  { text: "Make it work. Make it right. Make it fast.", by: "Dev wisdom" },
  { text: "Managed services win on exams and in real life.", by: "AWS reality" }
];

const quoteBtn = document.getElementById('quoteBtn');
const quoteText = document.getElementById('quoteText');
const quoteMeta = document.getElementById('quoteMeta');
const buildStamp = document.getElementById('buildStamp');

function pickQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
quoteText.textContent = '"' + q.text + '"';
  quoteMeta.textContent = '\u2014 ' + q.by;
}

quoteBtn.addEventListener('click', pickQuote);

// version stamp to test CloudFront caching behavior
const now = new Date();
buildStamp.textContent = 'Build: ' + now.toLocaleString();

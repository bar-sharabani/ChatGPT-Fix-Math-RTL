// Regex for any Hebrew character
const HEBREW_REGEX = /[\u0590-\u05FF]/;

// Add a bit of CSS so KaTeX with dir="ltr" is truly LTR
(function injectStyle() {
  const style = document.createElement("style");
  style.textContent = `
    span.katex[dir="ltr"] {
      direction: ltr !important;
      unicode-bidi: isolate !important;
    }
  `;
  document.documentElement.appendChild(style);
})();

function fixKaTeXInElement(el) {
  if (!el || !HEBREW_REGEX.test(el.textContent || "")) return;

  const katexSpans = el.querySelectorAll("span.katex");
  katexSpans.forEach(span => {
    // Force LTR on the math itself
    span.setAttribute("dir", "ltr");
    span.style.direction = "ltr";
    span.style.unicodeBidi = "isolate";

    // Also be a bit paranoid with inner display layers
    span.querySelectorAll("span, span *").forEach(child => {
      if (child.classList && child.classList.contains("katex-html")) {
        child.style.direction = "ltr";
        child.style.unicodeBidi = "isolate";
      }
    });
  });
}

function scanWholeDocument() {
  const candidates = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div, span");
  candidates.forEach(fixKaTeXInElement);
}

// Initial pass
scanWholeDocument();

// Watch for new messages / dynamic content (ChatGPT is an SPA)
const observer = new MutationObserver(mutations => {
  for (const m of mutations) {
    m.addedNodes.forEach(node => {
      if (!(node instanceof HTMLElement)) return;

      // If the added node itself has text, check it
      fixKaTeXInElement(node);

      // And also any descendants
      const descendants = node.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div, span");
      descendants.forEach(fixKaTeXInElement);
    });
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

// Apply LTR fix to any KaTeX elements under a given root
function fixKatex(root = document) {
  const katexNodes = root.querySelectorAll("span.katex");
  katexNodes.forEach((el) => {
    // Inline styles/attributes win over surrounding bidi context
    if (el.getAttribute("dir") !== "ltr") {
      el.setAttribute("dir", "ltr");
    }
    el.style.direction = "ltr";
    el.style.unicodeBidi = "isolate";
  });
}

// Run once on initial load (in case content is already there)
fixKatex(document);

// Observe new content as it streams in
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType !== Node.ELEMENT_NODE) continue;

      // If the added node *is* KaTeX or contains KaTeX, fix it
      if (node.matches && node.matches("span.katex")) {
        fixKatex(node);
      } else {
        fixKatex(node); // will only touch descendants with span.katex
      }
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

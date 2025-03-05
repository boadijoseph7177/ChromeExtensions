const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression to match words
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;
  
  // Determine the element after which to insert the badge
  const insertAfter = date ?? heading;
  
  if (insertAfter) {
    insertAfter.insertAdjacentElement("afterend", badge);
  } else {
    console.error("No suitable element found to insert the badge after.");
  }
}

document.body.style.border = "5px solid red";
console.log("Content script injected successfully!");

import { showLoadingSpinner, hideLoadingSpinner } from "../loading-spinner/loadingSpinner.js";
import { removeFavorite } from "../main-page-favorite/mainFavorite.js";
import getQuoteIndex from "./quoteIndex.js";
import { quoteText, authorText, faveQuoteContainer } from "../helpers/elements.js";
import { getDataFromStorage, writeDataToStorage } from "../local-storage/localStorage.js";
import { manageHeaderDisplay } from "../header-tab-display/tabDisplay.js";

// show new quote
export default function newQuote() {
  showLoadingSpinner();
  faveQuoteContainer.classList.add("hide");

  let quote = null;
  let quoteIndex = null;
  let displayedQuoteIndexes = getDataFromStorage("displayedQuoteIndexes");
  let currentQuoteIndex = getDataFromStorage("currentQuoteIndex");
  let favoriteQuotes = getDataFromStorage("getDataFromStorage");
  const apiQuotes = getDataFromStorage("apiQuotes");

  while (displayedQuoteIndexes.length < apiQuotes.length) {
    quoteIndex = getQuoteIndex(apiQuotes);

    if (!displayedQuoteIndexes.includes(quoteIndex)) {
      displayedQuoteIndexes.push(quoteIndex);
      writeDataToStorage("displayedQuoteIndexes", displayedQuoteIndexes);
      break;
    }
  }

  if (displayedQuoteIndexes.length === apiQuotes.length) {
    quote = {
      "author": "Sabrina Powell",
      "text": "You have reached the end of my quotes. Please find something else to do!"
    }
  } else {
    quote = apiQuotes[quoteIndex];
    currentQuoteIndex = quoteIndex;
    writeDataToStorage("currentQuoteIndex", currentQuoteIndex);
  }

  // check quote length to determine the styling
  if (quote.text.length > 80) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  // set quote and hide loader
  authorText.textContent = quote.author.length === 0 ? "Unknown" : quote.author;
  quoteText.textContent = quote.text;

  hideLoadingSpinner();
  removeFavorite(favoriteQuotes);
  manageHeaderDisplay();
}

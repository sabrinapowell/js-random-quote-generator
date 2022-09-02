const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];
let displayedQuoteIndexes = [];

// show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading
function hideLoading() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// get new quote index
function getQuoteIndex() {
  return Math.floor(Math.random() * apiQuotes.length);
}

// show new quote
function newQuote() {
  loading();

  let quote = null;
  let quoteIndex = null;

  while (displayedQuoteIndexes.length < apiQuotes.length) {
    quoteIndex = getQuoteIndex();

    if (!displayedQuoteIndexes.includes(quoteIndex)) {
      displayedQuoteIndexes.push(quoteIndex);
      break;
    }
  }

  if (displayedQuoteIndexes.length === apiQuotes.length) {
    // TODO: Add a special quote here for the lucky winner
  } else {
    quote = apiQuotes[quoteIndex];
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

  hideLoading();
}

// get quotes from API
async function getQuotes() {
  loading();

  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);

    apiQuotes = await response.json();
    console.log(apiQuotes);
    newQuote();

  } catch (error) {
    // catch error here
    console.log()
  }
}

// tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// event listerners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// run function on load
getQuotes();

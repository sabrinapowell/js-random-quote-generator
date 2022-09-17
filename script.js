const quoteContainer = document.getElementById("quote-container");
const faveQuoteContainer = document.getElementById("favorite-quotes-container");

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

const twitterBtn = document.getElementById("twitter");
const facebookBtn = document.getElementById("facebook");
const likeBtn = document.getElementById("likeBtn");
const newQuoteBtn = document.getElementById("new-quote");

const favoriteTab = document.getElementById("favorites-tab");
const homeTab = document.getElementById("home-tab");

const header = document.getElementById("header");
const loader = document.getElementById("loader");
const tableBody = document.getElementById("table-body");
const table = document.getElementById("favorites-table");
const emptyTable = document.getElementById("no-favorites");


let apiQuotes = [];
let displayedQuoteIndexes = [];
let favoriteQuotes = [];
let currentQuoteIndex = null;

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoadingSpinner() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

function getQuoteIndex() {
  return Math.floor(Math.random() * apiQuotes.length);
}

// show new quote
function newQuote() {
  showLoadingSpinner();
  faveQuoteContainer.classList.add("hide");

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
    quote = {
      "author": "Sabrina Powell",
      "text": "You have reached the end of my quotes. Please find something else to do!"
    }
  } else {
    quote = apiQuotes[quoteIndex];
    currentQuoteIndex = quoteIndex;
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
  removeFavorite();
  manageHeaderDisplay();
}

// get quotes from API
async function getQuotes() {
  showLoadingSpinner();

  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);

    apiQuotes = await response.json();
    newQuote();

  } catch (error) {
    // catch error here
    // TODO: add error
    console.log(error);
  }
}

// tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// share quote via Facebook
function shareOnFacebook() {
  // TODO: add error message
}

function manageHeaderDisplay() {
  manageTabDisplay();

  if (!favoriteTab.classList.contains("hide") || !homeTab.classList.contains("hide")) {
    header.classList.remove("hide");
  } else {
    header.classList.add("hide");
  }
}

function manageTabDisplay() {
  if (!quoteContainer.hidden) {
    homeTab.classList.add("hide");
    
    if (favoriteQuotes === undefined || favoriteQuotes.length === 0) {
      favoriteTab.classList.add("hide");
    } else {
      favoriteTab.classList.remove("hide");
    }
  } else {
    homeTab.classList.remove("hide");
    favoriteTab.classList.add("hide");
  }
}

function addFavorite() {
  favoriteQuotes.push(apiQuotes[currentQuoteIndex]);
  likeBtn.classList.add("favorite-quote");
}

function removeFavorite() {
  likeBtn.classList.remove("favorite-quote");

  favoriteQuotes = favoriteQuotes.filter((item) => {
    return item.text !== quoteText.textContent;
  });
}

function updateFavorite() {
  if (likeBtn.classList.contains("favorite-quote") && favoriteQuotes !== undefined) {
    removeFavorite();
  } else {
    addFavorite();
  }

  writeFavoritesToLocalStorage();
  manageHeaderDisplay();
}

function showFavorites() {
  quoteContainer.hidden = true;
  faveQuoteContainer.classList.remove("hide");

  createAndDisplayTable();
  manageHeaderDisplay();
}

function readFavoritesFromLocalStorage() {
  let faves = localStorage.getItem("favoriteQuotes");

  if (faves) {
    favoriteQuotes = JSON.parse(faves);
  } else {
    favoriteQuotes = [];
  }

  favoriteQuotes = JSON.parse(faves) || [];
}

function writeFavoritesToLocalStorage() {
  localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
}

function removeAllTableData() {
  // remove all table data and event listeners
  while (tableBody.lastChild) {
    tableBody.lastChild.remove();
  }
}

function createAndDisplayTable() {
  let index = 0;
  removeAllTableData();

  if (favoriteQuotes.length === 0) {
    emptyTable.hidden = false;
    table.hidden = true;
  } else {
    emptyTable.hidden = true;
    table.hidden = false;

    favoriteQuotes.forEach(quote => {
      let tr = document.createElement("tr");
  
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
  
      let text1 = document.createTextNode(quote.text);
      let text2 = document.createTextNode(quote.author);
  
      let icon = document.createElement("i");
      icon.classList.add("fas");
      icon.classList.add("fa-heart");
      icon.classList.add("favorite-quote");
      icon.id = index;
      icon.title = "Remove from favorites!"
      icon.addEventListener("click", function(event) {
        removeFaveInTable(parseInt(event.target.id));
      });
  
      td1.appendChild(text1);
      td2.appendChild(text2);
      td3.appendChild(icon);
  
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
  
      tableBody.appendChild(tr);
      index = index + 1;
    });
  }

  
}

function removeFaveInTable(index) {
  favoriteQuotes.splice(index, 1);

  writeFavoritesToLocalStorage();
  createAndDisplayTable();
  manageHeaderDisplay();
}

// event listerners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
likeBtn.addEventListener("click", updateFavorite);
// facebookBtn.addEventListener("click", shareOnFacebook);
favoriteTab.addEventListener("click", showFavorites);
homeTab.addEventListener("click", newQuote);

// run function on load
getQuotes();
readFavoritesFromLocalStorage();

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

export { 
  quoteContainer, 
  faveQuoteContainer, 
  quoteText, 
  authorText,
  twitterBtn,
  facebookBtn,
  likeBtn,
  newQuoteBtn,
  favoriteTab,
  homeTab,
  header,
  loader,
  tableBody,
  table,
  emptyTable
};
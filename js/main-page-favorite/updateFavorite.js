import { likeBtn } from "../helpers/elements.js";
import removeFavorite from "./removeFavorite.js";
import addFavorite from "./addFavorite.js";
import { getDataFromStorage, writeDataToStorage } from "../local-storage/localStorage.js";
import { manageHeaderDisplay } from "../header-tab-display/tabDisplay.js";

export default function updateFavorite() {
  let favoriteQuotes = getDataFromStorage("favoriteQuotes");
  let apiQuotes = getDataFromStorage("apiQuotes");
  let currentQuoteIndex = getDataFromStorage("currentQuoteIndex");

  if (likeBtn.classList.contains("favorite-quote") && favoriteQuotes !== undefined) {
    favoriteQuotes = removeFavorite(favoriteQuotes);
  } else {
    favoriteQuotes = addFavorite(apiQuotes, favoriteQuotes, currentQuoteIndex);
  }

  writeDataToStorage("favoriteQuotes", favoriteQuotes);
  manageHeaderDisplay();
}

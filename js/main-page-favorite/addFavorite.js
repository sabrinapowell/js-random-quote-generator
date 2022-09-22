import { likeBtn } from "../helpers/elements.js";

export default function addFavorite(apiQuotes, favoriteQuotes, currentQuoteIndex) {
  favoriteQuotes.push(apiQuotes[currentQuoteIndex]);
  likeBtn.classList.add("favorite-quote");

  return favoriteQuotes;
}

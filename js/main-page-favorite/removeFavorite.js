import { likeBtn, quoteText } from "../helpers/elements.js";

export default function removeFavorite(favoriteQuotes) {
  likeBtn.classList.remove("favorite-quote");

  favoriteQuotes = favoriteQuotes.filter((item) => {
    return item.text !== quoteText.textContent;
  });
  
  return favoriteQuotes;
}

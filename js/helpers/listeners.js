import { newQuoteBtn, twitterBtn, likeBtn, facebookBtn, favoriteTab, homeTab } from "./elements.js";
import newQuote from "../quote-generator/newQuote.js";
import tweetQuote from "../share/tweet.js";
import updateFavorite from "../main-page-favorite/updateFavorite.js";
import showFavorites from "../favorites-page/showFavorites.js";

export default function addListeners() {
  // event listerners
  newQuoteBtn.addEventListener("click", newQuote);
  twitterBtn.addEventListener("click", tweetQuote);
  likeBtn.addEventListener("click", updateFavorite);
  // facebookBtn.addEventListener("click", shareOnFacebook);
  favoriteTab.addEventListener("click", showFavorites);
  homeTab.addEventListener("click", newQuote);
}

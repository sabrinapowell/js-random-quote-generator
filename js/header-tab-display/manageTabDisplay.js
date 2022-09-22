import { quoteContainer, homeTab, favoriteTab } from "../helpers/elements.js";
import { getDataFromStorage } from "../local-storage/localStorage.js";

export default function manageTabDisplay() {
  const favoriteQuotes = getDataFromStorage("favoriteQuotes");
  
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

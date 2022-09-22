import createAndDisplayTable from "./createAndDisplayTable.js";
import { quoteContainer, faveQuoteContainer } from "../helpers/elements.js";

export default function showFavorites() {
  quoteContainer.hidden = true;
  faveQuoteContainer.classList.remove("hide");

  createAndDisplayTable();
}

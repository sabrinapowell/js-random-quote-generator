import { loader, quoteContainer } from "../helpers/elements.js";

export default function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

import { loader, quoteContainer } from "../helpers/elements.js";

export default function hideLoadingSpinner() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

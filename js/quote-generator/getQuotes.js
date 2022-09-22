import newQuote from "./newQuote.js";
import { showLoadingSpinner } from "../loading-spinner/loadingSpinner.js";
import { writeDataToStorage } from "../local-storage/localStorage.js";

// get quotes from API
export default async function getQuotes() {
  let apiQuotes = [];
  showLoadingSpinner();

  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);

    apiQuotes = await response.json();
    writeDataToStorage("apiQuotes", apiQuotes);
    newQuote();
  } catch (error) {
    // TODO: add error
    console.log(error);
  }
}

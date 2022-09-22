import { getDataFromStorage, writeDataToStorage } from "./localStorage.js";

export default function addVariablesToStorage() {
  const variables = {
    "apiQuotes": [],
    "displayedQuoteIndexes": [],
    "favoriteQuotes": [],
    "currentQuoteIndex": -1
  }
  const variableKeys = Object.keys(variables);

  for (let i = 0; i < variableKeys.length; i++) {
    let data = getDataFromStorage(variableKeys[i]);

    if (data === null) {
      writeDataToStorage(variableKeys[i], variables[variableKeys[i]]);
    } 
  }
}

import addListeners from "./helpers/listeners.js";
import addVariablesToStorage from "./local-storage/addVariablesToStorage.js";
import { getQuotes } from "./quote-generator/quoteGenerator.js";

// add event listeners
addListeners();

// add items to local storage
addVariablesToStorage();

// run function on load
getQuotes();

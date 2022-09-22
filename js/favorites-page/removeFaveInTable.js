import { writeDataToStorage } from "../local-storage/localStorage.js";

export default function removeFaveInTable(favoriteQuotes, index) {
  favoriteQuotes.splice(index, 1);
  writeDataToStorage("favoriteQuotes", favoriteQuotes);
}

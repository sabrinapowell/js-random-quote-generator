import { emptyTable, table, tableBody } from "../helpers/elements.js";
import removeAllTableData from "./removeAllTableData.js";
import removeFaveInTable from "./removeFaveInTable.js";
import { getDataFromStorage } from "../local-storage/localStorage.js";
import { manageHeaderDisplay } from "../header-tab-display/tabDisplay.js";

export default function createAndDisplayTable() {
  let index = 0;
  const favoriteQuotes = getDataFromStorage("favoriteQuotes");
  removeAllTableData();

  if (favoriteQuotes.length === 0) {
    emptyTable.hidden = false;
    table.hidden = true;
  } else {
    emptyTable.hidden = true;
    table.hidden = false;

    favoriteQuotes.forEach(quote => {
      let tr = document.createElement("tr");
  
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
  
      let text1 = document.createTextNode(quote.text);
      let text2 = document.createTextNode(quote.author);
  
      let icon = document.createElement("i");
      icon.classList.add("fas");
      icon.classList.add("fa-heart");
      icon.classList.add("favorite-quote");

      icon.id = index;
      icon.title = "Remove from favorites!"

      icon.addEventListener("click", function(event) {
        removeFaveInTable(favoriteQuotes, parseInt(event.target.id));
        createAndDisplayTable();
      });
  
      td1.appendChild(text1);
      td2.appendChild(text2);
      td3.appendChild(icon);
  
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
  
      tableBody.appendChild(tr);
      index = index + 1;
    });
  }

  manageHeaderDisplay();
}

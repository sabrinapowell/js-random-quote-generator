import { tableBody } from "../helpers/elements.js";

export default function removeAllTableData() {
  // remove all table data and event listeners
  while (tableBody.lastChild) {
    tableBody.lastChild.remove();
  }
}

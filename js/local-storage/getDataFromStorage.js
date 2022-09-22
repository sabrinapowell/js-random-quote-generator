export default function getDataFromStorage(itemName) {
  let data = [];
  let item = localStorage.getItem(itemName);

  if (item) {
    data = JSON.parse(item);
  }

  return data;
}

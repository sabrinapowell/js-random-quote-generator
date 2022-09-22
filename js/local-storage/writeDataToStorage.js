export default function writeDataToStorage(itemName, data) {
  localStorage.setItem(itemName, JSON.stringify(data));
}

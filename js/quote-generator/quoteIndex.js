export default function getQuoteIndex(apiQuotes) {
  return Math.floor(Math.random() * apiQuotes.length);
}

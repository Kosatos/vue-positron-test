export default function priceToString (num) {
  const n = num.toString()
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')
}

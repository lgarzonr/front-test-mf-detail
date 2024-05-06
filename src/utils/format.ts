export function formattedNumber(num: number, decimals: number) {
  return  num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

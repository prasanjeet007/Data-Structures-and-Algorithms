function countDigits(number) {
  if (typeof number != "number") return "Please enter a valid number";
  let count = 0;
  while (number != 0) {
    number = parseInt(number / 10);
    count++;
  }
  return count;
}
module.exports = countDigits;

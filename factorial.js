function factorial(number) {
  if (typeof number != "number") return "Enter a valid number";
  if (number === 0) return 1;
  return number * factorial(number - 1);
}
module.exports = factorial;

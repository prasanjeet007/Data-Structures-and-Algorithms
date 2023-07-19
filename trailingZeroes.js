function trailingZeroes(number) {
  if (typeof number != "number") return "Enter a number";
  let trailingZeroes = 0;
  for (let i = 5; i <= number; i = i * 5)
    trailingZeroes = trailingZeroes + parseInt(number / i);
  return trailingZeroes;
}
module.exports = trailingZeroes;

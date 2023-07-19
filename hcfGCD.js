function HCF(number1, number2) {
  if (typeof number1 != "number" || typeof number2 != "number")
    return "Please Enter a valid Number";
  let number = number1 > number2 ? number2 : number1;
  let hcf = 1;
  for (let i = number; i >= 2; i--) {
    if (number1 % i === 0 && number2 % i === 0) return (hcf = i);
  }
}
module.exports = HCF;

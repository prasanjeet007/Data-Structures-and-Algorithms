function fibonacciSeries(number) {
  let firstNumber = 1,
    secondNumber = 0,
    result = 0,
    resultArray = [];
  for (let i = 0; i < number; i++) {
    resultArray.push(result);
    result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
  }
  console.log(resultArray);
}
module.exports = fibonacciSeries;

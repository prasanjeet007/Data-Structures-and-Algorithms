function recursiveFibonacciSeries(number) {
  if (number < 2) return number;
  return (
    recursiveFibonacciSeries(number - 1) + recursiveFibonacciSeries(number - 2)
  );
}
module.exports = recursiveFibonacciSeries;

function memoizer(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}
function fib(number) {
  if (number < 2) return number;
  return fib(number - 1) + fib(number - 2);
}
const fastFib = memoizer(fib);
module.exports = fastFib;

function memoizer(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}
function slowFib(number) {
  if (number < 2) return number;
  return slowFib(number - 1) + slowFib(number - 2);
}
const fastFib = memoizer(slowFib);
module.exports = fastFib;

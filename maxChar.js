function maxChars(str) {
  let maxObj = {};
  let maxChar,
    maxCount = 0;
  for (let char of str) {
    if (maxObj[char]) {
      maxObj[char]++;
    } else {
      maxObj[char] = 1;
    }
  }
  for (let key in maxObj) {
    if (maxObj[key] > maxCount) {
      maxCount = maxObj[key];
      maxChar = key;
    }
  }
  return maxChar;
}
module.exports = maxChars;

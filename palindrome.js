function palindromeString(str) {
  let revStr = "";
  for (let char of str) {
    revStr = char + revStr;
  }
  if (revStr === str) return true;
  else return false;
}
module.exports = palindromeString;

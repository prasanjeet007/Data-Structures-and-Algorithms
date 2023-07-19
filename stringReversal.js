function stringReversalMethod1(string) {
  return string.split("").reverse().join("");
}
function stringReversalMethod2(string) {
  let revStr = "";
  for (let char of string) {
    revStr = char + revStr;
  }
  return revStr;
}
function stringReversalMethod3(string) {
  return string
    .split("")
    .reduce((currentValue, previousValue) => previousValue + currentValue);
}
module.exports = {
  method1: stringReversalMethod1,
  method2: stringReversalMethod2,
  method3: stringReversalMethod3,
};

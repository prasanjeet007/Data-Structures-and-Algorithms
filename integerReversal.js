function integerReversal(integer) {
  let number = integer;
  let revInt = 0,
    rem;
  if (typeof integer != "number") return;
  while (integer != 0) {
    rem = integer % 10;
    revInt = revInt * 10 + rem;
    integer = parseInt(integer / 10);
  }
  return revInt;
}
module.exports = integerReversal;

function capitalizeFirstCharacter(string) {
  string = string.split(" ");
  let inx = 0;
  for (let str of string) {
    string[inx] = str[0].toUpperCase() + str.slice(1);
    inx++;
  }
  return string.join(" ");
}
module.exports = capitalizeFirstCharacter;

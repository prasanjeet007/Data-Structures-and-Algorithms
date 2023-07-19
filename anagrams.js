function anagrams(string1, string2) {
  string1 = string1
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  string2 = string2
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  if (string1.length != string2.length) return "This is not an anagram";
  let obj1 = {},
    obj2 = {};
  for (let char of string1) {
    if (obj1[char]) {
      obj1[char]++;
    } else {
      obj1[char] = 1;
    }
  }
  for (let char of string2) {
    if (obj2[char]) {
      obj2[char]++;
    } else {
      obj2[char] = 1;
    }
  }
  for (let key in obj1 || obj2) {
    if (obj1[key] != obj2[key]) return "Not an anagrams";
  }
  return "It's an anagram";
}
module.exports = anagrams;

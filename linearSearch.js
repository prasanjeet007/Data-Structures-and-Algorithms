class LinearSearch {
  constructor() {
    this.searchArray = [45, 89, 0, 23, 4, 23, 12, 11, 45, 65, 78, 44, 34];
  }
  linearSearch(element) {
    for (let i = 0; i < this.searchArray.length; i++) {
      if (this.searchArray[i] == element) {
        return i;
      }
    }
    return "Element not found";
  }
}
const searchObj = new LinearSearch();
module.exports = searchObj;

class BinarySearch {
  constructor() {
    this.array = [3, 5, 9, 12, 34, 56, 90, 122];
    this.start = 0;
    this.end = this.array.length - 1;
    this.midPoint = null;
    this.position = null;
  }
  searchItem(element) {
    while (this.start <= this.end) {
      this.midPoint = Math.floor((this.start + this.end) / 2);
      if (this.array[this.midPoint] === element) {
        this.position = this.midPoint;
        break;
      } else if (this.array[this.midPoint] < element) {
        this.start = this.midPoint + 1;
      } else {
        this.end = this.midPoint - 1;
      }
    }
    if (!this.position) {
      return "Element Not Found";
    } else {
      return this.position;
    }
  }
}
const binarySearchObj = new BinarySearch();
module.exports = binarySearchObj;

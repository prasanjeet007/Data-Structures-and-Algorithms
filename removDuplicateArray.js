function removeDuplicateItemArray(array) {
  let newArray = [],
    currentIndex = 0;
  let temp;
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      temp = array[i - 1];
      array[i - 1] = array[i];
      array[i] = temp;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] != array[i]) {
      newArray[currentIndex] = array[i];
      currentIndex++;
    }
  }
  console.log(newArray);
}
module.exports = removeDuplicateItemArray;

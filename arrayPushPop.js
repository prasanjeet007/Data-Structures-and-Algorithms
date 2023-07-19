let arraySize;
const array = [];
let currentSize = 0;
function arrayPushPop(arrayTotalSize) {
  arraySize = arrayTotalSize;
}
function push(element) {
  if (currentSize === arraySize) {
    console.log("Size of an array is full");
    return;
  } else {
    array[currentSize] = element;
    currentSize++;
  }
  return currentSize;
}

function pop() {
  let lastElment;
  if (currentSize === 0) {
    console.log("No element in the array");
    return;
  } else {
    lastElment = array[currentSize - 1];
    currentSize--;
    array.length = currentSize;
  }
  return lastElment;
}
function display() {
  console.log(array);
  console.log(currentSize);
  console.log(arraySize);
}
module.exports = {
  arrayPushPop: arrayPushPop,
  push: push,
  pop: pop,
  display: display,
};

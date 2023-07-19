class Queue {
  constructor(size) {
    this.maxSize = size;
    this.currentSize = 0;
    this.queue = [];
  }
  enqueue(element) {
    if (this.queue.length >= this.maxSize) return "Queue is full";
    this.queue[this.currentSize] = element;
    this.currentSize++;
  }
  dequeue() {
    if (this.queue.length === 0) return "Queue is empty";
    for (let i = 0; i < this.queue.length; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.currentSize--;
    this.queue.length = this.currentSize;
  }
  displayQueue() {
    console.log(this.queue);
  }
}
let queue = new Queue(5);
module.exports = queue;

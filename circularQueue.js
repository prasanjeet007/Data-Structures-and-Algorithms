class CircularQueue {
  constructor(size) {
    this.maxSize = size;
    this.currentElementPosition = 0;
    this.queue = [];
    this.rear = this.front = -1;
  }
  enque(element) {
    if (this.currentElementPosition === this.maxSize) {
      alert("Queue size is full");
      return;
    }
    this.queue[this.currentElementPosition] = element;
    this.rear++;
    this.currentElementPosition++;
    if (this.queue.length === 1) {
      this.front = 0;
    }
  }
  dequeue() {
    if (this.queue.length === 0) {
      alert("Queue is empty");
      this.rear = this.front = -1;
      return;
    }
    this.queue[this.front] = null;
    this.front++;
    if (this.rear === this.maxSize - 1 && this.front != 0) {
      this.rear = 0;
      this.currentElementPosition = 0;
    }
  }
  display() {
    console.log(this.queue);
  }
}

const queue = new CircularQueue(5);
module.exports = queue;

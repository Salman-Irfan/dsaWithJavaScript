// enqueue, dequeue, isFull, isEmpty, peek, size, print
class CircularQueue {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.currentLength = 0; // begin with 0
		this.rear = -1;
		this.front = -1;
	}
	// isFull
	isFull() {
		return this.currentLength === this.capacity;
	}
	// isEmpty
	isEmpty() {
		return this.currentLength === 0;
	}
	// enqueue
	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity;
			this.items[this.rear] = element;
			this.currentLength += 1;
			// set the front position
			if (this.front === -1) {
				this.front = this.rear;
			}
		}
	}
	// dequeue
	dequeue() {
		// if isempty return null
		if (this.isEmpty()) {
			return null;
		}
		// store that item that is going to be dequeued
		const item = this.items[this.front];
		// dequeed the front item
		this.items[this.front] = null;
		// increment the front position
		this.front = (this.front + 1) % this.capacity;
		// decrement the length
		this.currentLength -= 1;
		// if isEmpty by dequeuing
		if (this.isEmpty()) {
			this.front = -1;
			this.rear = -1;
		}
		// return the dequeued item
		return item;
	}
	// peek
	peek() {
		if (!this.isEmpty()) {
			return this.items[this.front];
		}
		return null;
	}
	// size
	size() {
		return this.currentLength;
	}
	// print
	print() {
		if (this.isEmpty()) {
			console.log(`queue is empty`);
		} else {
			let i;
			let str = "";
			for (i = this.front; i < this.rear; i = (i + 1) % this.capacity) {
				str += this.items[i] + " ";
			}
            str += this.items[i] + " ";
			console.log(str);
		}
	}
}
// making instance of circular queue
const circularQue1 = new CircularQueue(5)
console.log(`circularQue1.isEmpty(): ${circularQue1.isEmpty()}`);
console.log(`circularQue1.isFull(): ${circularQue1.isFull()}`);
circularQue1.enqueue(10)
circularQue1.enqueue(20)
circularQue1.enqueue(30)
circularQue1.enqueue(40)
circularQue1.enqueue(50)
console.log(`enqued 5 items: 10 20 30 40 50`)
console.log(`circularQue1.isEmpty(): ${circularQue1.isEmpty()}`);
console.log(`circularQue1.isFull(): ${circularQue1.isFull()}`);
console.log(`circularQue1.size(): ${circularQue1.size()}`);
console.log(`circularQue1.peek(): ${circularQue1.peek()}`);
console.log(`print function called`)
circularQue1.print()
console.log(`circularQue1.dequeue(): ${circularQue1.dequeue()}`)
console.log(`circularQue1.isEmpty(): ${circularQue1.isEmpty()}`)
console.log(`circularQue1.isFull(): ${circularQue1.isFull()}`)
console.log(`circularQue1.size(): ${circularQue1.size()}`)
console.log(`circularQue1.peek(): ${circularQue1.peek()}`)
circularQue1.print()
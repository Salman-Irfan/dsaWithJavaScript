class Queue {
	constructor() {
		this.items = [];
	}
	// enqueue
	enqueue(item) {
		this.items.push(item);
	}
	// dequeue
	dequeue() {
		return this.items.shift();
	}
	// isEmpty
	isEmpty() {
		return this.items.length === 0;
	}
	// peek
	peek() {
		// only if array is not empty
        if (!this.isEmpty()) { 
            return this.items[0];
        }
        // if array is empty
        else {
            return null;
        }
	}
	// size
	size() {
		return this.items.length;
	}
	// print
	print() {
		console.log(this.items.toString());
	}
}

const que1 = new Queue();
que1.print();
que1.enqueue(1);
que1.enqueue(2);
que1.enqueue(3);
que1.enqueue(4);
que1.enqueue(5);
que1.print();
que1.dequeue();
que1.print();
console.log(que1.isEmpty());
console.log(que1.peek());
console.log(que1.size());

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	// is empty list
	isEmpty() {
		return this.size === 0;
	}
	// get size of list
	getSize() {
		return this.size;
	}
	// print
	print() {
		// if empty list
		if (this.size === 0) {
			console.log("List is empty");
			return;
		} else {
            let current = this.head;
			while (current) {
				console.log(current.value);
				current = current.next;
			}
		}
	}
	// prepend (insert in beginning)
	prepend(value) {
		let newNode = new Node(value);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.size++;
	}
	// append (insert in end)
	append(value) {
		let newNode = new Node(value);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size++;
	}
	// remove from front
	removeFromFront() {
		if (this.isEmpty()) {
			console.log("List is empty");
			return;
		}
		const value = this.head.value;
		this.head = this.head.next;
		this.size--;
		return value;
	}
	// remove from end
	removeFromEnd() {
		if (this.isEmpty()) {
			console.log("List is empty");
			return;
		}
		const value = this.tail.value;
		// if there is only one node in the list
		if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let prev = this.head;
			while (prev.next !== this.tail) {
				prev = prev.next;
			}
			prev.next = null;
			this.tail = prev;
		}
		this.size--;
		return value;
	}
}

let list1 = new LinkedList();
list1.append(10);
list1.append(20);
list1.append(30);
list1.append(40);
list1.append(50);
list1.append(60);
list1.append(70);
list1.append(80);
list1.print();
console.log(list1.getSize());
console.log(list1.removeFromFront());
list1.print();
console.log(list1.removeFromEnd());
list1.print();
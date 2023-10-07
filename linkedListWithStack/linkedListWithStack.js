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
// linkedlist stack - LIFO
class LinkedListStack {
	constructor() {
		this.list = new LinkedList;
	}
	// push that accepts the value
	push(value) {
		this.list.prepend(value);
	}
	// pop that remove element from last inserted element
	pop(){
		return this.list.removeFromFront();
	}
	// peak
	peak(){
		return this.list.head.value;
	}
	// helper functions
	isEmpty(){
		return this.list.isEmpty();
	}
	// get size
	getSize(){
		return this.list.getSize();
	}
	// print
	print(){
		this.list.print();
	}
}

// instantiating the stack linked list object
const stackedLinkedList1 = new LinkedListStack();
console.log(stackedLinkedList1.isEmpty());

// push
stackedLinkedList1.push(10)
stackedLinkedList1.push(15)
stackedLinkedList1.push(20)
stackedLinkedList1.print();
// get size
console.log(stackedLinkedList1.getSize());

// peak
console.log(stackedLinkedList1.peak());
// print
stackedLinkedList1.print();

// pop
console.log(stackedLinkedList1.pop());
// print
stackedLinkedList1.print();
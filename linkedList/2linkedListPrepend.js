class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	// is empty
	isEmpty() {
		return this.size === 0;
	}
	// getSize
	getSize() {
		return this.size;
	}
	// prepend
	prepend(value) {
		const node = new Node(value);
		// if linked list is empty
		if (this.isEmpty()) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}
	// print
	print() {
		// if linked list is empty
		if (this.isEmpty()) { 
			return `linked list is empty`;
		} else {
			let curr = this.head
			let listValues = ``
			while (curr) {
				listValues += `${curr.value} `
				curr=curr.next
			}
			console.log(`listValues: ${listValues}`);
		}

	}
}
const list1 = new LinkedList();
console.log(`isEmpty: ${list1.isEmpty()}`);
console.log(`getSize: ${list1.getSize()}`);
list1.prepend(10)
list1.print()
list1.prepend(20)
list1.print()
list1.prepend(30)
list1.print()
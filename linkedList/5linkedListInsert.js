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
	// 4. append
	append(value) {
		const node = new Node(value);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			let prev = this.head;
			while (prev.next) {
				prev = prev.next;
			}
			prev.next = node;
		}
		this.size++;
	}
	// 5. insert
	insert(value, index) {
		// if not in bound
		if (index < 0 || index > this.size) {
			console.log(`index is out of bounds`);
			return;
		}
		// at the start
		else if (index === 0) {
			this.prepend(value);
		}
		// at the end
		else if (index === this.size) {
			this.append(value);
		}
		// at in between
		else {
			const node = new Node(value);
			let prev = this.head;
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next;
			}
			node.next = prev.next;
            prev.next = node;
            this.size++;
		}
	}
	// 3. print
	print() {
		// if linked list is empty
		if (this.isEmpty()) {
			console.log(`linked list is empty`);
		} else {
			let curr = this.head;
			let listValues = ``;
			while (curr) {
				listValues += `${curr.value} `;
				curr = curr.next;
			}
			console.log(`listValues: ${listValues}`);
		}
	}
}
const list1 = new LinkedList();
console.log(`isEmpty: ${list1.isEmpty()}`);
console.log(`getSize: ${list1.getSize()}`);
list1.print();
console.log(`prependMethod`);
list1.prepend(10);
list1.print();
console.log(`isEmpty: ${list1.isEmpty()}`);
console.log(`getSize: ${list1.getSize()}`);
list1.prepend(20);
list1.print();
list1.prepend(30);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
console.log(`appendMethod`);
list1.append(40);
list1.print();
list1.append(50);
list1.print();
list1.append(60);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
list1.insert(70,6);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
list1.insert(80,-1);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
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
	// 1. is empty
	isEmpty() {
		return this.size === 0;
	}
	// 2. getSize
	getSize() {
		return this.size;
	}
	// 3. prepend
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
	// 5. append
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
	// 6. insert
	insert(value, index) {
		// if not in bound
		if (index < 0 || index > this.size) {
			console.log(`index is out of bounds`);
			return;
		}
		// at the start or end
		else if (index < 0 || index > this.size) {
			console.log(`index is out of bounds`);
			return;
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
	// 7. removefrom
	removeFrom(index) {
		// if index is out of bounds
		let removedNode;
		if (index < 0 || index >= this.size) {
			console.log(`index ${index} out of bounds`);
		}
		// remove from start
		else if (index === 0) {
			removedNode = this.head;
			this.head = this.head.next;
		}
		// remove from end
		else if (index === this.size - 1) {
			let prev = this.head;
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next;
			}
			removedNode = prev.next;
			prev.next = null;
		}
		// remove in between
		else {
			let prev = this.head;
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next;
			}
			removedNode = prev.next;
			prev.next = removedNode.next;
		}
		this.size--;
		return removedNode.value;
	}
	// 8. removeValue
	removeValue(value) {
		// if linked list is empty
		if (this.isEmpty()) {
			console.log(`linked list is empty`);
			return null;
		}
		// handle 1st node
		else if (this.head.value === value) {
			this.head = this.head.next;
			this.size--;
			return this.head.value;
		}
		// handle other nodes
		else {
			let removedNode;
			let prev = this.head;
			while (prev.next && prev.next.value !== value) {
				prev = prev.next;
			}
			// when prev.next matches value
			if (prev.next) {
				removedNode = prev.next;
				prev.next = removedNode.next;
				this.size--;
				return removedNode.value;
			}
			// if not matching anything
			console.log(`no value found`);
			return null;
		}
	}
	// 9. search by value
	searchValue(value) {
		// initialize index = 0
		let i = 0;
		// if linked list is empty
		if (this.isEmpty()) {
			console.log(`linked list is empty`);
			return null;
		}
		// handle 1st node
		else if (this.head.value === value) {
			return i;
		}
		// handle other nodes
		else {
			let curr = this.head;
			while (curr) {
				if (curr.value === value) {
					return i;
				} else {
					curr = curr.next;
					i++;
				}
			}
			// if not matching anything
			console.log(`no value found`);
			return -1;
		}
	}
	// 10. search by Index
	searchIndex(index) {
		if (index < 0 || index >= this.size) {
			console.log(`index ${index} out of bounds`);
			return -1;
		}

		let curr = this.head;
		for (let i = 0; i < index; i++) {
			curr = curr.next;
		}

		return curr.value;
	}
	// 11. reverse
	reverse() {
		let prev = null;
		let curr = this.head;
		while (curr) {
			let next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		// when curr reach at end of list, curr.next is null, while loop exits, and prev = curr, so point head on it
		this.head = prev;
	}
	// 4. print
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
// prepending
console.log(`################################`);
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
// appending
console.log(`################################`);
console.log(`appendMethod`);
list1.append(40);
list1.print();
list1.append(50);
list1.print();
list1.append(60);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
// inserting
console.log(`################################`);
list1.insert(70, 6);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
list1.insert(80, -1);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
list1.insert(80, 2);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
// removingIndex
console.log(`################################`);
console.log(`removing by index`);
console.log(`list1.removeFrom(0) ${list1.removeFrom(0)}`);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
console.log(`list1.removeFrom(6) ${list1.removeFrom(6)}`);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
console.log(`list1.removeFrom(1) ${list1.removeFrom(1)}`);
list1.print();
console.log(`getSize: ${list1.getSize()}`);
//
console.log(`################################`);
console.log(`removing by value`);
console.log(list1.removeValue(40));
list1.print();
console.log(`getSize: ${list1.getSize()}`);
console.log(list1.removeValue(400));
list1.print();
console.log(`getSize: ${list1.getSize()}`);
console.log(list1.removeValue(20));
list1.print();
console.log(`getSize: ${list1.getSize()}`);
// search by value and return index
console.log(`################################`);
console.log(`search by value and return index`);
console.log(`list1.searchValue( 10 ): ${list1.searchValue(10)}`);
console.log(`list1.searchValue( 50 ): ${list1.searchValue(50)}`);
console.log(`list1.searchValue( 60 ): ${list1.searchValue(60)}`);
console.log(`list1.searchValue( 70 ): ${list1.searchValue(70)}`);
// search by index and return its value
console.log(`################################`);
console.log(`search by index and return its value`);
console.log(`list1.searchIndex( 0 ): ${list1.searchIndex(0)}`);
console.log(`list1.searchIndex( 1 ): ${list1.searchIndex(1)}`);
console.log(`list1.searchIndex( 2 ): ${list1.searchIndex(2)}`);
console.log(`list1.searchIndex( 3 ): ${list1.searchIndex(3)}`);
console.log( `list1.searchIndex( -3 ): ${ list1.searchIndex( -3 ) }` );
// reverse
console.log( `################################` )
console.log( `REVERSE` )
console.log(`before reversing`)
list1.print();
list1.reverse();
console.log(`after reversing`)
list1.print();


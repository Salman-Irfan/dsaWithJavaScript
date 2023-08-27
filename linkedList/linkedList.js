class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() { 
        this.head = null;
        this.size = 0;
    }
    // isEmpty
    isEmpty() {
        return this.size === 0;
    }
    // getSize
    getSize() { 
        return this.size;
    }
}
const list1 = new LinkedList
console.log(`isEmpty: ${list1.isEmpty()}`)
console.log(`getSize: ${list1.getSize()}`)
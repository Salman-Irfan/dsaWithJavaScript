class Stack {
    constructor() {
        this.items = [];
    }
    // push
    push(element) {
        this.items.push(element);
    }
    // pop
    pop(element) {
        return this.items.pop();
    }
    // peek
    peek() {
        return this.items[this.items.length - 1];
    }
    // isEmpty()
    isEmpty() { 
        console.log(this.items.length === 0);
    }
    // size
    size() {
        console.log(this.items.length)
    }
    print() {
        console.log(this.items.toString());
    }
}
const stack1 = new Stack();
console.log(stack1)
stack1.print();
stack1.push(1)
stack1.print();
console.log(stack1)
stack1.push(2)
stack1.push(3)
stack1.push(4)
stack1.push(5)
stack1.print();
console.log(stack1)
stack1.pop();
stack1.print();
console.log(stack1)
stack1.isEmpty();
stack1.print();
console.log(stack1);
stack1.size();
stack1.print();
console.log(stack1);
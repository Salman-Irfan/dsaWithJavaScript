class Queue  {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    // enqueue
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    // dequeue
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++
        return item;
    }
    // isEmpty
    isEmpty() { 
        return this.rear - this.front === 0;
    }
    // peek
    peek() {
        return this.items[this.front];
    }
    // size
    size() {
        return this.rear - this.front;
    }
    // print
    print() {
        console.log(this.items)
    }
}
// new instance of the class
const que1 = new Queue
que1.print()
console.log(`isEmpty: ${que1.isEmpty()}`)
que1.enqueue(1)
que1.enqueue(2)
que1.enqueue(3)
que1.enqueue(4)
que1.enqueue(5)
que1.enqueue(6)
que1.print()
que1.dequeue()
que1.print()
console.log(`peek:${que1.peek()}`)
que1.print()
console.log(`size:${que1.size()}`);
que1.print()
console.log(`isEmpty: ${que1.isEmpty()}`)
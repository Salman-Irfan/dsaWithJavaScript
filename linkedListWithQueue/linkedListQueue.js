const LinkedList = require ('./linkedListTail.js')

class LinkedListQueue {
    constructor(){
        this.list = new LinkedList
    }
    // functions
    // enqueue
    enqueue(value){
        // it will insert the value at the rare end of the queue
        this.list.append(value)
    }
    // dequeue
    dequeue(){
        return this.list.removeFromFront()
    }
    // peek
    peek(){
        return this.list.head.value
    }
    // helper methods
    isEmpty(){
        return this.list.isEmpty()
    }
    // getSize
    getSize(){
        return this.list.getSize()
    }
    // print
    print(){
        return this.list.print()
    }
}

// instantiating the queue
const queue = new LinkedListQueue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(15)
queue.enqueue(20)
queue.enqueue(25)
queue.enqueue(30)
queue.enqueue(35)
console.log(queue.isEmpty())
console.log(queue.getSize())
queue.print()

queue.dequeue()
queue.print()
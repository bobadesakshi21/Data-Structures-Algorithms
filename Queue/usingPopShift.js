class Queue {
    constructor() {
        this.arr = []
    }
    enqueue(element) {
        this.arr.push(element)
    }
    dequeue() {
        this.arr.shift()
    }
}

const q1 = new Queue();
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
console.log(q1.arr)
q1.dequeue()
console.log(q1.arr)
q1.dequeue()
console.log(q1.arr)

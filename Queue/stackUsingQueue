class Queue {
    constructor(capacity) {
        this.length = 0
        this.capacity = capacity
        this.arr = []
    }
    enqueue(element) {
        if(this.length === this.capacity) {
            console.log('Queue is full')
            return
        }
        this.arr[this.length] = element
        this.length++
    }
    
    dequeue() {
        let item = this.arr[0]
        for(let i = 0; i < this.length; i++) {
            this.arr[i] = this.arr[i+1]
        }
        this.length--
        return item
    }
    display() {
        let result = ''
        for(let i = 0; i < this.length; i++) {
            result += this.arr[i] + ' '
        }
        console.log(result)
    }
}
class Stack {
    constructor() {
        this.q1 = new Queue(10)
        this.q2 = new Queue(10)
    }
    push(element) {
        this.q1.enqueue(element)
    }
    pop() {
        if(this.q1.length) {
            for(let i = 0; i < this.q1.length-1; i+=i/2) {
                let item = this.q1.dequeue()
                this.q2.enqueue(item)
            }
        }
        let popItem = this.q1.dequeue()
        let q = new Queue()
        q = this.q1
        this.q1 = this.q2
        this.q2 = q
        return popItem
    }
    display() {
        this.q1.display()
    }
}

let s1 = new Stack
s1.push(1)
s1.push(2)
s1.push(3)
s1.display()
s1.pop()
s1.display()
s1.push(4)
s1.push(5)
s1.display()
s1.pop()
s1.display()


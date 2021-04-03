class Node {
    constructor(element) {
        this.data = element
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }

    push(element) {
        let newNode = new Node(element)
        if(!this.head) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }
    pop() {
        if(!this.head) {
            console.log('Stack Underflow')
            return
        }
        let temp = this.head
        this.head = this.head.next
        return temp.data
    }

    printStack() {
        let temp = this.head
        let result = ''
        while(temp) {
            result += temp.data + '|'
            temp = temp.next
        }
        console.log(result)
    }
}

let ll = new LinkedList()
ll.push(1)
ll.push(2)
ll.push(3)
ll.printStack()
ll.pop()
ll.printStack()


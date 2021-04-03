class Node {
    constructor(element) {
        this.data = element
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addAtLast(element) {
        let node = new Node(element)
        let current

        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    deleteLastOcc(n) {
        let trav = this.head
        let temp = null, prev = null
        while (trav) {
            if (trav.data == n) {
                temp = trav
            }
            trav = trav.next
        }
        if (temp) {
            if (temp.next) {
                temp.data = temp.next.data
                temp.next = temp.next.next
            } else {
                delete temp.data
            }
        }
    }
    delLast(n) {
        let trav = this.head, temp = null
        if (this.head.data === n) temp = this.head
        while (trav.next) {
            if (trav.next.data === n) temp = trav
            trav = trav.next
        }
        if (temp && temp === this.head) {
            this.head = this.head.next
        } else if (temp) {
            temp.next = temp.next.next
        }
    }
    printList() {
        let temp = this.head
        let result = ''
        while (temp) {
            result += temp.data + '->'
            temp = temp.next
        }
        console.log(result + 'null')
    }
}

let ll = new LinkedList()
ll.addAtLast(1)
ll.addAtLast(2)
ll.addAtLast(3)
ll.addAtLast(2)
ll.addAtLast(2)
ll.addAtLast(2)
ll.printList()
ll.delLast(2)
ll.printList()






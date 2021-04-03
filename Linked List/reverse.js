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

    reverse() {
        let curr, next, prev
        curr = this.head
        prev = next = null
        while (curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    static reverseRec(curr) {
        if (!curr) return curr
        if (!curr.next) return curr
        const newHead = LinkedList.reverseRec(curr.next)
        curr.next.next = curr
        curr.next = null
        return newHead
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
ll.addAtLast(4)
ll.addAtLast(5)
ll.printList()
ll.reverse()
ll.printList()
ll.head = LinkedList.reverseRec(ll.head)
ll.printList()






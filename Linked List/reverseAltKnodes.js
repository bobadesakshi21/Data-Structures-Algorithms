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
    
    static reverseAlternateKnodes(head, k) {
        let curr = head
        let prev, next
        let i = 1
        while(i <= k && curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            i++
        } 
        if(head) {
            head.next = curr 
        }
        while(i < 2*k && curr) {
            curr = curr.next
            i++
        } 
        if(curr) {
            curr.next = LinkedList.reverseAlternateKnodes(curr.next, k)
        }
        return prev
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
ll.addAtLast(6)
ll.addAtLast(7)
ll.addAtLast(8)
ll.addAtLast(9)
ll.printList()
ll.head = LinkedList.reverseAlternateKnodes(ll.head, 3)
ll.printList()

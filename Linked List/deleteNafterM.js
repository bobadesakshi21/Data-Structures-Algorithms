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

    deleteNAfterM(n, m) {
        let temp = 1
        let trav = this.head
        while (temp < m - 1) {
            temp++;
            trav = trav.next
        }
        let trav2 = trav.next
        temp = 1
        while (trav2 != null && temp != n) {
            temp++
            trav2 = trav2.next
        }
        trav.next = trav2.next
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






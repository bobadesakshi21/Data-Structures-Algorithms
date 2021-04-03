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
    isPalindrome() {
        let slowPtr, fastPtr, curr, prev, next, isPalindrome = true
        curr = prev = next = null
        slowPtr = fastPtr = this.head
        while(fastPtr.next && fastPtr.next.next) {
            fastPtr = fastPtr.next.next
            slowPtr = slowPtr.next
        }
        curr = slowPtr.next;
        while(curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        slowPtr.next = prev
        curr = this.head
        fastPtr = slowPtr.next
        while(fastPtr) {
            if(curr.data !== fastPtr.data) {
                isPalindrome = false
            }
            fastPtr = fastPtr.next
            curr = curr.next
        }
        console.log('IS PALINDROME: ', isPalindrome)
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
ll.printList()
ll.isPalindrome()
ll.printList()

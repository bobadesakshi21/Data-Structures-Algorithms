class Queue {
    constructor() {
        this.arr = []
        this.length = 0
    }

    enqueue(element) {
        this.arr.push(element)
        this.length++
    }

    dequeue() {
        let temp = this.arr[0]
        this.arr.shift()
        this.length--
        return temp
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    rightView() {
        const queue = new Queue()
        let result = ''
        queue.enqueue(this.root)
        while (queue.length) {
            let n = queue.length
            for (let i = 1; i <= n; i++) {
                let temp = queue.dequeue()
                if (i === n) result += temp.data + ' '
                if (temp.left) queue.enqueue(temp.left)
                if (temp.right) queue.enqueue(temp.right)
            }
        }
        console.log(result)
    }
}
let b1 = new BinaryTree()
b1.root = new Node(1)
b1.root.left = new Node(2);
b1.root.right = new Node(3);
b1.root.left.right = new Node(8);
b1.root.left.right.left = new Node(7);
b1.root.left.right.left.right = new Node(6);
b1.root.right.left = new Node(12);

b1.rightView()
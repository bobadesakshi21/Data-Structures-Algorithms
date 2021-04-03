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
    preorderTraversal() {
        const stack = new Array()
        stack.push(this.root)
        let result = '', temp
        while (stack.length) {
            temp = stack.pop()
            result += temp.data + ' '
            if (temp.right) stack.push(temp.right)
            if (temp.left) stack.push(temp.left)
        }
        console.log('Preorder Traversal: ', result)
    }

    leftView() {
        let result = ''
        const q1 = new Queue()
        q1.enqueue(this.root)
        while (q1.length) {
            let n = q1.length
            for (let i = 1; i <= n; i++) {
                let temp = q1.dequeue()
                if (i === 1) result += temp.data + ' '
                if (temp.left) q1.enqueue(temp.left)
                if (temp.right) q1.enqueue(temp.right)
            }
        }
        console.log('Left View: ', result)
    }
}
let b1 = new BinaryTree()
b1.root = new Node(10);
b1.root.left = new Node(2);
b1.root.right = new Node(3);
b1.root.left.left = new Node(7);
b1.root.left.right = new Node(8);
b1.root.right.right = new Node(15);
b1.root.right.left = new Node(12);
b1.root.right.right.left = new Node(14);

b1.preorderTraversal()
b1.leftView()

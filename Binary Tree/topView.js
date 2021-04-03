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
        this.distance = 0
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    topView() {
        let minIndex = Number.MAX_SAFE_INTEGER
        let maxIndex = Number.MIN_SAFE_INTEGER
        let result = ''
        const queue = new Queue()
        const map = new Map()
        queue.enqueue(this.root)
        while (queue.length) {
            let temp = queue.dequeue()
            if (!map.has(temp.distance)) map.set(temp.distance, temp.data)
            if (temp.left) {
                temp.left.distance = temp.distance - 1
                queue.enqueue(temp.left)
            }
            if (temp.right) {
                temp.right.distance = temp.distance + 1
                queue.enqueue(temp.right)
            }
        }

        for (let key of map.keys()) {
            if (minIndex > key) minIndex = key
            if (maxIndex < key) maxIndex = key
        }
        for (let i = minIndex; i <= maxIndex; i++) {
            result += map.get(i) + ' '
        }
        console.log('Top View: ', result)
    }
}

let b1 = new BinaryTree()
b1.root = new Node(1)
b1.root.left = new Node(2);
b1.root.right = new Node(3);
b1.root.left.right = new Node(4);
b1.root.left.right.right = new Node(5);
b1.root.left.right.right.right = new Node(6);

b1.topView()
class Queue {
    constructor() {
        this.arr = []
        this.length = 0
    }

    enqueue(element) {
        this.arr.push(element)
        this.length++;
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

    bottomView() {
        const queue = new Queue()
        const map = new Map()
        let result = ''
        queue.enqueue(this.root)
        while (queue.length) {
            let poppedNode = queue.dequeue()
            map.set(poppedNode.distance, poppedNode.data)

            if (poppedNode.left) {
                poppedNode.left.distance = poppedNode.distance - 1
                queue.enqueue(poppedNode.left)
            }

            if (poppedNode.right) {
                poppedNode.right.distance = poppedNode.distance + 1
                queue.enqueue(poppedNode.right)
            }
        }
        console.log(map)
        let minKey = Number.MAX_SAFE_INTEGER
        for (let key of map.keys()) {
            if (key < minKey) minKey = key
        }
        for (let i = minKey; i <= -1 * minKey; i++) {
            result += map.get(i) + ' '
        }
        console.log(result)
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

b1.bottomView()

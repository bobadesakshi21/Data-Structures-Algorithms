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
    verticalView() {
        let minIndex = Number.MAX_SAFE_INTEGER
        let maxIndex = Number.MIN_SAFE_INTEGER
        let result = ''

        const queue = new Queue()
        const map = new Map()
        queue.enqueue(this.root)
        while (queue.length) {
            let temp = queue.dequeue()

            let tempArr
            if (map.has(temp.distance)) {
                tempArr = map.get(temp.distance)
                tempArr.push(temp.data)
            } else {
                tempArr = new Array()
                tempArr.push(temp.data)
            }

            map.set(temp.distance, tempArr)

            if (temp.left) {
                temp.left.distance = temp.distance - 1
                queue.enqueue(temp.left)
            }

            if (temp.right) {
                temp.right.distance = temp.distance + 1
                queue.enqueue(temp.right)
            }
        }
        console.log('Map: ', map)
        for (let key of map.keys()) {
            if (minIndex > key) minIndex = key
            if (maxIndex < key) maxIndex = key
        }
        for (let i = minIndex; i <= maxIndex; i++) {
            let length = map.get(i).length
            for (let j = 0; j < length; j++) result += map.get(i)[j] + ' '
        }
        console.log(result)
    }
}

let b1 = new BinaryTree()
b1.root = new Node(1)
b1.root.left = new Node(2);
b1.root.right = new Node(3);
b1.root.left.left = new Node(4);
b1.root.left.right = new Node(5);
b1.root.right.left = new Node(6);
b1.root.right.right = new Node(7);
b1.root.right.right.left = new Node(8);
b1.root.right.right.right = new Node(9);

b1.verticalView()
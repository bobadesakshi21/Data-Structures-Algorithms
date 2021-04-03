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
}

let b1 = new BinaryTree()
b1.root = new Node(1)
b1.root.left = new Node(2)
b1.root.right = new Node(3)
console.log(b1.root)
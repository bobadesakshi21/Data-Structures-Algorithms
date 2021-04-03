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
        let temp = this.root, level = -1
        let result = ''
        while (temp) {
            result += temp.data + ' '
            if (temp.left) temp = temp.left
            else temp = temp.right
            level++
        }
        temp = this.root.right
        let levelCount = 1
        while (levelCount <= level && temp) {
            console.log('temp: ', temp.data)
            if (temp.left) temp = temp.left
            else temp = temp.right
            levelCount++
        }
        while (temp) {
            result += temp.data + ' '
            if (temp.left) temp = temp.left
            else temp = temp.right
        }
        console.log('level: ', level)
        console.log('Left View: ', result)
    }
}

let b1 = new BinaryTree()
// b1.root = new Node(1)
// b1.root.left = new Node(2)
// b1.root.right = new Node(3)
// b1.root.left.right = new Node(4)
// b1.root.left.right.right = new Node(5)
// b1.root.left.right.right.right = new Node(6)

// b1.root = new Node(4)
// b1.root.left = new Node(5)
// b1.root.right = new Node(2)
// b1.root.left.right = new Node(8)
// b1.root.right.left = new Node(3)
// b1.root.right.right = new Node(1)
// b1.root.right.left.left = new Node(6)
// b1.root.right.left.right = new Node(7)

// b1.root = new Node(4)
// b1.root.left = new Node(5)
// b1.root.right = new Node(2)
// b1.root.right.right = new Node(3)
// b1.root.left.right = new Node(8)
// b1.root.left.right.left = new Node(9)
// b1.root.right.right.left = new Node(6)
// b1.root.right.right.right = new Node(7)

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
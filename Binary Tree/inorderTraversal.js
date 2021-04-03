// Inorder Traversal
// Push the node into the stack while node is not null
// node = node.left
//if node is null pop the item. Print the item and push node.right to the stack


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

    inorderTraversal() {
        const stack = new Array()
        let curr = root, result=''
        while(curr || stack.length > 0) {
            while(curr) {
                stack.push(curr)
                curr = curr.left
            }
            let temp = stack.pop()
            curr = temp.right
            result += temp.data + ' '
        }
        console.log('Inorder Traversal: ', result)
    }
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

const b1 = new BinaryTree()
b1.inorderTraversal()


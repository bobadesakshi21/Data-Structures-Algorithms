// Push root to the stack
// Pop from the stack until stack is empty
// Print the popped item.
// Push right of the popped item. Then push left of the popped item


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

    insert(arr) {
        this.root = new Node(arr[0])
        let curr = null
        for(let i = 1; i < arr.length; i++) {
            curr = new Node(arr[i])
            let temp = this.root
            while(temp) {
                if(temp.data > curr.data) {
                    if(temp.left) temp = temp.left
                    else {
                        temp.left = curr 
                        temp = null } 
                }
                else {
                    if(temp.right) {
                        temp = temp.right }
                    else {
                        temp.right = curr
                        temp = null}
                }
            }
        }
    }

    preorderTraversal() {
        const stack = new Array()
        stack.push(this.root)
        let result = '', temp
        while(stack.length) {
            temp = stack.pop()
            result +=  temp.data + ' '
            if(temp.right) stack.push(temp.right)
            if(temp.left) stack.push(temp.left)
        }
        console.log('Preorder Traversal: ', result)
    }
    inorderTraversal() {
        const stack = new Array()
        let curr = this.root, result=''
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

let b1 = new BinaryTree()
const arr = [8,3,10,1,6,14,4,7,13]
b1.insert(arr)
b1.inorderTraversal()
b1.preorderTraversal()
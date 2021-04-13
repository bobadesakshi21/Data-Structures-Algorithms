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
        this.stack1 = []
        this.stack2 = []
    }
    spiralTraversal() {
        let result = ''

        this.stack1.push(this.root)
        while(this.stack1.length || this.stack2.length){       
            while(this.stack1.length) {
                let temp = this.stack1.pop()
                result += temp.data + ' '

                if(temp.right) this.stack2.push(temp.right)
                if(temp.left) this.stack2.push(temp.left)
            }
            while(this.stack2.length) { 
                let temp = this.stack2.pop()
                result += temp.data + ' '

                if(temp.left) this.stack1.push(temp.left)
                if(temp.right) this.stack1.push(temp.right)
            }
        }
        console.log('Spiral Traversal: ', result)
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

b1.spiralTraversal()
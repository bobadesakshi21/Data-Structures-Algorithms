const stack1 = new Array()
const stack2 = new Array()

function enqueue(element) {
    stack1.push(element)
}

function deQueue() {
    if(!stack1.length && !stack2.length) { 
        console.log('Queue is empty')
    }
    if(!stack2.length) {
        while(stack1.length) {
            let item = stack1.pop()
            stack2.push(item)
        }
    }
    let x = stack2.pop()
    console.log(x)
}
enqueue(1)
enqueue(2)
enqueue(3)
enqueue(4)
deQueue()
deQueue()
deQueue()
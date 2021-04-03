const arr = new Array()
let length = 0
capacity = 10

function enqueue(element) {
    if(length === capacity) {
        console.log('Queue is full')
        return
    }
    arr[length] = element
    length++
}

function dequeue() {
    let item = arr[0]
    for(let i = 0; i < length; i++) {
        arr[i] = arr[i+1]
    }
    length--
    console.log('dequeued item: ', item)
}
function display() {
    let result = ''
    for(let i = 0; i < length; i++) {
        result += arr[i] + ' '
    }
    console.log(result)
}




enqueue(1)
enqueue(2)
enqueue(3)
enqueue(4)
display()
dequeue()
enqueue(5)
display()
dequeue()
display()

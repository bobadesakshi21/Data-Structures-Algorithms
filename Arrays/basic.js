class Array {
    constructor() {
        this.length = 0
        this.data = []
    }
    push(element) {
        this.data[this.length] = element
        this.length++
    }
    pop() {
        delete this.data[this.length - 1]
        this.length--
    }

    printArray() {
        let result = ''
        for(let i in this.data) {
            result += this.data[i] + ' '
        }
        console.log(result)
    }

    insertAt(index, element) {
        if(index < 0 || index > this.length) {
            return false
        }
        for(let i = this.length; i >= index; i--) {
            this.data[i] = this.data[i-1]
        }
        this.data[index] = element
        this.length++
    }
    deleteAt(index) {
        if(index < 0 || index >= this.length) {
            return false
        }
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
    }
}

let a1 = new Array()
a1.push(1)
a1.push(2)
a1.push(3)
a1.push(4)
a1.push(5)
a1.push(6)
a1.push(7)
a1.printArray()
a1.deleteAt(10)
a1.printArray()












class Array {
    constructor() {
        this.length = 0
        this.data = []
    }
    push(element) {
        this.data[this.length] = element
        this.length++
    }

    printArray() {
        let result = ''
        for (let i in this.data) {
            result += this.data[i] + ' '
        }
        console.log(result)
    }
    rotate() {
        let temp = this.data[this.length - 1]
        for (let i = this.length - 1; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[0] = temp
    }

}

let a1 = new Array()
a1.push(0)
a1.push(1)
a1.push(2)
a1.push(3)
a1.push(4)
a1.push(5)
a1.push(6)
a1.printArray()
a1.rotate()
a1.printArray()













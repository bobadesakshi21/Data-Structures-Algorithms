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
        for(let i in this.data) {
            result += this.data[i] + ' '
        }
        console.log(result)
    }

    findDuplicates(n) {
        let index
        for(let i = 0; i < this.length; i++) {
            index = this.data[i] % n
            this.data[index] += n
        }
        let result = ''
        for(let i = 0; i < this.length; i++) {
            if(this.data[i] >= 2*n) {
                result += i + ' '
            }
        }
        console.log(result)
    }
}

let a1 = new Array()
a1.push(1)
a1.push(0)
a1.push(0)
a1.push(2)
a1.push(3)
a1.push(4)
a1.push(5)
a1.push(6)
a1.push(5)
a1.push(2)
a1.printArray()
a1.findDuplicates(7)
a1.printArray()













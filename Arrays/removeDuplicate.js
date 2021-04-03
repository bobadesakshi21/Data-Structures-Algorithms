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

    removeDuplicate() {
        let j = 0
        for(let i = 0; i < this.data.length-1; i++) {
            if(this.data[i] != this.data[i+1]) {
                j++
                this.data[j] = this.data[i+1]
            }
        }
        for(j=j+1; j<this.length; j++) {
            delete this.data[j]
        }
    }
}

let a1 = new Array()
a1.push(0)
a1.push(0)
a1.push(1)
a1.push(2)
a1.push(3)
a1.push(4)
a1.push(5)
a1.push(6)
a1.printArray()
a1.removeDuplicate()
a1.printArray()













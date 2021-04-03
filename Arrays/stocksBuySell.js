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

    stocksBuySell() {
        let buy = 1, sell = 0, profit = 0, value = 0, buyPrice = 0, sellPrice = 0
        for(let i = 0; i < this.data.length-1; i++) {
            if(this.data[i] > this.data[i + 1]) {
                if(sell == 1) {
                    sellPrice = sellPrice + this.data[i] 
                    console.log('sellPrice: ', this.data[i])
                    sell = 0
                    buy = 1
                } 
            }
            if(this.data[i] < this.data[i + 1]) {
                if(buy == 1) {
                    buyPrice = buyPrice + this.data[i]
                    console.log('buyPrice: ', this.data[i])
                    buy = 0
                    sell = 1
                } 
                if(sell == 1 && i+2 == this.data.length) {
                    sellPrice = sellPrice + this.data[i+1]
                    console.log('sellPrice: ', this.data[i+1])
                }
            }
        }
        profit = sellPrice - buyPrice
        console.log('TOTAL PROFIT: ', profit)
    }
}

let a1 = new Array()
a1.push(100)
a1.push(180)
a1.push(260)
a1.push(310)
a1.push(40)
a1.push(535)
a1.push(695)
a1.printArray()
a1.stocksBuySell()













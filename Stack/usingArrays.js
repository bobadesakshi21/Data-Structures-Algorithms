class Stack {
    constructor() {
        this.max = 5
        this.length = 0;
        this.data = []
    }
    push(element) {
        if(this.length === this.max) {
            console.log('Stack Overflow')
            return
        }
        this.data[this.length] = element
        this.length++
    }
    
    pop() {
      if(this.length == 0) {
          console.log('Stack Underflow')
      }
      const item = this.data[this.length - 1]  
      delete this.data[this.length - 1]
      this.length--
      return item
    }

    top() {
        if(this.length == 0) {
            console.log('Stack Underflow')
        }
        const item = this.data[this.length - 1]  
        return item
    }
}

let s1 = new Stack()
s1.push(1)
s1.push(2)
s1.push(3)
s1.push(4)
s1.pop()
let top = s1.top()
console.log(top)
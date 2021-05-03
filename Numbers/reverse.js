const reverse = (number) => {
    let num = number
    let result = 0
    while (num) {
        result = result * 10 + num % 10
        num = Math.floor(num / 10)
    }
    return result
}

const reverseNum = reverse(294)
console.log(reverseNum)
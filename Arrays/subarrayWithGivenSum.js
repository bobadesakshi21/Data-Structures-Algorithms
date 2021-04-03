const arr = new Array(7, 1, 4, 0, 0, 3, 10, 5)
const sum = 7
let index1 = 0, index2 = 0, currSum = 0
let bool = false

for(let i = 0; i <= arr.length; i++) {
    while(currSum > sum) {
        currSum -= arr[index1]
        index1++
    }
    if(currSum === sum) {
        bool = true
        index2 = i - 1
        break
    }
    currSum += arr[i]
}

console.log('Is subarray with the sum present: ', bool)
console.log('Subarray from: ', index1, index2)


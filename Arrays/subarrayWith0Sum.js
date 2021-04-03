const arr = new Array(4, 2, -3, 1, 6)
const set = new Set()
let currSum = 0

function isSumZero() {
    for(let i = 0; i <= arr.lengthl; i++) {
        sum += arr[i]
    
        if(sum === 0 || set.has(sum)) return true
    
        set.add(sum)
    }
    return false
}

isSumZero()

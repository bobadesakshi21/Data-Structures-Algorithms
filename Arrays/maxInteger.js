let minIndex = Number.MAX_SAFE_INTEGER
let maxIndex = Number.MIN_SAFE_INTEGER
// console.log(minIndex)
// console.log(maxIndex)

let result = ''
result += 1 + ' '
result += 5 + ' '

// console.log(result)
let res = result.split(' ')
// console.log(res.length)
// console.log(res[0])

const map = new Map()
let arr = []
arr.push(2)
map.set(0, arr)
console.log(map)
let arr2 = map.get(0)
arr2.push(3)
map.set(0, arr2)
console.log(map)



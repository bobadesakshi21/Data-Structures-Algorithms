var arr = new Array(1, 5, 7, -1, 5, 3, 3, 3, 3);
var sum = 6

var countMap = new Map();
var pairs = 0, requiredSum

for (let i = 0; i < arr.length; i++) {
    if (!(countMap.has(arr[i]))) {
        countMap.set(arr[i], 0)
    }
    countMap.set(arr[i], countMap.get(arr[i]) + 1)
}
for (let key of countMap.keys()) {
    var result = 1
    if (2 * key === sum && (countMap.get(key) > 1)) {
        for (i = 1; i <= countMap.get(key) - 1; i++) {
            result *= i
        }
        pairs += result
    } else if (!(key > sum)) {
        requiredSum = sum - key
        if (countMap.has(requiredSum)) {
            pairs += countMap.get(key) * countMap.get(requiredSum)
            countMap.delete(requiredSum)
            countMap.delete(key)
        }
    }
}

countMap.clear()
console.log('Pairs: ', pairs)
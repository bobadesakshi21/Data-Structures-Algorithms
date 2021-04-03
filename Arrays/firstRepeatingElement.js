const arr = new Array(1,1,1,1,1)

let set = new Set()
let index = -1

for(let i = arr.length - 1; i >= 0; i--) {
    if(set.has(arr[i])) {
        index = i
    } else {
        set.add(arr[i])
    }
}
if(index !== -1) {
    console.log('First Repeating Element: ', arr[index])
}
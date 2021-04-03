const arr = new Array(10, 80, 30, 90, 40, 50, 70)

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partition(arr, low, high) {
    let pivot = arr[high]
    let j = low - 1

    for(let i = low; i <= high; i++) {
        if(arr[i] <= pivot) {
            j++
            if(j !== i) {
                swap(arr, j, i)
            }
        }
    }
    return j
}

function quickSort(arr, low, high) {
    if(low < high) {
        let mid = partition(arr, low, high)
        quickSort(arr, low, mid - 1)
        quickSort(arr, mid + 1, high)
    }
}

quickSort(arr, 0, 6)
console.log(arr)
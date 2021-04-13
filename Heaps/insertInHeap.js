const heapify = (arr, index) => {
    let parent = Math.floor((index + 1) / 2 - 1)
    if (parent >= 0) {
        if (arr[index] > arr[parent]) {
            let temp = arr[index]
            arr[index] = arr[parent]
            arr[parent] = temp
            heapify(arr, parent)
        }
    }
}

const insertInHeap = (arr, element) => {
    arr[arr.length] = element
    heapify(arr, arr.length - 1)
}

const arr = [17, 15, 13, 9, 6, 5, 10, 4, 8, 3, 1]
insertInHeap(arr, 20)
console.log(arr)
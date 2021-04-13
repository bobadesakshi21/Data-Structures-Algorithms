const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const heapify = (arr, length, index) => {
    const left = index * 2 + 1
    const right = index * 2 + 2
    minIndex = index

    if (left < length && arr[left] < arr[minIndex]) minIndex = left
    if (right < length && arr[right] < arr[minIndex]) minIndex = right

    if (minIndex != index) {
        swap(arr, minIndex, index)
        heapify(arr, length, minIndex)
    }

}

const buildMinHeap = (arr) => {
    const length = arr.length
    const startIndex = Math.floor((length / 2) - 1)

    for (let i = startIndex; i >= 0; i--) {
        heapify(arr, length, i)
    }
}

const arr = [17, 15, 8, 9, 10, 13, 6, 4, 5, 3, 1]
buildMinHeap(arr)
console.log(arr)
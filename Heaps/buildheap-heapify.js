// max heap
const heapify = (arr, index, length) => {
    const left = 2 * index + 1
    const right = 2 * index + 2
    let largest = index

    if (left < length && arr[left] > arr[index]) largest = left
    if (right < length && arr[right] > arr[largest]) largest = right

    if (left < length && right < length) console.log(arr[index], arr[left], arr[right], arr[largest])

    if (largest != index) {
        let temp = arr[index]
        arr[index] = arr[largest]
        arr[largest] = temp
        heapify(arr, largest, length)
    }
}


const buildHeap = (arr) => {
    const length = arr.length

    const startIndex = Math.floor((length / 2) - 1)

    for (let i = startIndex; i >= 0; i--) {
        heapify(arr, i, length)
    }
}

const arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]

buildHeap(arr)
console.log('After heapify: ', arr)
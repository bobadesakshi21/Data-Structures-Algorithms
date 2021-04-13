// Delete a node from a max-heap
const heapify = (arr, length, index) => {
    const left = 2 * index + 1
    const right = 2 * index + 2

    let largest = index

    if (left < length && arr[left] > arr[index]) largest = left
    if (right < length && arr[right] > arr[largest]) largest = right

    if (largest != index) {
        let temp = arr[index]
        arr[index] = arr[largest]
        arr[largest] = temp
        heapify(arr, length, largest)
    }
}

const deleteElement = (arr, element) => {
    const index = arr.indexOf(element)
    arr[index] = arr[arr.length - 1]
    const length = arr.length - 1
    heapify(arr, arr.length, index)
    return length
}

const arr = [17, 15, 13, 9, 6, 5, 10, 4, 8, 3, 1]

arr.length = deleteElement(arr, 15)
console.log('Heap after deletion', arr)
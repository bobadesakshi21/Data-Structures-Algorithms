const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const heapify = (arr, length, index) => {
    const left = index * 2 + 1
    const right = index * 2 + 2
    let minIndex = index

    if (left < length && arr[left] < arr[minIndex]) minIndex = left
    if (right < length && arr[right] < arr[minIndex]) minIndex = right

    if (minIndex != index) {
        swap(arr, minIndex, index)
        heapify(arr, length, minIndex)
    }
}

const buildMinHeap = (arr) => {
    const length = arr.length
    const startIndex = Math.floor(length / 2 - 1)
    for (let i = startIndex; i >= 0; i--) {
        heapify(arr, length, i)
    }
}

const extractMin = (arr, index) => {
    element = arr[0]
    arr[0] = arr[arr.length - 1]
    arr.length = arr.length - 1
    heapify(arr, arr.length, 0)
    return element
}

const heapSort = (arr) => {
    buildMinHeap(arr)
    console.log('BINARY HEAP', arr)

    let length = arr.length
    let result = ''
    for (let i = 0; i < length; i++) {
        result += extractMin(arr) + ' '
    }

    console.log('HEAP SORT: ', result)
}

const arr = [17, 15, 13, 9, 6, 5, 10, 4, 8, 3, 1]
heapSort(arr)
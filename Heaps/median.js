class Heap {
    constructor() {
        this.arr = []
        this.length = 0
    }

    swap(i, j) {
        let temp = this.arr[i]
        this.arr[i] = this.arr[j]
        this.arr[j] = temp
    }

    heapifyInsert(index, flag) {
        const parent = Math.floor((index - 1) / 2)
        if (parent >= 0) {
            if ((this.arr[parent] > this.arr[index] && flag === 'minHeap') || (this.arr[parent] < this.arr[index] && flag === 'maxHeap')) {
                this.swap(index, parent)
                this.heapifyInsert(parent, flag)
            }
        }
    }

    insertInHeap(element, flag) {
        this.arr[this.length] = element
        this.length++
        this.heapifyInsert(this.length - 1, flag)
    }

    heapifyDelete(index, flag) {
        const left = index * 2 + 1
        const right = index * 2 + 2
        let reqIndex = index
        if (flag === 'minHeap') {
            if (left < this.length && this.arr[left] < this.arr[reqIndex]) reqIndex = left
            if (right < this.length && this.arr[right] < this.arr[reqIndex]) reqIndex = right
        }
        if (flag === 'maxHeap') {
            if (left < this.length && this.arr[left] > this.arr[reqIndex]) reqIndex = left
            if (right < this.length && this.arr[right] > this.arr[reqIndex]) reqIndex = right
        }

        if (reqIndex !== index) {
            this.swap(reqIndex, index)
            this.heapifyDelete(reqIndex, flag)
        }
    }

    deleteTop(flag) {
        let top = this.arr[0]
        this.arr[0] = this.arr[this.length - 1]
        this.heapifyDelete(0, flag)
        this.arr.pop()
        this.length--
        return top
    }
}

function findMedian() {
    const arr = [5, 2, 3, 1, 6, 4]
    const maxHeap = new Heap()
    const minHeap = new Heap()
    let result = ''

    for (let i = 0; i < arr.length; i++) {
        if (maxHeap.length == 0 || maxHeap.arr[0] > arr[i]) {
            maxHeap.insertInHeap(arr[i], 'maxHeap')
        } else {
            minHeap.insertInHeap(arr[i], 'minHeap')
        }
        if (maxHeap.length > minHeap.length + 1) {
            let top = maxHeap.deleteTop('maxHeap')
            minHeap.insertInHeap(top, 'minHeap')
            console.log('maxHeap minHeap', maxHeap.arr, minHeap.arr)
        } else if (minHeap.length > maxHeap.length + 1) {
            let top = minHeap.deleteTop('minHeap')
            minHeap.insertInHeap(top, 'minHeap')
        }
        if (maxHeap.length != minHeap.length) {
            if (maxHeap.length > minHeap.length) {
                result += maxHeap.arr[0] + ' '
            } else result += minHeap.arr[0] + ' '
        } else {
            let median = (maxHeap.arr[0] + minHeap.arr[0]) / 2
            result += median + ' '
        }
    }
    console.log(maxHeap.arr)
    console.log(minHeap.arr)
    console.log('RESULT: ', result)
}


findMedian()




// maxHeap.insertInHeap(2, 'maxHeap')
// maxHeap.insertInHeap(10, 'maxHeap')
// maxHeap.insertInHeap(20, 'maxHeap')
// maxHeap.insertInHeap(30, 'maxHeap')
// maxHeap.insertInHeap(15, 'maxHeap')


// minHeap.insertInHeap(20, 'minHeap')
// minHeap.insertInHeap(10, 'minHeap')
// minHeap.insertInHeap(5, 'minHeap')
// minHeap.insertInHeap(0, 'minHeap')
// minHeap.insertInHeap(2, 'minHeap')

// console.log(maxHeap.arr)
// console.log(minHeap.arr)

// console.log(maxHeap.deleteTop('maxHeap'))
// console.log(minHeap.deleteTop('minHeap'))

// console.log(maxHeap.arr)
// console.log(minHeap.arr)
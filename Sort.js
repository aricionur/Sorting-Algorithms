class Sort {
  swap(array, i1, i2) {
    const temp = array[i1]
    array[i1] = array[i2]
    array[i2] = temp
  }

  bubbleSort(array) {
    let isSorted // optimization for already sorted arrays
    for (let j = 0; j < array.length; j++) {
      isSorted = true
      for (let i = 0; i < array.length - 1 - j; i++) {
        // -j is for one sortered array elem after each sort iteration
        if (array[i] > array[i + 1]) {
          this.swap(array, i, i + 1)
          isSorted = false
        }
      }

      if (isSorted) return
    }
  }
}

const sort = new Sort()
const testArray = [3, 2, 1, 6, 5, 4]
//                 0  1  2  3  4  5

sort.bubbleSort(testArray)

console.log(testArray)

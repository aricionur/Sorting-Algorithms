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
        // -j is for one sortered array elem that finds its place after each sort iteration
        if (array[i] > array[i + 1]) {
          this.swap(array, i, i + 1)
          isSorted = false
        }
      }

      if (isSorted) return
    }
  }

  selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i
      let minimum = array[i]

      for (let j = 1 + i; j < array.length; j++) {
        if (array[j] < minimum) {
          minimum = array[j]
          minIndex = j
        }
      }

      if (minIndex !== i) this.swap(array, i, minIndex)
    }

    return
  }

  insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let current = array[i]
      let j = i - 1

      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j] // Shift elements to the right if their values are greater than current item value.
        j--
      }

      array[j + 1] = current
    }
  }
}

const sort = new Sort()
const testArray = [8, 2, 1, 6, 5, 4]

// sort.bubbleSort(testArray)
// sort.selectionSort(testArray)
sort.insertionSort(testArray)

console.log(testArray)

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

  mergeSort(array) {
    const arrLen = array.length
    if (arrLen < 2) return array
    else if (arrLen === 2) {
      if (array[0] > array[1]) this.swap(array, 0, 1)
      return array
    } else {
      // Divide array
      const middle = Math.floor(array.length / 2)
      const leftArray = array.slice(0, middle)
      const rightArray = array.slice(middle, array.length)
      const leftArrLen = leftArray.length
      const rightArrLen = rightArray.length

      // Sort each half
      this.mergeSort(leftArray)
      this.mergeSort(rightArray)

      // Merge arrays
      let leftArrIndex = 0
      let rightArrIndex = 0
      for (let i = 0; i < array.length; i++) {
        if (leftArrIndex === leftArrLen) array[i] = rightArray[rightArrIndex++]
        else if (rightArrIndex === rightArrLen) array[i] = leftArray[leftArrIndex++]
        else if (leftArray[leftArrIndex] > rightArray[rightArrIndex]) array[i] = rightArray[rightArrIndex++]
        else array[i] = leftArray[leftArrIndex++]
      }
    }
  }
}

const sort = new Sort()
// const testArray = [8, 2, 1]
const testArray = [8, 2, 1, 6, 5]
// const testArray = [8, 1, 2, 1, 6, 5]
// const testArray = [1, 1, 2, 3, 3, 4]
// const testArray = [9, 8, 7, 6, 5, 4]

// sort.bubbleSort(testArray)
// sort.selectionSort(testArray)
// sort.insertionSort(testArray)
sort.mergeSort(testArray)

console.log("Sorted array:", testArray)

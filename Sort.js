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
    }

    // Divide array
    const middle = Math.floor(array.length / 2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle, array.length)
    // const leftArrLen = leftArray.length
    // const rightArrLen = rightArray.length

    // Sort each half
    this.mergeSort(leftArray)
    this.mergeSort(rightArray)

    this.mergeArrays(leftArray, rightArray, array)
  }

  mergeArrays(leftArray, rightArray, resultArray) {
    const leftArrLen = leftArray.length
    const rightArrLen = rightArray.length

    // Merge arrays
    let leftArrIndex = 0
    let rightArrIndex = 0
    for (let i = 0; i < resultArray.length; i++) {
      if (leftArrIndex === leftArrLen) resultArray[i] = rightArray[rightArrIndex++]
      else if (rightArrIndex === rightArrLen) resultArray[i] = leftArray[leftArrIndex++]
      else if (leftArray[leftArrIndex] > rightArray[rightArrIndex]) resultArray[i] = rightArray[rightArrIndex++]
      else resultArray[i] = leftArray[leftArrIndex++]
    }
  }

  quickSort(array) {
    const arrLen = array.length
    if (arrLen < 2) return
    else if (arrLen === 2) {
      if (array[0] > array[1]) this.swap(array, 0, 1)
      return
    }

    this.quickSortPrivate(array, 0, array.length)
  }

  quickSortPrivate(array, start, end) {
    if (end === start) return

    const boundry = this.partition(array, start, end)

    // sort left and right side of pivot
    this.quickSortPrivate(array, start, boundry)
    this.quickSortPrivate(array, boundry + 1, end)
  }

  partition(array, start, end) {
    let boundry = start - 1
    const pivot = array[end - 1] // select last item as pivot

    for (let i = start; i < end; i++) {
      if (array[i] <= pivot) {
        boundry++
        if (boundry !== i) this.swap(array, i, boundry)
      }
    }

    return boundry
  }

  countSort(array) {
    const arrLen = array.length
    if (arrLen < 2) return

    // items have to be positive and integer numbers for this sort method !!!
    let maxValue = 0
    for (let i = 0; i < arrLen; i++) if (array[i] > maxValue) maxValue = array[i]

    // build Counter array
    const countingArray = []
    for (let i = 0; i <= maxValue; i++) countingArray.push(0)

    // calculate item frequencies
    for (let i = 0; i < arrLen; i++) countingArray[array[i]] += 1

    // put elements into array in sorted
    let currentArrayIndex = 0
    for (let i = 0; i < countingArray.length; i++) {
      if (countingArray[i]) {
        for (let j = 0; j < countingArray[i]; j++) array[currentArrayIndex++] = i
      }
    }
  }
}

const sort = new Sort()
// const testArray = [8, 2, 1]
// const testArray = [8, 2, 1, 6, 5]
// const testArray = [8, 1, 2, 1, 6, 5]
// const testArray = [1, 1, 2, 3, 3, 4]
// const testArray = [9, 8, 7, 6, 5, 4]
// const testArray = [22, 6, 3, 1, 15, 10, 13, 1, 13]

// sort.bubbleSort(testArray)
// sort.selectionSort(testArray)
// sort.insertionSort(testArray)
// sort.mergeSort(testArray)
// sort.quickSort(testArray)
sort.countSort(testArray)

console.log("Sorted array:", testArray)

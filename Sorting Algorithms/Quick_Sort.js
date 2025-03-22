// Quick Sort (O(n log n))

function quickSort (arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1]
    let left = arr.filter(el => el < pivot)
    let right = arr.filter(el => el > pivot)
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([64, 34, 25, 12, 22, 11, 90])); // [ 11, 12, 22, 25, 34, 64, 90 ]

// filter() - creates a new array with all elements that pass the test implemented by the provided function
// pivot - the last element of the array
// left - elements smaller than the pivot
// right - elements greater than the pivot
// ... - spread operator used to merge arrays
// Bubble Sort(O(n^2))

// Sorting algorithms arrange elements in a specific order (ascending or descending).
//Best for small datasets but inefficient for large ones.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [ 11, 12, 22, 25, 34, 64, 90 ]
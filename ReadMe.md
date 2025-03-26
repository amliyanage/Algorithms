# **Searching & Sorting Algorithms in JavaScript** :mag:

## **Introduction**

This repository covers fundamental **searching** and **sorting** algorithms in JavaScript. It includes:

- **Binary Search (O(log n))**
- **Linear Search (O(n))**
- **Quick Sort (O(n log n))**
- **Bubble Sort (O(n²))**

Each algorithm is implemented with **detailed explanations** and optimized code.

---

## **1⃣ Binary Search (O(log n))**

### **How It Works?**

1. **Requires a sorted array**
2. **Finds the middle element**
3. **Compares with the target**
   - If **equal**, return the index
   - If **smaller**, search in the right half
   - If **greater**, search in the left half
4. **Repeats until found or search space is empty**

### **Implementation**

```javascript
function binarySearch(arr , target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        arr[mid] < target ? left = mid + 1 : right = mid - 1;
    }
    return -1; // Target not found
}

// Example Usage
const arr = [11, 12, 22, 25, 34, 64, 90];
console.log(binarySearch(arr, 22));  // Output: 2
console.log(binarySearch(arr, 100)); // Output: -1
```

✅ **Best for large sorted datasets**✅ **Time Complexity:** `O(log n)`

---

## **2⃣ Linear Search (O(n))**

### **How It Works?**

- **Iterates through each element**
- **Compares each element with the target**
- **If found, returns the index**
- **If not found, returns `-1`**

### **Implementation**

```javascript
function linearSearch(arr , target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1; // Target not found
}

// Example Usage
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(linearSearch(arr, 22));  // Output: 4
console.log(linearSearch(arr, 100)); // Output: -1
```

✅ **Simple but slower than Binary Search**✅ **Time Complexity:** `O(n)`

---

## **3⃣ Quick Sort (O(n log n))**

### **How It Works?**

1. **Selects a pivot element** (usually the last element)
2. **Divides array into two sub-arrays:**
   - Elements **less than pivot**
   - Elements **greater than pivot**
3. **Recursively sorts the sub-arrays**
4. **Merges sorted sub-arrays & pivot**

### **Implementation**

```javascript
function quickSort (arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = arr.filter(el => el < pivot);
    let right = arr.filter(el => el > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example Usage
console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));  
// Output: [ 11, 12, 22, 25, 34, 64, 90 ]
```

✅ **Efficient for large datasets**✅ **Time Complexity:** `O(n log n)`

---

## **4⃣ Bubble Sort (O(n²))**

### **How It Works?**

1. **Repeatedly swaps adjacent elements** if they are in the wrong order
2. **After each pass, the largest element moves to the right**
3. **Repeats until the array is sorted**

### **Implementation**

```javascript
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

// Example Usage
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));  
// Output: [ 11, 12, 22, 25, 34, 64, 90 ]
```

✅ **Simple but inefficient for large datasets**✅ **Time Complexity:** `O(n²)`

---

## **:clipboard: Algorithm Comparison**

| Algorithm         | Best Case    | Average Case | Worst Case | Best For                        |
| ----------------- | ------------ | ------------ | ---------- | ------------------------------- |
| **Binary Search** | `O(1)`       | `O(log n)`   | `O(log n)` | Fast search in sorted data      |
| **Linear Search** | `O(1)`       | `O(n)`       | `O(n)`     | Small or unsorted data          |
| **Quick Sort**    | `O(n log n)` | `O(n log n)` | `O(n²)`    | Large datasets, general sorting |
| **Bubble Sort**   | `O(n)`       | `O(n²)`      | `O(n²)`    | Small datasets, simple sorting  |

---

## **:bulb: Summary**

✅ **Use Binary Search** when searching in a sorted array for efficiency✅ **Use Quick Sort** for efficient sorting on large datasets✅ **Use Bubble Sort** only for small datasets due to inefficiency✅ **Use Linear Search** for unsorted data

---

## **:rocket: Real-World Applications**

🔹 **Binary Search**: Searching in databases, autocomplete suggestions🔹 **Linear Search**: Looking up unsorted lists, simple search tasks🔹 **Quick Sort**: Sorting large datasets, e-commerce product sorting🔹 **Bubble Sort**: Teaching basic sorting concepts, small-scale sorting

---

## **:zap: Final Thoughts**

- **Binary Search is the fastest search method but requires a sorted array**
- **Quick Sort is better than Bubble Sort for large arrays**
- **Bubble Sort is mainly for educational purposes**

---

### **:star: Happy Coding! :computer: :rocket:**

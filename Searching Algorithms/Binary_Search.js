// Binary Search (O(log n))

function binarySearch(arr , target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        arr[mid] < target ? left = mid + 1 : right = mid - 1;
    }
    return -1;
}

const arr = [11, 12, 22, 25, 34, 64, 90];
console.log(binarySearch(arr, 22)); // 2
console.log(binarySearch(arr, 100)); // undefined
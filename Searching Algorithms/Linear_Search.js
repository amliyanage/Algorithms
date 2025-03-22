// Linear Search (O(n))

function linearSearch(arr , target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1; // target not found
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(linearSearch(arr, 22)); // 4
console.log(linearSearch(arr, 100)); // -1

// Checks each element one by one.
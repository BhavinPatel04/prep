/**
 * #### Merge Sort
 * - Divide & Conquer algo
 * - Recursive algo
 * - Stable algo
 * - Not in-place
 * - Divides the input array recursively in 2 halves 
 *   till the size becomes 1 and calls itself over the 2 halves
 * - Time Complexity -> O(nlogn)
 * - Space Complexity -> O(n) -> Reason why quickSort is practical 
 *   in most cases
 */
// Split the array into halves and merge them recursively 
function mergeSort (arr) {
    if (arr.length < 2) {
      // return once we hit an array with a single item
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
}
  
// compare the arrays item by item and return the concatenated result
function merge (left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.time("Time Taken");
console.log("Sorted Array", mergeSort([])) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
console.timeEnd("Time Taken");
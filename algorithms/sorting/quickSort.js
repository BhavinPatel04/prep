/**
 * #### Quick Sort
 * - Divide & Conquer Algo
 * - Picks an element as pivot and partitions the input array
 *   around the pivot
 * ## Limitations (When this is impractical)
 * - If we need to sort a linked list, Merge Sort would be preferred
 * - If the data is so huge that it has to be on external disk, Merge Sort is preferred
 */
function quickSort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {
        let left = [];
        let right = [];
        let newArray = [];
        const pivot = origArray.pop();

        for (let i = 0; i < origArray.length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.time("Time Taken");
console.log("Sorted Array", quickSort(inputArray)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
console.timeEnd("Time Taken");
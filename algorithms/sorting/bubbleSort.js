/**
 * #### Bubble Sort
 * - Sorted by repeatedly swapping the adjacent elements if they
 *   are in wrong order
 * - Stops when it gets a whole pass without swapping
 * - (Smart check) All this does is moves the highest element
 *   at the last and second highest to second last and so on
 *   (Useful for Recursion)
 * - Time Complexity -> O(n^2)
 * - In-place & stable
 */

const { swap } = require('../../utils');

function bubbleSort(arr) {
    const len = arr.length;
    let sorted = true;
    for (var i = len-1; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        if (arr[j-1] > arr[j]) {
          swap(arr, j-1, j);
          sorted = false;
        }
      }
      if (sorted) break; // this will avoid redundant passes if array is already sorted
    }
    return arr;
};

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Sorted Array", bubbleSort(inputArray)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
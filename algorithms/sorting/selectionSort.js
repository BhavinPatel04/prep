/**
 * #### Selection Sort
 * - Sorts by repeatedly finding the minimum element from the 
 *   unsorted part and putting it at the beginning
 * - Given array is divided in 2 parts - sorted & unsorted
 * - Time Complexity -> O(n^2)
 */

const { swap } = require('../../utils');

function selectionSort(arr){
    var minIdx, 
        len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var j = i+1; j<len; j++){
         if(arr[j]<arr[minIdx]){
            minIdx = j; 
         }
      }
      swap(arr, i, minIdx);
    }
    return arr;
};

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Sorted Array", selectionSort(inputArray)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
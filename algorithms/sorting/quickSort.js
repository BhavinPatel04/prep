/**
 * #### Quick Sort
 * - Divide & Conquer Algo
 * - In-place
 * - Picks an element as pivot and partitions the input array
 *   around the pivot
 * - Time Complexity -> O(n^2) - Despite this, it is pretty fast & efficient
 *   Worst case is always avoided by using Randomized version of QuickSort (choosing pivot at random)
 * - Space Complexity -> O(1)
 * ##### Limitations (When this is impractical)
 * - If we need to sort a linked list, Merge Sort would be preferred
 * - If the data is so huge that it has to be on external disk, Merge Sort is preferred
 */

const { swap } = require('../../utils');
// import { swap } from '../../utils';

function getPIndex(inputArray, start, end) {
    const pivot = inputArray[end];
    let pIndex = start;
    for(let i=start; i<end; i++) {
        if(inputArray[i] < pivot) {
            swap(inputArray, i, pIndex);
            pIndex++;
        };
    };
    swap(inputArray, pIndex, end);
    return pIndex;
};

function quickSort(inputArray, start, end) {
    if(start === undefined) start = 0;
    if(end === undefined) end = inputArray.length-1;

    if(start < end) {
        const pIndex = getPIndex(inputArray, start, end);
        quickSort(inputArray, start, pIndex-1);
        quickSort(inputArray, pIndex+1, end);
    };

    return inputArray;
};

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.time("Time Taken");
console.log("Sorted Array", quickSort(inputArray)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
console.timeEnd("Time Taken");
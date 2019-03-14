/**
 * #### Insertion Sort
 * - Playing cards 
 * - Given array is divided in 2 parts - sorted & unsorted
 * - Time Complexity -> O(n^2)
 */
function insertionSort(arr){
  var i, len = arr.length, el, j;

  for(i = 1; i<len; i++) {
    el = arr[i];
    j = i;

    while(j>0 && arr[j-1]>el) {
      arr[j] = arr[j-1];
      j--;
    }
  
    arr[j] = el;
  }

  return arr;
};

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Sorted Array", insertionSort(inputArray)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
/**
 * #### Selection Sort
 * - Sorts by repeatedly finding the minimum element from the 
 *   unsorted part and putting it at the beginning
 */
function selectionSort(arr){
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
         if(arr[j]<arr[minIdx]){
            minIdx = j;
         }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
};

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Sorted Array", selectionSort(inputArray)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
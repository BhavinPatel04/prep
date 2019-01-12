/**
 * #### Bubble Sort
 * - Sorted by repeatedly swapping the adjacent elements if they
 *   are in wrong order
 * - Stops when it gets a whole pass without swapping
 * - (Smart check) All this does is moves the highest element
 *   at the last and second highest to second last and so on
 *   (Useful for Recursion)
 */
function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
};

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Sorted Array", bubbleSort(inputArray)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
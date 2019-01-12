/**
 * #### Heap Sort
 * - Comparison based sorting technique based on Binary Heap
 *   data structure
 * - Similar to Selection Sort where we find the maximum element
 *   and place the maximum element at the end
 * 
 * ## Binary Heap
 * - Complete Binary Tree - Binary tree in which entry level nodes,
 *   except possibly the last node, is completely filled, and all
 *   nodes are as far as possible
 * - Binary Heap is a Complete Binary tree where items are stored
 *   in a special order such that parent node is greater (max heap)
 *   and 
 */
function heapSort(arr){
    var len = arr.length,
        end = len-1;
  
    heapify(arr, len);
    
    while(end > 0){
     swap(arr, end--, 0);
     shiftDown(arr, 0, end);
    }
    return arr;
};

function heapify(arr, len){
    // break the array into root + two sides, to create tree (heap)
    var mid = Math.floor((len-2)/2);
    while(mid >= 0){
     shiftDown(arr, mid--, len-1);    
   }
};

function shiftDown(arr, start, end){
    var root = start,
        child = root*2 + 1,
        toSwap = root;
    while(child <= end){
       if(arr[toSwap] < arr[child]){
         swap(arr, toSwap, child);
       }
       if(child+1 <= end && arr[toSwap] < arr[child+1]){
         swap(arr, toSwap, child+1)
       }
       if(toSwap != root){
          swap(arr, root, toSwap);
          root = toSwap;
       }
       else{
          return; 
       }
       toSwap = root;
       child = root*2+1
   }
};

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.time("Time Taken");
console.log("Sorted Array", heapSort(inputArray)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
console.timeEnd("Time Taken");
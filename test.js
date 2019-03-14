function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  let minIndex, arrLength = arr.length;

  for(let i=0; i<arrLength; i++) {
    minIndex = i;
    for(let j=i+1; j<arrLength; j++) {
      if(arr[j] < arr[minIndex]) minIndex = j;
    }
    swap(arr, i, minIndex);
  }
  return arr;
};

function bubbleSort(arr) {
  let arrLength = arr.length, sorted = true;

  for(let i=arrLength-1; i>=0; i--) {
    for(let j=1; j<=i; j++) {
      if(arr[j-1] > arr[j]) {
        swap(arr, j-1, j);
        sorted = false;
      }
    }
    if(sorted) break;
  }
  return arr;
};

function insertionSort(arr) {
  let arrLength = arr.length, el;

  for(let i=1; i<arrLength; i++) {
    el = arr[i];
    let j = i;

    while(j>0 && arr[j-1]>el) {
      swap(arr, j-1, j);
      j--;
    };
    arr[j] = el;
  };
  return arr;
};

function mergeSort(arr) {
  if(arr.length == 1) return arr;

  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length) {
    if(left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};


function quickSort(arr, start, end) {
  if(!start) start = 0;
  if(!end) end = arr.length - 1;
  if(start > end) return;

  const pIndex = getPartionIndex(arr, start, end);
  quickSort(arr, start, pIndex-1);
  quickSort(arr, pIndex+1, end);
};

function getPartionIndex(arr, start, end) {
  const pivot = arr[end];
  let pIndex = start;

  for(let i=start; i<=end; i++) {
    if(arr[i] < pivot) {
      swap(arr, i, pIndex);
      pIndex++;
    }
  };
  swap(arr, pIndex, end);
  return arr;
}


let inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Selection Sorted Array", selectionSort(inputArray));
inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Bubble Sorted Array", bubbleSort(inputArray));
inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Insertion Sorted Array", insertionSort(inputArray));
inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Merge Sorted Array", mergeSort(inputArray));
inputArray = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log("Input Array", inputArray);
console.log("Quick Sorted Array", mergeSort(inputArray, undefined, undefined));

// Binary Search Tree
class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if(!this.root) {
      this.root = newNode;
      return;
    }

    let root = this.root;

    while(root) {
      if(newNode.value < root.value) {
        if(!root.left) {
          root.left = newNode;
          break;
        }
        root = root.left;
      } else {
        if(!root.right) {
          root.right = newNode;
          break;
        }
        root = root.right;
      }
    }
  };

  remove(value, root) {
    if(!this.root) return null;

    if(!root) {
      this.root = this.remove(value, this.root);
    } else if(value < root.value && root.left) {
      root.left = this.remove(value, root.left);
    } else if(value > root.value && root.right) {
      root.right = this.remove(value, root.right);
    } else if(value == root.value) {
      if(root.left && root.right) {
        root.value = findMinNode(root.right);
        root.right = this.remove(root.value, root.right);
      } else {
        root = root.left || root.right;
      }
    }

    function findMinNode(node) {
      if(node.left == null) return node.value;
      else return findMinNode(node.left);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.remove(4);
bst.remove(45);
console.log('BST', bst.root);

// Graph = Adjacency List
const Queue = require("./data-structures/linear/queue");

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(s, d) {
    this.adjList.get(s).push(d);
    this.adjList.get(d).push(s);
  }

  printGraph() {
    const keys = this.adjList.keys();

    for(let k of keys) {
      const edges = this.adjList.get(k);
      let valueStr = '';
      for(let e of edges) {
        valueStr += `${e}`;
      }
      console.log(`${k} ->`, valueStr);
    }
  }

  bfs(startingNode) {
    if(!startingNode) return;

    let visited = [];
    const keys = this.adjList.keys();

    for(let k of keys) {
      visited[k] = false;
    }
    
    const q = new Queue();
    visited[startingNode] = true;
    q.enqueue(startingNode);

    while(!q.isEmpty()) {
      const queueItem = q.dequeue();
      console.log(queueItem);
      const list = this.adjList.get(queueItem);
      for(let l of list) {
        if(!l) continue;
        if(visited[l]) continue;
        visited[l] = true;
        q.enqueue(l);
      }
    };
  }

  dfs(startingNode) {
    if(!startingNode) return;
    const visited = [];
    const keys = this.adjList.keys();
    
    for(let k of keys) {
      visited[k] = false;
    }
    this.DFSUtil(startingNode, visited);
  }

  DFSUtil(node, visited) {
    visited[node] = true;
    console.log(node);
    const list = this.adjList.get(node);
    for(let l of list) {
      if(!l) continue;
      if(visited[l]) continue;
      this.DFSUtil(l, visited);
    }
  }
}

const g = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
vertices.forEach(v => g.addVertex(v));
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 
console.log("Graph"); 
g.printGraph();
console.log("BFS"); 
g.bfs('A'); 
console.log("DFS"); 
g.dfs('A'); 

// Hash Table
function getHashVal(val) {
  if(!val) throw 'Value might be null';
  let hashVal = 0;
  val.split("").forEach(v => {
    hashVal += v.charCodeAt();
  });
  return hashVal;
}

class HashTable {
  constructor() {
    this.list = [];
  };

  get(x) {
    const hashVal = getHashVal(x);
    let val = this.list[hashVal];
    if(Array.isArray(val)) {
      val.forEach((v, i) => {
        if(i == getHashVal(x+i)) {
          val = v;
        }
      });
    }
    return val;
  };

  set(x, y) {
    let val = this.list[getHashVal(x)];
    if(val) {
      if(!Array.isArray(val)) {
        const _val = val;
        val = [];
        val[getHashVal(x+val.length)] = _val;
      } 
      val[getHashVal(x+val.length)] = y;
    } else {
      this.list[getHashVal(x)] = y;
    }
  }
}

const ht = new HashTable();
ht.set('a', 1);
ht.set('b', 2);
console.log('HashTable Result', ht.get('a'));

function binarySearch(value, arr, start, end) {
  if(value == null || value == undefined) return `Value cannot be undefined or null`;
  if(!arr.length) return `Array cannot be empty`;
  if(arr.length == 1) return (arr[0] == value) ? true : false;
  if(start == null || start == undefined) start = 0;
  if(end == null || end == undefined) end = arr.length - 1;
  if(start > end) return `Start cannot be larger than end`;

  // Recursive
  const middle = Math.floor((start + end)/2);
  if(value == arr[middle]) {
    return true;
  }if(value < arr[middle]) {
    return binarySearch(value, arr, start, middle-1);
  } else if(value > arr[middle]){
    return binarySearch(value, arr, middle+1, end);
  }

  // Iterative
  while(value !== arr[middle] && start < end) {
    if(value < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end)/2)
  }
  return arr[middle] == value ? true : false;
}

inputArray = [1, 2, 3, 4, 5, 6];
console.log('Binary Search', binarySearch(4, inputArray, 0, inputArray.length - 1));

// Add 1 to given array
inputArray = [9, 9, 9];
function addOne(arr) {
  if(!arr || !arr.length) return null;

  let carry = 1;
  for(let i=arr.length-1; i>=0; i--) {
    let val = arr[i] + carry;
    carry = (val > 9) ? 1 : 0;
    arr[i] = val % 10;
  }

  if(carry) arr = [1, ...arr];
  return arr;
};
console.log(`Add One`, addOne(inputArray));

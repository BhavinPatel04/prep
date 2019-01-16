# Tree
Tree can defined as a collection of entities called nodes linked together to simulate hierarchy.
It can also be defined recursively as a structure that consists of distingushed node root and some sub-trees and the arrangement is such that root of the tree contains link to roots of all sub-trees 

- Non-linear data structure
- Hierarchical structure
- Nodes are connected to each other by Undirectional links (edges)
- Top most node is called Root
- Each node contains data and can be of any type
- Each node may contain link or reference to some other nodes that can be called its       children
- Nodes with same Parent are called Siblings
- Any node that does not have a child is called Leaf node
- Any node with atleast 1 child can be called Internal node
- If we can go from `A----->B`, then A is ancestor of B and B is descendant of A
- In a Tree with n nodes, there will be exactly n-1 edges
- All nodes except Root node will have exactly 1 incoming edge.
  There will be one link for each parent-child relationship

## Depth & Height
### Depth
Depth can be defined as length of path from Root to x (someNode).
It can also be defined as number of edges in path from Root to x

- Depth of Root node will be 0

### Height
Height can be defined as number of edges in the longest path from x to a Leaf node

- Height of a Leaf node is 0
- Height of Tree == Height of Root node
- Height of an empty Tree == -1
- Height of a Tree with 1 node == 0
- Try to keep a Tree Balanced to make sure its Dense and its height minimized
- If height is minimized, cost of various operations that depend of height are minimized

## Applications
- Storing naturally heirarchical data -> Eg. File System
- Organize data for quick search, insertion, deletion -> Eg. Binary   Search Tree
- Trie -> Eg. Dictionary
- Network routing algorithm

## Types of Tree
### Binary Tree
A Tree in which a node can have at most 2 children

Note:
````
h = height
l = level
n = nodes
hLeft = height of left subtree
hRight = height of right subtree
````

- If a Tree has only one node, then its a Binary Tree
- Maximum number of nodes at any `level l = 2^l`
- Maximum number of nodes in a Tree with `height h = 2^(h + 1) - 1`
  - h + 1 == no. of levels
  - If h = 4, max. nodes in a Tree = 2^4 - 1 = 15
- <b>Time Complexity:</b> `O(h)`
- Binary Tree can be implemented using:
  - Dynamically created nodes
  - Arrays
    - Store the nodes in an array from left to right by level
    - Used to implement Heaps

### Strict/Proper Binary Tree
A Binary Tree is a Strict/Proper Binary Tree if each node has either 2 or 0 children

### Complete Binary Tree
A Binary Tree is a Complete Binary Tree if all levels except possibly the last level are completely filled and all nodes are as far left as possible

- Min. height = (floor) log n(to base 2)
- Max. height = n - 1
- <b>Time Complexity:</b>
  - Best: `O(log n(to base 2))`
  - Worst: `O(n)`
- For Binary Tree implementation using Arrays
  - For node at index i
    - left-child-index = 2i + 1
    - right-child-index = 2i + 2

### Perfect Binary Tree
A Binary Tree is a Perfect Binary Tree if all levels are completely filled

- Height of a Perfect Binary Tree == Max. Depth of a Perfect Binary Tree
- Perfect Binary Tree will have max. no. of nodes for a height h
- For nodes n, the height of the Perfect Binary Tree would be:
  - ````
    n = 2^(h + 1) - 1;
    n + 1 = 2^(h + 1);
    h = log (n + 1)(to base 2) - 1;
    ````
- <b>Time Complexity:</b>
  - Best: `O(log n(to base 2))`
  - Worst: `O(n)`

### Balanced Binary Tree
A Binary Tree is a Balanced Binary Tree if for each node, the difference between height of left and right subtree for every node is not more than k (mostly 1)
`diff = | hLeft - hRight |`

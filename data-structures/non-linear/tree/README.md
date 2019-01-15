# Tree
Tree can defined as a collection of entities called nodes linked together to simulate hierarchy.
It can also be defined recursively as a structure that consists of distingushed node root and some sub-trees and the arrangement is such that root of the tree contains link to roots of all sub-trees 

- Non-linear data structure
- Hierarchical structure
- Nodes are connected to each other by Undirectional links (edges)
- Top most node is called Root
- Each node contains data and can be of any type
- Each node may contain link or reference to some other nodes that    can be called its children
- Nodes with same Parent are called Siblings
- Any node that does not have a child is called Leaf node
- Any node with atleast 1 child can be called Internal node
- If we can go from `A----->B`, then A is ancestor of B and B is      descendant of A
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

## Applications
- Storing naturally heirarchical data -> Eg. File System
- Organize data for quick search, insertion, deletion -> Eg. Binary   Search Tree
- Trie -> Eg. Dictionary
- Network routing algorithm

## Types of Tree
### Binary Tree
A tree in which a node can have at most 2 children
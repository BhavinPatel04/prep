# Graph
- Graph is a data structure used to store data just like all data
  structures
- Graph can be defined as an ordered pair of set `v` of vertices   (node) and set of edges (link) `e`
  `G = (v, e)`
  - Ordered Pair:
    - Representation: `(u, v)`
    - Order matters
    - `(u, v) != (v, u) if(u != v)`
  - Unordered Pair:
    - Representation: `{u, v}`
    - Order does not matter
    - `{u, v} == {y, u}`
  - Directed Edge:
    - Representation: `u----->v`
    - Used in Ordered Pair `(u, v)`
  - Undirected Edge:
    - Representation: `u------v`
    - Used in Unordered Pair `{u, v}`

## Directed & Undirected Graph
### Directed graph (Digraph):
  - Will only have Directed Edge
  - Example: 
    - Interlinked webpages on internet
      - A page is connected to B by mentioning a link to B in A
      - B page is connected to C by mentioning a link to C in B
      - A to B is a Directed Edge since A is connected to B      but not vice versa, unless B has a link to A in it
        If B has link a to A, the connection would be
        `A----->B && B----->A` and NOT `A-----B`
      - Web Crawling
        - Web Crawling is a standard graph theory algorithm      that can be applied
        - Web Crawling is a graph traveral technique (act of     visiting all nodes in a graph)
        - Search engines use a program (Web Crawler) to          collect and store data about web pages
        - Search Engines then use this data to provide data      against search queries
    - Intercity roads
      - Since a city will have many one-ways
### Undirected Graph:
  - Will only have Undirected Edge
  - Example:
    - Social Network
      - It only has Undirected Edge since if A is friend of B    then obviously B is friend of A
      - Use Case: Suggest Friends to A
        - `A-----B, A-----D, B-----C, D-----F`
        - It will suggest friends of all nodes connected to A    except A obviously (`C && F`)

## Weighted & Unweighted Graphs 
### Weighted Graph:
  - Representation: `A--4--B`
  - Can be distance, 
  - Used to calculate shortest distance between nodes
### Unweighted Graph:
  - Representation: `A-----B`
  - All connections treated as equal
  - Unweighted Graph is a Weighted Graph whith unit 1; `A--1--B`

## Edges
### Self loop (Self-edge):
  - When both vertices of edge are same
  - Why would we have it?
    - Webpage can have link to itself in it
### Multi-edge
  - Two nodes are connected by multiple edges
  - Why would we have it?
    - 2 destinations can have multiple flights connecting them     but with different properties (price, time, etc.)

- <b>Question:</b> 4 vertices. Max number of edges?
  - Min possible: 0
  - Max possible (only if its a Simple Graph): 
    - Directed => n(n - 1) -> 4(4 - 1) = 12
    - Undirected => (n(n - 1)) / 2 => (4(4 - 1)) / 2 = 6

### Simple Graph
No Self loop and Multi-edge
### Dense Graph
Too many edges
### Sparse Graph
Too few edges

## Path (Walk)
Path can be defined as a sequence of vertices where each adjacent pair is connected by an edge.

### Simple Path
A Path(Walk) in which vertices and edges are not repeated. Most of times when we say Path, we mean Simple Path. So, if repetition is possibel, Path is called a Walk

### Trail
A Walk in which vertices can be repeated but edges cannot be repeated
````
If there is Walk in which vertices and edges are repeated, then there has to be a Simple Path in it.
````

### Closed Walk
A Walk which starts and ends at same vertex and length of Walk > 0
Length of a Walk is the number of Edges in a Walk.

### Simple Cycle (Cycle)
A Closed Walk in which other than start & end vertex, no other vertices are repeated

### Acyclic Graph
A Graph with no Cycle
#### Undirected Acyclic Graph
A Tree with undirected edges would be a 
#### Directed Acyclic Graph (DAG)


### Strongly Connected Graphs
If there is a Path from any vertex to any other vertex
- Undirected Graph(`-----`) -> called Connected Graph
- Directed Graph(`----->`) -> called Strongly Connected Graph
- If a Directed Graph is <b>not</b> strongly connected but can     be turned into Connected by treating all it edges as             Unidrected, then such a Directed Graph is called Weakly          Connected Graph
    
## Implementing a Graph
Below techniques will judged on
  - Space complexity - Memory usage
  - Time Complexity - Example: How much time does it take to get   adjacent nodes of a node

#### Use case
Create a logical structure of Graph in computer's memory
  - Graph is a set(list) of vertices and edges
  - Create 2 lists for vertices and edges

#### Notes
- Max edges in a Undirected Graph => (n(n - 1)) / 2 ~= n^2 / 2

### Technique: Edge List (Expensive technique)
Using Undirected Weighted Graph
````
let vertexList = ['A', 'B', 'C'];
let edgeList = [['A', 'B', 4], ['A', 'C', 5], ['B', 'C', 6]];
//its an Undirected Graph, so no need to store both the Edges
/**
 * The name of the node can be really big
 * Space complexity for vertices => O(|v|) or O(n)
 */
/** Simplify edge list. Store index of vertex instead of storing  * the name again
 */
let edgeList = [[0, 1, 4], [0, 2, 5], [1, 2, 6]];
//Space complexity for edges => O(|e|)
````
<b>Space Complexity:</b>
- Space complexity for Graph => O(|v| + |e|) (Best way to store * a graph in            computer's memory)

<b>Time Complexity:</b>
- Time complexity for Graph => O(|e|) (Since it will have to do Linear Search and       scan all the items in edgeList)
- O(|e|) =  O(|v| * |v|) -> Costly
- O(|v|) -> OK

####Conclusion
This technique is time costly

### Adjacency Matrix
- Store the edges in a 2-dimensional array
- Solve the time complexity issue in Edge List 
- Uses Undirected Unweighted Graph
````
let vertexList = ['A', 'B', 'C'];
// 2 dimensional edge array
let edgeList = [[0, 1, 1], [1, 0, 1], [1, 1, 0]];
/**
 * - Undirected Graph will always result in symmetric matrix
 * - Weighted Graph would be: 
 *   let edgeList = [[infinity, 4, 2], [5, infinity, 2], [8, 5, infinity]];
 *   'infinity' because, it will never ever be a valid edge weight
 */
````
<b>Space Complexity:</b>
- Space complexity has increases very much -> O(|v| * |v|)
- The nodes which are not connected are also being stored, which are redundant
- This is fine if it is Dense Graph, but for Spare Graph lot of memory is wasted

<b>Time Complexity:</b>
- Time Complexity for Graph -> O(|v|) + O(|v|)
- To get index of vertex from the vertexList -> O(|v|)
- To get adjacent nodes of a node, scan the array at index of the vertex in edgeList    -> O(|v|)
- If we know the index of all vertices, we can scan the edgeList in constant time,      meaning Time Complexity -> O(1)
- This is can be done by using some extra memory and hashTable

#### Conclusion
This technique is space costly and not always efficient. It is good only for Dense Graph or if v^2 is too less to matter.

### Adjacency List
- Store the adjacent nodes index in a 2-dimensional array.
- Solve the Space Complexity
- Uses Undirected Unweighted Graph
````
let vertexList = ['A', 'B', 'C'];
let edgeList = [[1, 2], [0, 2], [0, 1]];
````
<b>Space Complexity:</b>
- O(|e|)

<b>Time Complexity:</b>
- Linear Search: O(|v|)
- Binary Search: O(log v) (edgeList items need to be sorted. Sorting is expensive)


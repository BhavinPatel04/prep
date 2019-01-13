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
- Directed graph (Digraph):
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
- Undirected Graph:
  - Will only have Undirected Edge
  - Example:
    - Social Network
      - It only has Undirected Edge since if A is friend of B    then obviously B is friend of A
      - Use Case: Suggest Friends to A
        - `A-----B, A-----D, B-----C, D-----F`
        - It will suggest friends of all nodes connected to A    except A obviously (`C && F`)

## Weighted & Unweighted Graphs 
- Weighted Graph:
  - Representation: `A--4--B`
  - Can be distance, 
  - Used to calculate shortest distance between nodes
- Unweighted Graph:
  - Representation: `A-----B`
  - All connections treated as equal
  - Unweighted Graph is a Weighted Graph whith unit 1; `A--1--B`

## Edges
- Self loop (Self-edge):
  - When both vertices of edge are same
  - Why would we have it?
    - Webpage can have link to itself in it
- Multi-edge
  - Two nodes are connected by multiple edges
  - Why would we have it?
    - 2 destinations can have multiple flights connecting them     but with different properties (price, time, etc.)

- <b>Question:</b> 4 vertices. Max number of edges?
  - Min possible: 0
  - Max possible (only if its a Simple Graph): 
    - Directed => n(n - 1) -> 4(4 - 1) = 12
    - Undirected => (n(n - 1)) / 2 => (4(4 - 1)) / 2 = 6

- Simple Graph: No Self loop and Multi-edge
- Dense Graph: Too many edges
- Sparse Graph: Too few edges

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
- A Tree with undirected edges would be a Undirected Acyclic Graph


### Strongly Connected Graphs
If there is a Path from any vertex to any other vertex
- Undirected Graph(`-----`) -> called Connected Graph
- Directed Graph(`----->`) -> called Strongly Connected Graph
- If a Directed Graph is <b>not</b> strongly connected but can     be turned into Connected by treating all it edges as             Unidrected, then such a Directed Graph is called Weakly          Connected Graph
    
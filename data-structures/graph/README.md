#### Graph
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
- 2 types of Graph: Directed & Undirected
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
- Weighted & Unweighted Graphs
  - Weighted Graph:
    - Representation: `A--4--B`
    - Can be distance, 
    - Used to calculate shortest distance between nodes
  - Unweighted Graph:
    - Representation: `A-----B`
    - All connections treated as equal
    - Unweighted Graph is a Weighted Graph whith unit 1; `A--1--B`


    
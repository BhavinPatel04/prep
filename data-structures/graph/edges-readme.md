## Edges
- Self loop (Self-edge):
  - When both vertices of edge are same
  - Why would we have it?
    - Webpage can have link to itself in it
- Multi-edge
  - Two nodes are connected by multiple edges
  - Why would we have it?
    - 2 destinations can have multiple flights connecting them     but with different properties (price, time, etc.)

- #Question: 4 vertices. Max number of edges?
  - Min possible: 0
  - Max possible (only if its a Simple Graph): 
    - Directed => n(n - 1) -> 4(4 - 1) = 12
    - Undirected => (n(n - 1)) / 2 => (4(4 - 1)) / 2 = 6

- Simple Graph: No Self loop and Multi-edge
- Dense Graph: Too many edges
- Sparse Graph: Too few edges
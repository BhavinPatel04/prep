/**
 * #### Graph using adjancency list
 * - Represented using Adjacency list
 * - Undirected graph
 * - Traversal Algorithms - BFS & DFS
 */

const Queue = require("../../linear/queue");

class Graph {
    // define vertices & adj list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    };

    addVertex(v) {
        this.adjList.set(v, []);
    };

    addEdge(s, d) {
        this.adjList.get(s).push(d);
        this.adjList.get(d).push(s); //since graph is undirected
    };

    printGraph() {
        let keys = this.adjList.keys();

        for(let k of keys) {
            let values = this.adjList.get(k);
            let valueStr = '';

            for(let v of values) {
                valueStr += `${v} `;
            }

            console.log(`${k} -> ${valueStr}`);
        }
    };

    bfs(startingNode) {
        if(!startingNode) return;

        let visited = [];
        for(let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        };
        let q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);

        while (!q.isEmpty()) { 
            // get the element from the queue 
            var getQueueElement = q.dequeue(); 
      
            // passing the current vertex to callback funtion 
            console.log(getQueueElement); 
      
            // get the adjacent list for current vertex 
            var list = this.adjList.get(getQueueElement); 
      
            // loop through the list and add the item to the 
            // queue if it is not processed yet 
            for (var i in list) { 
                var item = list[i]; 
                
                if(!item) return;

                if (!visited[item]) { 
                    visited[item] = true; 
                    q.enqueue(item); 
                } 
            } 
        } 
    };

    dfs(startingNode) {
        let visited = [];
        for(let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        };

        this.DFSUtil(startingNode, visited);
    };

    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);

        let list = this.adjList.get(vert);
        for(let i in list) {
            let item = list[i];
            if(!visited[item]) {
                this.DFSUtil(item, visited);
            }
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
g.printGraph();
console.log("BFS"); 
g.bfs('A'); 
console.log("DFS"); 
g.dfs('A'); 
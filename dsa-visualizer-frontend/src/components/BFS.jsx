import { createGraphVisualizer } from '../visualizations/graphFactory';

const generateSteps = (graph) => {
  const steps = [];
  const visited = new Set();
  const queue = [graph.nodes[0]];
  visited.add(graph.nodes[0]);

  steps.push({ nodes: graph.nodes, visited: [], current: graph.nodes[0], description: `Start BFS from ${graph.nodes[0]}`, pseudocodeLine: 1 });

  while (queue.length) {
    const current = queue.shift();
    steps.push({ nodes: graph.nodes, visited: Array.from(visited), current, description: `Dequeue ${current}`, pseudocodeLine: 3 });

    const neighbors = graph.edges.filter(([u,v]) => u === current || v === current).map(([u,v]) => u === current ? v : u);
    for (const nb of neighbors) {
      if (!visited.has(nb)) {
        visited.add(nb);
        queue.push(nb);
        steps.push({ nodes: graph.nodes, visited: Array.from(visited), current: nb, description: `Enqueue neighbor ${nb}`, pseudocodeLine: 5 });
      }
    }
  }
  steps.push({ nodes: graph.nodes, visited: Array.from(visited), result: Array.from(visited), description: `BFS order: ${Array.from(visited).join(',')}` });
  return steps;
};

export default createGraphVisualizer({
  title: "BFS on Graph",
  pseudocodeLines: [
    "procedure BFS(graph, start):",
    "  visited = set(), queue = [start]",
    "  while queue not empty:",
    "    node = queue.shift()",
    "    for neighbor in graph[node]:",
    "      if neighbor not in visited:",
    "        visited.add(neighbor); queue.push(neighbor)",
    "  return visited"
  ],
  generateSteps,
  complexity: { time: 'O(V+E)', space: 'O(V)' }
});
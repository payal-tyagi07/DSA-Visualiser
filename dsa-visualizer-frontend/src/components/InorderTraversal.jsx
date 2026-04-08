import { createTreeVisualizer } from '../visualizations/treeFactory';

const generateSteps = (treeArray) => {
  const steps = [];
  const result = [];
  const stack = [];
  let node = 0; // index of root
  steps.push({ array: treeArray, description: "Start inorder traversal", pseudocodeLine: 1 });

  while (stack.length > 0 || node < treeArray.length && treeArray[node] !== null) {
    while (node < treeArray.length && treeArray[node] !== null) {
      stack.push(node);
      steps.push({ array: treeArray, highlight: [node], description: `Push node ${treeArray[node]}, go left`, pseudocodeLine: 3 });
      node = 2 * node + 1;
    }
    node = stack.pop();
    result.push(treeArray[node]);
    steps.push({ array: treeArray, highlight: [node], description: `Visit ${treeArray[node]}, add to result`, pseudocodeLine: 4 });
    node = 2 * node + 2;
  }
  steps.push({ array: treeArray, result, description: `Inorder traversal: [${result.join(',')}]` });
  return steps;
};

export default createTreeVisualizer({
  title: "Binary Tree Inorder Traversal",
  pseudocodeLines: [
    "procedure inorder(root):",
    "  stack = []",
    "  while stack not empty or root not null:",
    "    while root not null:",
    "      stack.push(root); root = root.left",
    "    root = stack.pop(); visit(root); root = root.right"
  ],
  generateSteps,
  complexity: { time: 'O(n)', space: 'O(n)' }
});
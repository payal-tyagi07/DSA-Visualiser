import { createLinkedListVisualizer } from '../visualizations/linkedListFactory';

const generateSteps = (list) => {
  // We'll create a cycle for demonstration (optional)
  const steps = [];
  let slow = 0, fast = 0;
  steps.push({ array: list, slow, fast, description: "Start slow=0, fast=0", pseudocodeLine: 1 });

  while (fast < list.length && list[fast] !== null) {
    slow = slow + 1;
    fast = fast + 2;
    if (fast >= list.length) {
      steps.push({ array: list, slow, fast: null, description: "fast reached end → no cycle", pseudocodeLine: 4 });
      break;
    }
    steps.push({ array: list, slow, fast, description: `Move slow to ${slow}, fast to ${fast}`, pseudocodeLine: 3 });
    if (slow === fast) {
      steps.push({ array: list, slow, fast, result: true, description: "Cycle detected!", pseudocodeLine: 5 });
      return steps;
    }
  }
  steps.push({ array: list, result: false, description: "No cycle" });
  return steps;
};

export default createLinkedListVisualizer({
  title: "Detect Cycle (Floyd's Algorithm)",
  pseudocodeLines: [
    "procedure hasCycle(head):",
    "  slow = head, fast = head",
    "  while fast and fast.next:",
    "    slow = slow.next",
    "    fast = fast.next.next",
    "    if slow == fast: return true",
    "  return false"
  ],
  generateSteps,
  complexity: { time: 'O(n)', space: 'O(1)' }
});
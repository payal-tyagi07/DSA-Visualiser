import { createArrayVisualizer } from '../visualizations/arrayFactory';

const generateSteps = (arr, target = 10) => {
  const steps = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      steps.push({
        array: arr,
        highlight: [i, j],
        description: `Check arr[${i}] + arr[${j}] == ${target} (${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]})`,
        pseudocodeLine: 3
      });
      if (arr[i] + arr[j] === target) {
        steps.push({
          array: arr,
          highlight: [i, j],
          result: [i, j],
          description: `Found! Indices ${i} and ${j}`,
          pseudocodeLine: 4
        });
        return steps;
      }
    }
  }
  steps.push({ array: arr, description: "No pair found", result: [-1, -1] });
  return steps;
};

export default createArrayVisualizer({
  title: 'Two Sum',
  pseudocodeLines: [
    "procedure twoSum(arr, target):",
    "  for i = 0 to n-1:",
    "    for j = i+1 to n-1:",
    "      if arr[i] + arr[j] == target: return [i,j]",
    "  return [-1,-1]"
  ],
  generateSteps: (arr) => generateSteps(arr, 10),
  complexity: { time: 'O(n²)', space: 'O(1)' }
});
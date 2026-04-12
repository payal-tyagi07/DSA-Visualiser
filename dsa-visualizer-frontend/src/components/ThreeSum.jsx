import { createArrayVisualizer } from '../visualizations/arrayFactory';

const generateSteps = (arr) => {
  const steps = [];
  const target = 0;
  const sorted = [...arr].sort((a,b) => a-b);
  const result = [];
  steps.push({ array: arr, description: `Find triplets summing to ${target}`, pseudocodeLine: 1 });

  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i-1]) continue;
    let left = i+1, right = sorted.length-1;
    steps.push({ array: sorted, highlight: [i, left, right], description: `Fix a=${sorted[i]}, search in [${left},${right}]`, pseudocodeLine: 3 });
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum === target) {
        result.push([sorted[i], sorted[left], sorted[right]]);
        steps.push({ array: sorted, highlight: [i, left, right], description: `Found triplet [${sorted[i]},${sorted[left]},${sorted[right]}]`, pseudocodeLine: 5 });
        left++; right--;
        while (left < right && sorted[left] === sorted[left-1]) left++;
        while (left < right && sorted[right] === sorted[right+1]) right--;
      } else if (sum < target) {
        left++;
        steps.push({ array: sorted, highlight: [i, left, right], description: `sum < ${target} → increase left`, pseudocodeLine: 6 });
      } else {
        right--;
        steps.push({ array: sorted, highlight: [i, left, right], description: `sum > ${target} → decrease right`, pseudocodeLine: 7 });
      }
    }
  }
  steps.push({ array: sorted, result, description: `Triplets: [${result.map(t=>`[${t}]`).join(',')}]` });
  return steps;
};

export default createArrayVisualizer({
  title: "3Sum",
  pseudocodeLines: [
    "procedure threeSum(arr):",
    "  sort(arr)",
    "  result = []",
    "  for i = 0 to n-3:",
    "    if i>0 and arr[i]==arr[i-1]: continue",
    "    left=i+1, right=n-1",
    "    while left<right:",
    "      sum = arr[i]+arr[left]+arr[right]",
    "      if sum==0: add triplet; skip duplicates",
    "      else if sum<0: left++",
    "      else: right--",
    "  return result"
  ],
  generateSteps,
  complexity: { time: 'O(n²)', space: 'O(1)' }
});
import { createArrayVisualizer } from '../visualizations/arrayFactory';

const generateSteps = (n) => {
  const steps = [];
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  steps.push({ array: dp, description: `Ways to climb 0 stairs = 1, 1 stair = 1`, pseudocodeLine: 1 });

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
    steps.push({
      array: [...dp],
      highlight: [i],
      description: `ways[${i}] = ways[${i-1}] + ways[${i-2}] = ${dp[i-1]} + ${dp[i-2]} = ${dp[i]}`,
      pseudocodeLine: 3
    });
  }
  steps.push({ array: dp, result: dp[n], description: `Ways to climb ${n} stairs = ${dp[n]}` });
  return steps;
};

export default createArrayVisualizer({
  title: "Climbing Stairs",
  pseudocodeLines: [
    "procedure climbStairs(n):",
    "  if n <= 1: return 1",
    "  dp[0]=1, dp[1]=1",
    "  for i=2 to n: dp[i] = dp[i-1] + dp[i-2]",
    "  return dp[n]"
  ],
  generateSteps: (arr) => generateSteps(arr[0]),
  defaultArray: [5],
  complexity: { time: 'O(n)', space: 'O(n)' }
});
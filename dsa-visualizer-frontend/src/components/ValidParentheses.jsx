import { createStringVisualizer } from '../visualizations/stringFactory';

const generateSteps = (str) => {
  const steps = [];
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };
  let valid = true;

  steps.push({ string: str, description: "Start with empty stack", pseudocodeLine: 1 });

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
      steps.push({
        string: str,
        highlight: [i],
        description: `Push '${ch}', stack = [${stack.join(',')}]`,
        pseudocodeLine: 3
      });
    } else {
      if (stack.length === 0 || pairs[stack.pop()] !== ch) {
        valid = false;
        steps.push({
          string: str,
          highlight: [i],
          description: `Error: '${ch}' has no matching opening bracket`,
          pseudocodeLine: 5
        });
        break;
      } else {
        steps.push({
          string: str,
          highlight: [i],
          description: `Pop '${stack[stack.length-1]}', matches '${ch}'`,
          pseudocodeLine: 6
        });
      }
    }
  }

  if (valid && stack.length !== 0) valid = false;
  steps.push({
    string: str,
    result: valid,
    description: valid ? "Valid parentheses" : "Invalid parentheses"
  });
  return steps;
};

export default createStringVisualizer({
  title: "Valid Parentheses",
  pseudocodeLines: [
    "procedure isValid(s):",
    "  stack = []",
    "  for char in s:",
    "    if char in '([{': stack.push(char)",
    "    else:",
    "      if stack empty or matching pair fails: return false",
    "      else: stack.pop()",
    "  return stack empty"
  ],
  generateSteps,
  complexity: { time: 'O(n)', space: 'O(n)' }
});
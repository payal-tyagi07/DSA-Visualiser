// src/data/a2zTopics.jsx
const topics = [
  // ==================== Step 1: Learn the Basics ====================
  {
    id: 'step1',
    name: 'Step 1: Learn the Basics',
    total: 31,
    completed: 0,
    subtopics: [
      {
        id: '1.1',
        name: 'Things to Know',
        problems: [
          { id: 'input-output', name: 'User Input / Output', visualizable: false },
          { id: 'data-types', name: 'Data Types', visualizable: false },
          { id: 'if-else', name: 'If Else statements', visualizable: false },
          { id: 'switch', name: 'Switch Statement', visualizable: false },
          { id: 'arrays-strings', name: 'What are arrays, strings?', visualizable: false },
          { id: 'for-loops', name: 'For loops', visualizable: false },
          { id: 'while-loops', name: 'While loops', visualizable: false },
          { id: 'functions', name: 'Functions (Pass by Reference and Value)', visualizable: false },
          { id: 'time-complexity', name: 'Time Complexity', visualizable: false }
        ]
      },
      {
        id: '1.2',
        name: 'Build-up Logical Thinking',
        problems: [
          { id: 'patterns', name: 'Patterns', visualizable: false }
        ]
      },
      {
        id: '1.3',
        name: 'STL/Java Collections',
        problems: [
          { id: 'cpp-stl', name: 'C++ STL', visualizable: false },
          { id: 'java-collections', name: 'Java Collections', visualizable: false }
        ]
      },
      {
        id: '1.4',
        name: 'Basic Maths',
        problems: [
          { id: 'count-digits', name: 'Count Digits', visualizable: false },
          { id: 'reverse-number', name: 'Reverse a Number', visualizable: false },
          { id: 'palindrome', name: 'Check Palindrome', visualizable: false },
          { id: 'gcd', name: 'GCD Or HCF', visualizable: false },
          { id: 'armstrong', name: 'Armstrong Numbers', visualizable: false },
          { id: 'divisors', name: 'Print all Divisors', visualizable: false },
          { id: 'prime', name: 'Check for Prime', visualizable: false }
        ]
      },
      {
        id: '1.5',
        name: 'Learn Basic Recursion',
        problems: [
          { id: 'recursion-print', name: 'Print N times using recursion', visualizable: false },
          { id: 'recursion-1-to-n', name: 'Print 1 to N using recursion', visualizable: false },
          { id: 'recursion-n-to-1', name: 'Print N to 1 using recursion', visualizable: false },
          { id: 'sum-first-n', name: 'Sum of first N numbers', visualizable: false },
          { id: 'factorial', name: 'Factorial of N numbers', visualizable: false },
          { id: 'reverse-array', name: 'Reverse an array', visualizable: false },
          { id: 'palindrome-string', name: 'Check if string is palindrome', visualizable: false },
          { id: 'fibonacci', name: 'Fibonacci Number', visualizable: false }
        ]
      },
      {
        id: '1.6',
        name: 'Learn Basic Hashing',
        problems: [
          { id: 'hashing-theory', name: 'Hashing Theory', visualizable: false },
          { id: 'frequency-count', name: 'Counting frequencies', visualizable: false },
          { id: 'frequency-element', name: 'Find highest/lowest frequency', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 2: Sorting Techniques ====================
  {
    id: 'step2',
    name: 'Step 2: Sorting Techniques',
    total: 7,
    completed: 0,
    subtopics: [
      {
        id: '2.1',
        name: 'Sorting-I',
        problems: [
          { id: 'bubble-sort', name: 'Bubble Sort', visualizable: true },
          { id: 'selection-sort', name: 'Selection Sort', visualizable: true },
          { id: 'insertion-sort', name: 'Insertion Sort', visualizable: true }
        ]
      },
      {
        id: '2.2',
        name: 'Sorting-II',
        problems: [
          { id: 'merge-sort', name: 'Merge Sort', visualizable: true },
          { id: 'quick-sort', name: 'Quick Sort', visualizable: true }
        ]
      }
    ]
  },

  // ==================== Step 3: Arrays ====================
  {
    id: 'step3',
    name: 'Step 3: Arrays',
    total: 40,
    completed: 0,
    subtopics: [
      {
        id: '3.1',
        name: 'Easy',
        problems: [
          { id: 'largest-element', name: 'Largest Element in an Array', visualizable: false },
          { id: 'second-largest', name: 'Second Largest Element', visualizable: false },
          { id: 'array-sorted', name: 'Check if array is sorted', visualizable: false },
          { id: 'remove-duplicates', name: 'Remove duplicates from Sorted array', visualizable: false },
          { id: 'left-rotate-one', name: 'Left Rotate an array by one place', visualizable: false },
          { id: 'left-rotate-d', name: 'Left rotate an array by D places', visualizable: false },
          { id: 'move-zeros', name: 'Move Zeros to end', visualizable: false },
          { id: 'linear-search', name: 'Linear Search', visualizable: false },
          { id: 'union', name: 'Find the Union', visualizable: false },
          { id: 'missing-number', name: 'Find missing number in array', visualizable: false },
          { id: 'max-consecutive-ones', name: 'Maximum Consecutive Ones', visualizable: false },
          { id: 'number-appearing-once', name: 'Find the number appearing once', visualizable: false },
          { id: 'longest-subarray-sum-k', name: 'Longest subarray with sum K', visualizable: false }
        ]
      },
      {
        id: '3.2',
        name: 'Medium',
        problems: [
          { id: '2sum', name: '2Sum Problem', visualizable: false },
          { id: 'sort-012', name: 'Sort an array of 0\'s 1\'s and 2\'s', visualizable: false },
          { id: 'majority-element', name: 'Majority Element (>n/2 times)', visualizable: false },
          { id: 'kadane', name: 'Kadane\'s Algorithm', visualizable: false },
          { id: 'stock-buy-sell', name: 'Stock Buy and Sell', visualizable: false },
          { id: 'next-permutation', name: 'Next Permutation', visualizable: false },
          { id: 'set-matrix-zeroes', name: 'Set Matrix Zeros', visualizable: false },
          { id: 'rotate-matrix', name: 'Rotate Matrix by 90 degrees', visualizable: false },
          { id: 'spiral-matrix', name: 'Print matrix in spiral manner', visualizable: false }
        ]
      },
      {
        id: '3.3',
        name: 'Hard',
        problems: [
          { id: 'pascal-triangle', name: 'Pascal\'s Triangle', visualizable: false },
          { id: 'majority-element-2', name: 'Majority Element (n/3 times)', visualizable: false },
          { id: '3sum', name: '3-Sum Problem', visualizable: false },
          { id: '4sum', name: '4-Sum Problem', visualizable: false },
          { id: 'largest-subarray-zero', name: 'Largest Subarray with 0 Sum', visualizable: false },
          { id: 'merge-overlapping', name: 'Merge Overlapping Subintervals', visualizable: false },
          { id: 'merge-sorted-arrays', name: 'Merge two sorted arrays without extra space', visualizable: false },
          { id: 'find-repeating-missing', name: 'Find repeating and missing number', visualizable: false },
          { id: 'count-inversions', name: 'Count Inversions', visualizable: false },
          { id: 'reverse-pairs', name: 'Reverse Pairs', visualizable: false },
          { id: 'max-product-subarray', name: 'Maximum Product Subarray', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 4: Binary Search ====================
  {
    id: 'step4',
    name: 'Step 4: Binary Search',
    total: 32,
    completed: 0,
    subtopics: [
      {
        id: '4.1',
        name: 'BS on 1D Arrays',
        problems: [
          { id: 'binary-search', name: 'Binary Search to find X', visualizable: true },
          { id: 'lower-bound', name: 'Implement Lower Bound', visualizable: true },
          { id: 'upper-bound', name: 'Implement Upper Bound', visualizable: true },
          { id: 'search-insert', name: 'Search Insert Position', visualizable: false },
          { id: 'floor-ceil', name: 'Floor/Ceil in Sorted Array', visualizable: false },
          { id: 'first-last-occurrence', name: 'First and Last Occurrences', visualizable: true },
          { id: 'search-rotated', name: 'Search in Rotated Sorted Array', visualizable: true },
          { id: 'find-min-rotated', name: 'Find minimum in Rotated Sorted Array', visualizable: true },
          { id: 'single-element', name: 'Single element in Sorted Array', visualizable: true },
          { id: 'peak-element', name: 'Find peak element', visualizable: true }
        ]
      },
      {
        id: '4.2',
        name: 'BS on 2D Arrays',
        problems: [
          { id: 'search-2d-matrix', name: 'Search in a 2D matrix', visualizable: true },
          { id: 'peak-element-2d', name: 'Find peak element in 2D matrix', visualizable: true },
          { id: 'matrix-median', name: 'Median of a row-wise sorted matrix', visualizable: true }
        ]
      },
      {
        id: '4.3',
        name: 'BS on Answer Concept',
        problems: [
          { id: 'sqrt', name: 'Square root of a number', visualizable: true },
          { id: 'nth-root', name: 'Find Nth root of an integer', visualizable: false },
          { id: 'koko-eating-bananas', name: 'Koko Eating Bananas', visualizable: true },
          { id: 'minimum-days-bouquets', name: 'Minimum days to make bouquets', visualizable: true },
          { id: 'ship-capacity', name: 'Capacity to ship packages within D days', visualizable: true },
          { id: 'kth-missing', name: 'Kth Missing Positive Number', visualizable: true },
          { id: 'aggressive-cows', name: 'Aggressive Cows', visualizable: true },
          { id: 'book-allocation', name: 'Book Allocation', visualizable: true },
          { id: 'split-array', name: 'Split array largest sum', visualizable: true },
          { id: 'gas-stations', name: 'Gas Stations', visualizable: true },
          { id: 'median-two-arrays', name: 'Median of two sorted arrays', visualizable: true },
          { id: 'kth-two-arrays', name: 'Kth element of two sorted arrays', visualizable: true }
        ]
      }
    ]
  },

  // ==================== Step 5: Strings ====================
  {
    id: 'step5',
    name: 'Step 5: Strings',
    total: 18,
    completed: 0,
    subtopics: [
      {
        id: '5.1',
        name: 'Easy',
        problems: [
          { id: 'reverse-string', name: 'Reverse a String', visualizable: false },
          { id: 'palindrome-string', name: 'Check Palindrome', visualizable: false },
          { id: 'valid-anagram', name: 'Valid Anagram', visualizable: false },
          { id: 'first-unique-char', name: 'First Unique Character in a String', visualizable: false }
        ]
      },
      {
        id: '5.2',
        name: 'Medium',
        problems: [
          { id: 'longest-substring', name: 'Longest Substring Without Repeating', visualizable: false },
          { id: 'group-anagrams', name: 'Group Anagrams', visualizable: false },
          { id: 'longest-palindromic-substring', name: 'Longest Palindromic Substring', visualizable: false },
          { id: 'string-to-integer', name: 'String to Integer (atoi)', visualizable: false },
          { id: 'roman-to-integer', name: 'Roman to Integer', visualizable: false }
        ]
      },
      {
        id: '5.3',
        name: 'Hard',
        problems: [
          { id: 'minimum-window-substring', name: 'Minimum Window Substring', visualizable: false },
          { id: 'valid-number', name: 'Valid Number', visualizable: false },
          { id: 'regular-expression-matching', name: 'Regular Expression Matching', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 6: Linked List ====================
  {
    id: 'step6',
    name: 'Step 6: Linked List',
    total: 20,
    completed: 0,
    subtopics: [
      {
        id: '6.1',
        name: 'Singly Linked List',
        problems: [
          { id: 'reverse-linked-list', name: 'Reverse a Linked List', visualizable: false },
          { id: 'middle-of-linked-list', name: 'Middle of the Linked List', visualizable: false },
          { id: 'detect-cycle', name: 'Detect Cycle', visualizable: false },
          { id: 'cycle-start', name: 'Find Cycle Start (Floyd’s)', visualizable: false },
          { id: 'remove-nth-from-end', name: 'Remove Nth Node From End', visualizable: false },
          { id: 'merge-two-sorted-lists', name: 'Merge Two Sorted Lists', visualizable: false },
          { id: 'add-two-numbers', name: 'Add Two Numbers (Digits)', visualizable: false }
        ]
      },
      {
        id: '6.2',
        name: 'Doubly Linked List',
        problems: [
          { id: 'reverse-dll', name: 'Reverse a Doubly Linked List', visualizable: false }
        ]
      },
      {
        id: '6.3',
        name: 'Hard',
        problems: [
          { id: 'reverse-k-group', name: 'Reverse Nodes in k‑Group', visualizable: false },
          { id: 'copy-random-list', name: 'Copy List with Random Pointer', visualizable: false },
          { id: 'flatten-multilevel-list', name: 'Flatten a Multilevel Doubly Linked List', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 7: Recursion ====================
  {
    id: 'step7',
    name: 'Step 7: Recursion',
    total: 15,
    completed: 0,
    subtopics: [
      {
        id: '7.1',
        name: 'Basic Recursion',
        problems: [
          { id: 'factorial', name: 'Factorial', visualizable: false },
          { id: 'fibonacci', name: 'Fibonacci', visualizable: false },
          { id: 'power', name: 'Power of a Number (x^n)', visualizable: false }
        ]
      },
      {
        id: '7.2',
        name: 'Subsets & Permutations',
        problems: [
          { id: 'subsets', name: 'Subsets (Power Set)', visualizable: false },
          { id: 'subsets-ii', name: 'Subsets II (Duplicates)', visualizable: false },
          { id: 'permutations', name: 'Permutations', visualizable: false },
          { id: 'combination-sum', name: 'Combination Sum', visualizable: false },
          { id: 'combination-sum-ii', name: 'Combination Sum II', visualizable: false },
          { id: 'palindrome-partitioning', name: 'Palindrome Partitioning', visualizable: false }
        ]
      },
      {
        id: '7.3',
        name: 'Backtracking',
        problems: [
          { id: 'n-queens', name: 'N‑Queens', visualizable: false },
          { id: 'sudoku-solver', name: 'Sudoku Solver', visualizable: false },
          { id: 'rat-in-maze', name: 'Rat in a Maze', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 8: Bit Manipulation ====================
  {
    id: 'step8',
    name: 'Step 8: Bit Manipulation',
    total: 10,
    completed: 0,
    subtopics: [
      {
        id: '8.1',
        name: 'Basics',
        problems: [
          { id: 'bitwise-operations', name: 'Bitwise Operations (AND, OR, XOR)', visualizable: false },
          { id: 'count-set-bits', name: 'Count Set Bits', visualizable: false },
          { id: 'power-of-two', name: 'Power of Two', visualizable: false },
          { id: 'single-number', name: 'Single Number (XOR)', visualizable: false },
          { id: 'missing-number', name: 'Missing Number (XOR)', visualizable: false }
        ]
      },
      {
        id: '8.2',
        name: 'Advanced',
        problems: [
          { id: 'divide-integers', name: 'Divide Two Integers', visualizable: false },
          { id: 'bitwise-and-range', name: 'Bitwise AND of Numbers Range', visualizable: false },
          { id: 'subsets-bitmask', name: 'Subsets using Bitmask', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 9: Stack & Queue ====================
  {
    id: 'step9',
    name: 'Step 9: Stack and Queues',
    total: 20,
    completed: 0,
    subtopics: [
      {
        id: '9.1',
        name: 'Implementation',
        problems: [
          { id: 'stack-using-array', name: 'Stack using Array', visualizable: false },
          { id: 'queue-using-array', name: 'Queue using Array', visualizable: false },
          { id: 'stack-using-queues', name: 'Stack using Queues', visualizable: false },
          { id: 'queue-using-stacks', name: 'Queue using Stacks', visualizable: false }
        ]
      },
      {
        id: '9.2',
        name: 'Classic Problems',
        problems: [
          { id: 'valid-parentheses', name: 'Valid Parentheses', visualizable: false },
          { id: 'min-stack', name: 'Min Stack', visualizable: false },
          { id: 'next-greater-element', name: 'Next Greater Element', visualizable: false },
          { id: 'largest-rectangle', name: 'Largest Rectangle in Histogram', visualizable: false },
          { id: 'sliding-window-max', name: 'Sliding Window Maximum', visualizable: false }
        ]
      },
      {
        id: '9.3',
        name: 'Monotonic Stack/Queue',
        problems: [
          { id: 'daily-temperatures', name: 'Daily Temperatures', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 10: Sliding Window & Two Pointers ====================
  {
    id: 'step10',
    name: 'Step 10: Sliding Window & Two Pointers',
    total: 15,
    completed: 0,
    subtopics: [
      {
        id: '10.1',
        name: 'Sliding Window',
        problems: [
          { id: 'max-sum-subarray-k', name: 'Maximum Sum Subarray of size K', visualizable: false },
          { id: 'longest-substring-k-distinct', name: 'Longest Substring with K Distinct', visualizable: false },
          { id: 'fruit-into-baskets', name: 'Fruit Into Baskets', visualizable: false },
          { id: 'min-size-subarray-sum', name: 'Minimum Size Subarray Sum', visualizable: false }
        ]
      },
      {
        id: '10.2',
        name: 'Two Pointers',
        problems: [
          { id: 'two-sum-sorted', name: 'Two Sum (Sorted Array)', visualizable: false },
          { id: 'remove-duplicates', name: 'Remove Duplicates from Sorted Array', visualizable: false },
          { id: 'container-with-most-water', name: 'Container With Most Water', visualizable: false },
          { id: 'trapping-rain-water', name: 'Trapping Rain Water', visualizable: false },
          { id: 'three-sum', name: '3Sum', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 11: Heaps ====================
  {
    id: 'step11',
    name: 'Step 11: Heaps',
    total: 12,
    completed: 0,
    subtopics: [
      {
        id: '11.1',
        name: 'Basics',
        problems: [
          { id: 'min-heap', name: 'Min Heap', visualizable: false },
          { id: 'max-heap', name: 'Max Heap', visualizable: false },
          { id: 'kth-largest-element', name: 'Kth Largest Element', visualizable: false },
          { id: 'kth-smallest-element', name: 'Kth Smallest Element', visualizable: false }
        ]
      },
      {
        id: '11.2',
        name: 'Heap Applications',
        problems: [
          { id: 'top-k-frequent', name: 'Top K Frequent Elements', visualizable: false },
          { id: 'merge-k-sorted-lists', name: 'Merge K Sorted Lists', visualizable: false },
          { id: 'find-median-data-stream', name: 'Find Median from Data Stream', visualizable: false },
          { id: 'task-scheduler', name: 'Task Scheduler', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 12: Greedy Algorithms ====================
  {
    id: 'step12',
    name: 'Step 12: Greedy Algorithms',
    total: 12,
    completed: 0,
    subtopics: [
      {
        id: '12.1',
        name: 'Basic Greedy',
        problems: [
          { id: 'activity-selection', name: 'Activity Selection', visualizable: false },
          { id: 'n-meetings-in-room', name: 'N Meetings in One Room', visualizable: false },
          { id: 'minimum-platforms', name: 'Minimum Platforms', visualizable: false }
        ]
      },
      {
        id: '12.2',
        name: 'Job Sequencing',
        problems: [
          { id: 'job-sequencing', name: 'Job Sequencing with Deadlines', visualizable: false }
        ]
      },
      {
        id: '12.3',
        name: 'Coin Change',
        problems: [
          { id: 'coin-change-greedy', name: 'Coin Change (Greedy)', visualizable: false },
          { id: 'fractional-knapsack', name: 'Fractional Knapsack', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 13: Binary Trees ====================
  {
    id: 'step13',
    name: 'Step 13: Binary Trees',
    total: 25,
    completed: 0,
    subtopics: [
      {
        id: '13.1',
        name: 'Traversals',
        problems: [
          { id: 'inorder-traversal', name: 'Inorder Traversal', visualizable: false },
          { id: 'preorder-traversal', name: 'Preorder Traversal', visualizable: false },
          { id: 'postorder-traversal', name: 'Postorder Traversal', visualizable: false },
          { id: 'level-order', name: 'Level Order Traversal', visualizable: false }
        ]
      },
      {
        id: '13.2',
        name: 'Properties',
        problems: [
          { id: 'max-depth', name: 'Maximum Depth of Binary Tree', visualizable: false },
          { id: 'balanced-tree', name: 'Balanced Binary Tree', visualizable: false },
          { id: 'diameter', name: 'Diameter of Binary Tree', visualizable: false },
          { id: 'same-tree', name: 'Same Tree', visualizable: false },
          { id: 'invert-tree', name: 'Invert Binary Tree', visualizable: false }
        ]
      },
      {
        id: '13.3',
        name: 'Advanced',
        problems: [
          { id: 'lowest-common-ancestor', name: 'Lowest Common Ancestor', visualizable: false },
          { id: 'max-path-sum', name: 'Binary Tree Maximum Path Sum', visualizable: false },
          { id: 'construct-from-inorder-preorder', name: 'Construct Tree from Inorder & Preorder', visualizable: false },
          { id: 'binary-search-tree', name: 'Validate BST', visualizable: false },
          { id: 'kth-smallest-bst', name: 'Kth Smallest in BST', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 14: Graphs ====================
  {
    id: 'step14',
    name: 'Step 14: Graphs',
    total: 30,
    completed: 0,
    subtopics: [
      {
        id: '14.1',
        name: 'Traversals',
        problems: [
          { id: 'bfs', name: 'BFS', visualizable: false },
          { id: 'dfs', name: 'DFS', visualizable: false },
          { id: 'cycle-detection-undirected', name: 'Cycle Detection (Undirected)', visualizable: false },
          { id: 'cycle-detection-directed', name: 'Cycle Detection (Directed)', visualizable: false },
          { id: 'topological-sort', name: 'Topological Sort', visualizable: false }
        ]
      },
      {
        id: '14.2',
        name: 'Shortest Path',
        problems: [
          { id: 'dijkstra', name: 'Dijkstra\'s Algorithm', visualizable: false },
          { id: 'bellman-ford', name: 'Bellman‑Ford Algorithm', visualizable: false },
          { id: 'floyd-warshall', name: 'Floyd‑Warshall Algorithm', visualizable: false }
        ]
      },
      {
        id: '14.3',
        name: 'MST & Disjoint Set',
        problems: [
          { id: 'prims', name: 'Prim\'s Algorithm', visualizable: false },
          { id: 'kruskals', name: 'Kruskal\'s Algorithm', visualizable: false },
          { id: 'disjoint-set', name: 'Disjoint Set (Union-Find)', visualizable: false }
        ]
      },
      {
        id: '14.4',
        name: 'Hard',
        problems: [
          { id: 'strongly-connected-components', name: 'Kosaraju\'s Algorithm (SCC)', visualizable: false },
          { id: 'bridges', name: 'Bridges in Graph', visualizable: false },
          { id: 'articulation-point', name: 'Articulation Point', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 15: Dynamic Programming ====================
  {
    id: 'step15',
    name: 'Step 15: Dynamic Programming',
    total: 35,
    completed: 0,
    subtopics: [
      {
        id: '15.1',
        name: '1D DP',
        problems: [
          { id: 'climbing-stairs', name: 'Climbing Stairs', visualizable: false },
          { id: 'house-robber', name: 'House Robber', visualizable: false },
          { id: 'max-subarray', name: 'Maximum Subarray (Kadane)', visualizable: false },
          { id: 'decode-ways', name: 'Decode Ways', visualizable: false }
        ]
      },
      {
        id: '15.2',
        name: '2D DP',
        problems: [
          { id: 'unique-paths', name: 'Unique Paths', visualizable: false },
          { id: 'unique-paths-obstacles', name: 'Unique Paths with Obstacles', visualizable: false },
          { id: 'minimum-path-sum', name: 'Minimum Path Sum', visualizable: false },
          { id: 'longest-common-subsequence', name: 'Longest Common Subsequence', visualizable: false }
        ]
      },
      {
        id: '15.3',
        name: 'Classic DP',
        problems: [
          { id: 'coin-change', name: 'Coin Change', visualizable: false },
          { id: 'coin-change-ii', name: 'Coin Change II', visualizable: false },
          { id: 'partition-equal-subset', name: 'Partition Equal Subset Sum', visualizable: false },
          { id: 'knapsack', name: '0/1 Knapsack', visualizable: false },
          { id: 'word-break', name: 'Word Break', visualizable: false }
        ]
      },
      {
        id: '15.4',
        name: 'Longest Increasing Subsequence',
        problems: [
          { id: 'lis', name: 'Longest Increasing Subsequence', visualizable: false },
          { id: 'number-of-lis', name: 'Number of LIS', visualizable: false },
          { id: 'russian-doll', name: 'Russian Doll Envelopes', visualizable: false }
        ]
      },
      {
        id: '15.5',
        name: 'MCM & Others',
        problems: [
          { id: 'matrix-chain-multiplication', name: 'Matrix Chain Multiplication', visualizable: false },
          { id: 'burst-balloons', name: 'Burst Balloons', visualizable: false },
          { id: 'palindromic-substrings', name: 'Palindromic Substrings', visualizable: false }
        ]
      }
    ]
  },

  // ==================== Step 16: Tries ====================
  {
    id: 'step16',
    name: 'Step 16: Tries',
    total: 8,
    completed: 0,
    subtopics: [
      {
        id: '16.1',
        name: 'Basics',
        problems: [
          { id: 'implement-trie', name: 'Implement Trie (Prefix Tree)', visualizable: false },
          { id: 'search-suggestions', name: 'Search Suggestions System', visualizable: false },
          { id: 'word-search-ii', name: 'Word Search II', visualizable: false }
        ]
      },
      {
        id: '16.2',
        name: 'Advanced',
        problems: [
          { id: 'longest-word-in-dictionary', name: 'Longest Word in Dictionary', visualizable: false },
          { id: 'max-xor', name: 'Maximum XOR of Two Numbers', visualizable: false },
          { id: 'palindrome-pairs', name: 'Palindrome Pairs', visualizable: false }
        ]
      }
    ]
  }
];

export default topics;
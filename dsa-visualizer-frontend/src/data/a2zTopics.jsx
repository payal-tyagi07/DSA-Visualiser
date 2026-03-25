const topics = [
  // Step 1: Learn the Basics
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
          { id: 'patterns', name: 'Patterns', visualizable: true }
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
          { id: 'count-digits', name: 'Count Digits', visualizable: true },
          { id: 'reverse-number', name: 'Reverse a Number', visualizable: true },
          { id: 'palindrome', name: 'Check Palindrome', visualizable: true },
          { id: 'gcd', name: 'GCD Or HCF', visualizable: true },
          { id: 'armstrong', name: 'Armstrong Numbers', visualizable: true },
          { id: 'divisors', name: 'Print all Divisors', visualizable: true },
          { id: 'prime', name: 'Check for Prime', visualizable: true }
        ]
      },
      {
        id: '1.5',
        name: 'Learn Basic Recursion',
        problems: [
          { id: 'recursion-print', name: 'Print N times using recursion', visualizable: true },
          { id: 'recursion-1-to-n', name: 'Print 1 to N using recursion', visualizable: true },
          { id: 'recursion-n-to-1', name: 'Print N to 1 using recursion', visualizable: true },
          { id: 'sum-first-n', name: 'Sum of first N numbers', visualizable: true },
          { id: 'factorial', name: 'Factorial of N numbers', visualizable: true },
          { id: 'reverse-array', name: 'Reverse an array', visualizable: true },
          { id: 'palindrome-string', name: 'Check if string is palindrome', visualizable: true },
          { id: 'fibonacci', name: 'Fibonacci Number', visualizable: true }
        ]
      },
      {
        id: '1.6',
        name: 'Learn Basic Hashing',
        problems: [
          { id: 'hashing-theory', name: 'Hashing Theory', visualizable: false },
          { id: 'frequency-count', name: 'Counting frequencies', visualizable: true },
          { id: 'frequency-element', name: 'Find highest/lowest frequency', visualizable: true }
        ]
      }
    ]
  },

  // Step 2: Sorting Techniques
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

  // Step 3: Arrays
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
          { id: 'largest-element', name: 'Largest Element in an Array', visualizable: true },
          { id: 'second-largest', name: 'Second Largest Element', visualizable: true },
          { id: 'array-sorted', name: 'Check if array is sorted', visualizable: true },
          { id: 'remove-duplicates', name: 'Remove duplicates from Sorted array', visualizable: true },
          { id: 'left-rotate-one', name: 'Left Rotate an array by one place', visualizable: true },
          { id: 'left-rotate-d', name: 'Left rotate an array by D places', visualizable: true },
          { id: 'move-zeros', name: 'Move Zeros to end', visualizable: true },
          { id: 'linear-search', name: 'Linear Search', visualizable: true },
          { id: 'union', name: 'Find the Union', visualizable: true },
          { id: 'missing-number', name: 'Find missing number in array', visualizable: true },
          { id: 'max-consecutive-ones', name: 'Maximum Consecutive Ones', visualizable: true },
          { id: 'number-appearing-once', name: 'Find the number appearing once', visualizable: true },
          { id: 'longest-subarray-sum-k', name: 'Longest subarray with sum K', visualizable: true }
        ]
      },
      {
        id: '3.2',
        name: 'Medium',
        problems: [
          { id: '2sum', name: '2Sum Problem', visualizable: true },
          { id: 'sort-012', name: 'Sort an array of 0\'s 1\'s and 2\'s', visualizable: true },
          { id: 'majority-element', name: 'Majority Element (>n/2 times)', visualizable: true },
          { id: 'kadane', name: 'Kadane\'s Algorithm', visualizable: true },
          { id: 'stock-buy-sell', name: 'Stock Buy and Sell', visualizable: true },
          { id: 'next-permutation', name: 'Next Permutation', visualizable: true },
          { id: 'set-matrix-zeroes', name: 'Set Matrix Zeros', visualizable: true },
          { id: 'rotate-matrix', name: 'Rotate Matrix by 90 degrees', visualizable: true },
          { id: 'spiral-matrix', name: 'Print matrix in spiral manner', visualizable: true }
        ]
      },
      {
        id: '3.3',
        name: 'Hard',
        problems: [
          { id: 'pascal-triangle', name: 'Pascal\'s Triangle', visualizable: true },
          { id: 'majority-element-2', name: 'Majority Element (n/3 times)', visualizable: true },
          { id: '3sum', name: '3-Sum Problem', visualizable: true },
          { id: '4sum', name: '4-Sum Problem', visualizable: true },
          { id: 'largest-subarray-zero', name: 'Largest Subarray with 0 Sum', visualizable: true },
          { id: 'merge-overlapping', name: 'Merge Overlapping Subintervals', visualizable: true },
          { id: 'merge-sorted-arrays', name: 'Merge two sorted arrays without extra space', visualizable: true },
          { id: 'find-repeating-missing', name: 'Find repeating and missing number', visualizable: true },
          { id: 'count-inversions', name: 'Count Inversions', visualizable: true },
          { id: 'reverse-pairs', name: 'Reverse Pairs', visualizable: true },
          { id: 'max-product-subarray', name: 'Maximum Product Subarray', visualizable: true }
        ]
      }
    ]
  },

  // Step 4: Binary Search
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
          { id: 'find-peak-2d', name: 'Find peak element in 2D matrix', visualizable: true },
          { id: 'matrix-median', name: 'Median of a row-wise sorted matrix', visualizable: true }
        ]
      },
      {
        id: '4.3',
        name: 'BS on Answer Concept',
        problems: [
          { id: 'sqrt', name: 'Square root of a number', visualizable: true },
          { id: 'nth-root', name: 'Find Nth root of an integer', visualizable: true },
          { id: 'koko-eating-bananas', name: 'Koko Eating Bananas', visualizable: true },
          { id: 'minimum-days-bouquets', name: 'Minimum days to make bouquets', visualizable: true },
          { id: 'capacity-ship-packages', name: 'Capacity to ship packages within D days', visualizable: true },
          { id: 'kth-missing-positive', name: 'Kth Missing Positive Number', visualizable: true },
          { id: 'aggressive-cows', name: 'Aggressive Cows', visualizable: true },
          { id: 'book-allocation', name: 'Book Allocation', visualizable: true },
          { id: 'split-array-largest-sum', name: 'Split array largest sum', visualizable: true },
          { id: 'gas-stations', name: 'Gas Stations', visualizable: true },
          { id: 'median-two-sorted', name: 'Median of two sorted arrays', visualizable: true },
          { id: 'kth-element-two-sorted', name: 'Kth element of two sorted arrays', visualizable: true }
        ]
      }
    ]
  },

];

export default topics;
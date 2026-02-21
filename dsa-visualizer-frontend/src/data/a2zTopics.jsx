// Complete A2Z Sheet structure – includes Bubble Sort under Sorting Techniques
const topics = [
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
          // ... add more if you like
        ]
      },
      // ... other subtopics (you can expand later)
    ]
  },
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
  }
  // Add all other steps as needed (Step 3: Arrays, Step 4: Binary Search, etc.)
];

export default topics;
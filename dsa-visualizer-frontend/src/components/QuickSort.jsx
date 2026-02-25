import React, { useState, useEffect } from 'react';

const QuickSort = () => {
  // Pseudocode lines (0-indexed)
  const pseudocodeLines = [
    "procedure quickSort(arr, low, high):",
    "  if low < high:",
    "    pivotIndex = partition(arr, low, high)",
    "    quickSort(arr, low, pivotIndex - 1)",
    "    quickSort(arr, pivotIndex + 1, high)",
    "",
    "procedure partition(arr, low, high):",
    "  pivot = arr[high]",
    "  i = low - 1",
    "  for j = low to high - 1:",
    "    if arr[j] <= pivot:",
    "      i = i + 1",
    "      swap arr[i] with arr[j]",
    "  swap arr[i+1] with arr[high]",
    "  return i + 1"
  ];

  const steps = [
    // Step 0: Initial
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [],
      swapping: [],
      sorted: [],
      description: "Initial unsorted array",
      pseudocodeLine: 0
    },

    // --- First partition (pivot = 9) ---
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0],
      swapping: [],
      sorted: [],
      description: "Choose pivot: 9 (first element)",
      pseudocodeLine: 6
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0, 1],
      swapping: [],
      sorted: [],
      description: "Compare 6 with pivot 9 – less, leave in place",
      pseudocodeLine: 9
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0, 2],
      swapping: [],
      sorted: [],
      description: "Compare 4 with pivot 9 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0, 3],
      swapping: [],
      sorted: [],
      description: "Compare 8 with pivot 9 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0, 4],
      swapping: [],
      sorted: [],
      description: "Compare 2 with pivot 9 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0, 5],
      swapping: [],
      sorted: [],
      description: "Compare 10 with pivot 9 – greater, will go to right side",
      pseudocodeLine: 9
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0, 6],
      swapping: [],
      sorted: [],
      description: "Compare 1 with pivot 9 – less, leave",
      pseudocodeLine: 9
    },
    // Partition complete: swap pivot (9) with the element just before the greater section (10)
    {
      array: [6, 4, 8, 2, 1, 9, 10],
      comparing: [],
      swapping: [0, 1, 2, 3, 4, 5],
      sorted: [5],
      description: "Pivot 9 placed in correct position (index 5). Left side [6,4,8,2,1] (unsorted), right side [10] (unsorted)",
      pseudocodeLine: 11
    },

    // --- Left subarray [6,4,8,2,1] with pivot 6 (first element) ---
    {
      array: [6, 4, 8, 2, 1, 9, 10],
      comparing: [0],
      swapping: [],
      sorted: [5],
      description: "Left subarray: choose pivot 6",
      pseudocodeLine: 6
    },
    {
      array: [6, 4, 8, 2, 1, 9, 10],
      comparing: [0, 1],
      swapping: [],
      sorted: [5],
      description: "Compare 4 with pivot 6 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [6, 4, 8, 2, 1, 9, 10],
      comparing: [0, 2],
      swapping: [],
      sorted: [5],
      description: "Compare 8 with pivot 6 – greater, mark for right side",
      pseudocodeLine: 9
    },
    {
      array: [6, 4, 8, 2, 1, 9, 10],
      comparing: [0, 3],
      swapping: [],
      sorted: [5],
      description: "Compare 2 with pivot 6 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [6, 4, 8, 2, 1, 9, 10],
      comparing: [0, 4],
      swapping: [],
      sorted: [5],
      description: "Compare 1 with pivot 6 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [4, 2, 1, 6, 8, 9, 10],
      comparing: [],
      swapping: [0, 1, 2, 3],
      sorted: [3, 5],
      description: "Pivot 6 placed at index 3. Left side [4,2,1], right side [8]",
      pseudocodeLine: 11
    },

    // --- Left-left subarray [4,2,1] with pivot 4 ---
    {
      array: [4, 2, 1, 6, 8, 9, 10],
      comparing: [0],
      swapping: [],
      sorted: [3, 5],
      description: "Subarray [4,2,1]: choose pivot 4",
      pseudocodeLine: 6
    },
    {
      array: [4, 2, 1, 6, 8, 9, 10],
      comparing: [0, 1],
      swapping: [],
      sorted: [3, 5],
      description: "Compare 2 with pivot 4 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [4, 2, 1, 6, 8, 9, 10],
      comparing: [0, 2],
      swapping: [],
      sorted: [3, 5],
      description: "Compare 1 with pivot 4 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [2, 1, 4, 6, 8, 9, 10],
      comparing: [],
      swapping: [0, 1, 2],
      sorted: [2, 3, 5],
      description: "Pivot 4 placed at index 2. Left side [2,1]",
      pseudocodeLine: 11
    },

    // --- Subarray [2,1] with pivot 2 ---
    {
      array: [2, 1, 4, 6, 8, 9, 10],
      comparing: [0],
      swapping: [],
      sorted: [2, 3, 5],
      description: "Subarray [2,1]: choose pivot 2",
      pseudocodeLine: 6
    },
    {
      array: [2, 1, 4, 6, 8, 9, 10],
      comparing: [0, 1],
      swapping: [],
      sorted: [2, 3, 5],
      description: "Compare 1 with pivot 2 – less, leave",
      pseudocodeLine: 9
    },
    {
      array: [1, 2, 4, 6, 8, 9, 10],
      comparing: [],
      swapping: [0, 1],
      sorted: [0, 1, 2, 3, 5],
      description: "Pivot 2 placed at index 1. All left elements now sorted",
      pseudocodeLine: 11
    },

    // --- Right side of first pivot: [10] (already single element) ---
    {
      array: [1, 2, 4, 6, 8, 9, 10],
      comparing: [],
      swapping: [],
      sorted: [0, 1, 2, 3, 4, 5, 6],
      description: "Array fully sorted! 🎉",
      pseudocodeLine: 0
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < steps.length - 1) {
      timer = setTimeout(() => setCurrentStep(currentStep + 1), speed);
    } else if (currentStep === steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, speed, steps.length]);

  const getBgColor = (index) => {
    if (steps[currentStep].comparing?.includes(index)) return 'bg-yellow-500';
    if (steps[currentStep].swapping?.includes(index)) return 'bg-green-500';
    if (steps[currentStep].sorted?.includes(index)) return 'bg-gray-400';
    return 'bg-blue-500';
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">Quick Sort Visualization</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Initial: [9, 6, 4, 8, 2, 10, 1]</p>

      {/* Main content with two columns */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column: Visualization */}
        <div className="lg:w-2/3">
          {/* Number blocks */}
          <div className="flex justify-center gap-3 flex-wrap mb-6">
            {steps[currentStep].array.map((num, idx) => (
              <div
                key={idx}
                className={`w-16 h-16 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 transform hover:scale-110 ${getBgColor(idx)}`}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mb-4 flex-wrap text-sm">
            <span className="flex items-center text-gray-700 dark:text-gray-300"><span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span> Unsorted</span>
            <span className="flex items-center text-gray-700 dark:text-gray-300"><span className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></span> Comparing (pivot)</span>
            <span className="flex items-center text-gray-700 dark:text-gray-300"><span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span> Swapping/Placing pivot</span>
            <span className="flex items-center text-gray-700 dark:text-gray-300"><span className="w-3 h-3 bg-gray-400 rounded-full mr-1"></span> Sorted</span>
          </div>

          {/* Description */}
          <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg mb-4 border-l-4 border-blue-500">
            <p className="text-gray-700 dark:text-gray-200"><span className="font-semibold">Step {currentStep+1}:</span> {steps[currentStep].description}</p>
          </div>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Progress</span>
              <span>{Math.round((currentStep+1)/steps.length*100)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((currentStep+1)/steps.length)*100}%` }}></div>
            </div>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">Step {currentStep+1} of {steps.length}</div>
          </div>

          {/* Speed control */}
          <div className="flex items-center justify-center gap-4 mb-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <span className="text-gray-700 dark:text-gray-300">⏱️ Speed:</span>
            <input type="range" min="300" max="2000" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-64 accent-blue-500" />
            <span className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">{speed}ms</span>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => { setCurrentStep(Math.max(0, currentStep-1)); setIsPlaying(false); }} disabled={currentStep === 0} className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-all ${currentStep === 0 ? 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>← Previous</button>
            <button onClick={() => { setCurrentStep(0); setIsPlaying(false); }} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold shadow-md">Reset</button>
            <button onClick={() => setIsPlaying(!isPlaying)} disabled={currentStep === steps.length-1} className={`px-6 py-3 rounded-lg font-semibold shadow-md ${currentStep === steps.length-1 ? 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed' : isPlaying ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>{isPlaying ? '⏸️ Pause' : '▶️ Play'}</button>
            <button onClick={() => { setCurrentStep(Math.min(steps.length-1, currentStep+1)); setIsPlaying(false); }} disabled={currentStep === steps.length-1} className={`px-6 py-3 rounded-lg font-semibold shadow-md ${currentStep === steps.length-1 ? 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Next →</button>
          </div>

          {/* Current array */}
          <div className="mt-4 text-center">
            <div className="inline-block bg-gray-800 dark:bg-gray-900 text-green-400 font-mono px-4 py-2 rounded-lg">
              Current: [{steps[currentStep].array.join(', ')}]
            </div>
          </div>
        </div>

        {/* Right column: Pseudocode */}
        <div className="lg:w-1/3 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 font-mono text-sm shadow-inner">
          <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Pseudocode</h3>
          <div className="space-y-1">
            {pseudocodeLines.map((line, idx) => (
              <div
                key={idx}
                className={`px-2 py-1 rounded ${
                  idx === steps[currentStep].pseudocodeLine
                    ? 'bg-yellow-300 dark:bg-yellow-600 text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSort;
import React, { useState, useEffect } from 'react';

const InsertionSort = () => {
  const steps = [
    // Initial state
    { array: [9, 6, 4, 8, 2, 10, 1], comparing: [], swapping: [], sorted: [0], description: "Start with first element (9) as sorted" },

    // Insert 6
    { array: [9, 6, 4, 8, 2, 10, 1], comparing: [0, 1], swapping: [], sorted: [], description: "Take 6, compare with 9" },
    { array: [6, 9, 4, 8, 2, 10, 1], comparing: [], swapping: [0, 1], sorted: [0,1], description: "Shift 9 right, insert 6 at front" },

    // Insert 4
    { array: [6, 9, 4, 8, 2, 10, 1], comparing: [1, 2], swapping: [], sorted: [0,1], description: "Take 4, compare with 9" },
    { array: [6, 9, 4, 8, 2, 10, 1], comparing: [0, 2], swapping: [], sorted: [0,1], description: "Compare 4 with 6" },
    { array: [4, 6, 9, 8, 2, 10, 1], comparing: [], swapping: [0,1,2], sorted: [0,1,2], description: "Shift 6 and 9 right, insert 4 at front" },

    // Insert 8
    { array: [4, 6, 9, 8, 2, 10, 1], comparing: [2, 3], swapping: [], sorted: [0,1,2], description: "Take 8, compare with 9" },
    { array: [4, 6, 8, 9, 2, 10, 1], comparing: [], swapping: [2,3], sorted: [0,1,2,3], description: "Shift 9 right, insert 8 before it" },

    // Insert 2
    { array: [4, 6, 8, 9, 2, 10, 1], comparing: [3, 4], swapping: [], sorted: [0,1,2,3], description: "Take 2, compare with 9" },
    { array: [4, 6, 8, 9, 2, 10, 1], comparing: [2, 4], swapping: [], sorted: [0,1,2,3], description: "Compare 2 with 8" },
    { array: [4, 6, 8, 9, 2, 10, 1], comparing: [1, 4], swapping: [], sorted: [0,1,2,3], description: "Compare 2 with 6" },
    { array: [4, 6, 8, 9, 2, 10, 1], comparing: [0, 4], swapping: [], sorted: [0,1,2,3], description: "Compare 2 with 4" },
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [], swapping: [0,1,2,3,4], sorted: [0,1,2,3,4], description: "Shift all four elements right, insert 2 at front" },

    // Insert 10
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [4, 5], swapping: [], sorted: [0,1,2,3,4], description: "Take 10, compare with 9 (already larger) – no shift needed" },
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [], swapping: [], sorted: [0,1,2,3,4,5], description: "10 is in correct position" },

    // Insert 1
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [5, 6], swapping: [], sorted: [0,1,2,3,4,5], description: "Take 1, compare with 10" },
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [4, 6], swapping: [], sorted: [0,1,2,3,4,5], description: "Compare 1 with 9" },
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [3, 6], swapping: [], sorted: [0,1,2,3,4,5], description: "Compare 1 with 8" },
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [2, 6], swapping: [], sorted: [0,1,2,3,4,5], description: "Compare 1 with 6" },
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [1, 6], swapping: [], sorted: [0,1,2,3,4,5], description: "Compare 1 with 4" },
    { array: [2, 4, 6, 8, 9, 10, 1], comparing: [0, 6], swapping: [], sorted: [0,1,2,3,4,5], description: "Compare 1 with 2" },
    { array: [1, 2, 4, 6, 8, 9, 10], comparing: [], swapping: [0,1,2,3,4,5,6], sorted: [0,1,2,3,4,5,6], description: "Shift all six elements right, insert 1 at front" },

    // Final
    { array: [1, 2, 4, 6, 8, 9, 10], comparing: [], swapping: [], sorted: [0,1,2,3,4,5,6], description: "Array fully sorted! 🎉" }
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
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">Insertion Sort Visualization</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Initial: [9, 6, 4, 8, 2, 10, 1]</p>

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
        <span className="flex items-center text-gray-700 dark:text-gray-300"><span className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></span> Comparing</span>
        <span className="flex items-center text-gray-700 dark:text-gray-300"><span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span> Swapping/Inserting</span>
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
  );
};

export default InsertionSort;
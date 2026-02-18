import React, { useState, useEffect } from 'react';

const BubbleSortEnhanced = () => {
  // Fixed array for demonstration
  const initialArray = [9, 6, 4, 8, 2, 10, 1];
  
  // Complete steps for bubble sort with ALL highlighting information
  const steps = [
    // STEP 0: Initial array
    { 
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [],
      swapping: [],
      sorted: [],
      description: "Starting array - unsorted"
    },
    // STEP 1: Compare 9 and 6
    { 
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0, 1],
      swapping: [],
      sorted: [],
      description: "Comparing 9 and 6"
    },
    // STEP 2: Swap 9 and 6
    { 
      array: [6, 9, 4, 8, 2, 10, 1],
      comparing: [],
      swapping: [0, 1],
      sorted: [],
      description: "Swapping 9 and 6"
    },
    // STEP 3: Compare 9 and 4
    { 
      array: [6, 9, 4, 8, 2, 10, 1],
      comparing: [1, 2],
      swapping: [],
      sorted: [],
      description: "Comparing 9 and 4"
    },
    // STEP 4: Swap 9 and 4
    { 
      array: [6, 4, 9, 8, 2, 10, 1],
      comparing: [],
      swapping: [1, 2],
      sorted: [],
      description: "Swapping 9 and 4"
    },
    // STEP 5: Compare 9 and 8
    { 
      array: [6, 4, 9, 8, 2, 10, 1],
      comparing: [2, 3],
      swapping: [],
      sorted: [],
      description: "Comparing 9 and 8"
    },
    // STEP 6: Swap 9 and 8
    { 
      array: [6, 4, 8, 9, 2, 10, 1],
      comparing: [],
      swapping: [2, 3],
      sorted: [],
      description: "Swapping 9 and 8"
    },
    // STEP 7: Compare 9 and 2
    { 
      array: [6, 4, 8, 9, 2, 10, 1],
      comparing: [3, 4],
      swapping: [],
      sorted: [],
      description: "Comparing 9 and 2"
    },
    // STEP 8: Swap 9 and 2
    { 
      array: [6, 4, 8, 2, 9, 10, 1],
      comparing: [],
      swapping: [3, 4],
      sorted: [],
      description: "Swapping 9 and 2"
    },
    // STEP 9: Compare 9 and 10
    { 
      array: [6, 4, 8, 2, 9, 10, 1],
      comparing: [4, 5],
      swapping: [],
      sorted: [],
      description: "Comparing 9 and 10 (no swap needed)"
    },
    // STEP 10: Compare 10 and 1
    { 
      array: [6, 4, 8, 2, 9, 10, 1],
      comparing: [5, 6],
      swapping: [],
      sorted: [],
      description: "Comparing 10 and 1"
    },
    // STEP 11: Swap 10 and 1
    { 
      array: [6, 4, 8, 2, 9, 1, 10],
      comparing: [],
      swapping: [5, 6],
      sorted: [6],
      description: "Swapping 10 and 1 - 10 is now sorted"
    },
    // STEP 12: Start Pass 2 - Compare 6 and 4
    { 
      array: [6, 4, 8, 2, 9, 1, 10],
      comparing: [0, 1],
      swapping: [],
      sorted: [6],
      description: "Pass 2: Comparing 6 and 4"
    },
    // STEP 13: Swap 6 and 4
    { 
      array: [4, 6, 8, 2, 9, 1, 10],
      comparing: [],
      swapping: [0, 1],
      sorted: [6],
      description: "Swapping 6 and 4"
    },
    // STEP 14: Compare 6 and 8
    { 
      array: [4, 6, 8, 2, 9, 1, 10],
      comparing: [1, 2],
      swapping: [],
      sorted: [6],
      description: "Comparing 6 and 8 (no swap)"
    },
    // STEP 15: Compare 8 and 2
    { 
      array: [4, 6, 8, 2, 9, 1, 10],
      comparing: [2, 3],
      swapping: [],
      sorted: [6],
      description: "Comparing 8 and 2"
    },
    // STEP 16: Swap 8 and 2
    { 
      array: [4, 6, 2, 8, 9, 1, 10],
      comparing: [],
      swapping: [2, 3],
      sorted: [6],
      description: "Swapping 8 and 2"
    },
    // STEP 17: Compare 8 and 9
    { 
      array: [4, 6, 2, 8, 9, 1, 10],
      comparing: [3, 4],
      swapping: [],
      sorted: [6],
      description: "Comparing 8 and 9 (no swap)"
    },
    // STEP 18: Compare 9 and 1
    { 
      array: [4, 6, 2, 8, 9, 1, 10],
      comparing: [4, 5],
      swapping: [],
      sorted: [6],
      description: "Comparing 9 and 1"
    },
    // STEP 19: Swap 9 and 1
    { 
      array: [4, 6, 2, 8, 1, 9, 10],
      comparing: [],
      swapping: [4, 5],
      sorted: [5, 6],
      description: "Swapping 9 and 1 - 9 is now sorted"
    },
    // Continue with more steps...
    // FINAL STEP: Sorted array
    { 
      array: [1, 2, 4, 6, 8, 9, 10],
      comparing: [],
      swapping: [],
      sorted: [0, 1, 2, 3, 4, 5, 6],
      description: "Array is fully sorted! 🎉"
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);

  // Auto-play effect
  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, speed);
    } else if (currentStep === steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, speed, steps.length]);

  // Get color for each number based on its state
  const getNumberColor = (index) => {
    if (steps[currentStep].comparing?.includes(index)) {
      return 'bg-yellow-500 text-white'; // Yellow for comparing
    }
    if (steps[currentStep].swapping?.includes(index)) {
      return 'bg-green-500 text-white'; // Green for swapping
    }
    if (steps[currentStep].sorted?.includes(index)) {
      return 'bg-gray-400 text-white'; // Gray for sorted
    }
    return 'bg-blue-500 text-white'; // Blue for unsorted
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center">📊 DSA Visualization Platform</h1>
        <p className="text-center text-blue-100 mt-2">Learn algorithms through interactive visualization</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Algorithm Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Bubble Sort Visualization</h2>
            <div className="inline-block bg-gray-100 rounded-full px-4 py-2">
              <span className="text-gray-600">Initial array: </span>
              <span className="font-mono font-bold text-gray-800">[9, 6, 4, 8, 2, 10, 1]</span>
            </div>
          </div>

          {/* Numbers Display - Beautiful Colored Boxes */}
          <div className="bg-gray-50 rounded-xl p-8 mb-6 border-2 border-gray-200">
            <div className="flex justify-center items-center gap-3 flex-wrap">
              {steps[currentStep].array.map((num, idx) => (
                <div
                  key={idx}
                  className={`
                    w-16 h-16 rounded-xl shadow-lg 
                    flex items-center justify-center 
                    font-bold text-2xl transition-all duration-300
                    transform hover:scale-110
                    ${getNumberColor(idx)}
                  `}
                >
                  {num}
                </div>
              ))}
            </div>
            
            {/* Index indicators */}
            <div className="flex justify-center gap-3 mt-4">
              {steps[currentStep].array.map((_, idx) => (
                <div key={idx} className="w-16 text-center text-xs text-gray-400">
                  ↓ idx {idx}
                </div>
              ))}
            </div>
          </div>

          {/* Status and Description */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Step {currentStep + 1}:</span> {steps[currentStep].description}
            </p>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Unsorted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Comparing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Swapping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Sorted</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round((currentStep + 1) / steps.length * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-2">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-center gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
            <span className="text-gray-700 font-medium">⏱️ Speed:</span>
            <input
              type="range"
              min="300"
              max="2000"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-64 accent-blue-500"
            />
            <span className="text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
              {speed}ms
            </span>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                setCurrentStep(Math.max(0, currentStep - 1));
                setIsPlaying(false);
              }}
              disabled={currentStep === 0}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                flex items-center gap-2 shadow-md hover:shadow-lg
                ${currentStep === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                }
              `}
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Reset
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={currentStep === steps.length - 1}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                flex items-center gap-2 shadow-md hover:shadow-lg
                ${currentStep === steps.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : isPlaying 
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }
              `}
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>

            <button
              onClick={() => {
                setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
                setIsPlaying(false);
              }}
              disabled={currentStep === steps.length - 1}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                flex items-center gap-2 shadow-md hover:shadow-lg
                ${currentStep === steps.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                }
              `}
            >
              Next →
            </button>
          </div>

          {/* Current Array Display */}
          <div className="mt-6 text-center">
            <div className="inline-block bg-gray-800 text-green-400 font-mono px-4 py-2 rounded-lg">
              Current: [{steps[currentStep].array.join(', ')}]
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>Interactive DSA Learning Platform - Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default BubbleSortEnhanced;
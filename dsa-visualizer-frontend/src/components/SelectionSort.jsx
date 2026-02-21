import React, { useState, useEffect } from 'react';

const SelectionSort = () => {
    const initialArray = [9, 6, 4, 8, 2, 10, 1];
    const steps = [
        //step 0: Initial state
        {
            array: [9,6,4,8,2,10,1],
            comparing: [],
            swapping: [],
            sorted:[],
            description: "Starting array - unsorted"
        },
        // Pass 1: find minimum in whole array
        {
            array: [9,6,4,8,2,10,1],
            comparing: [0,1],
            swapping:[],
            sorted: [],
            description: "Comparing 9 and 6 to find minimum"
        },
        {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [0, 2],
      swapping: [],
      sorted: [],
      description: "Current minimum is 6, comparing with 4"
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [2, 3],
      swapping: [],
      sorted: [],
      description: "New minimum 4, comparing with 8"
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [2, 4],
      swapping: [],
      sorted: [],
      description: "Minimum still 4, comparing with 2"
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [4, 5],
      swapping: [],
      sorted: [],
      description: "New minimum 2, comparing with 10"
    },
    {
      array: [9, 6, 4, 8, 2, 10, 1],
      comparing: [4, 6],
      swapping: [],
      sorted: [],
      description: "New minimum 1, end of pass"
    },
    // Swap minimum (index 6) with index 0
    {
      array: [1, 6, 4, 8, 2, 10, 9],
      comparing: [],
      swapping: [0, 6],
      sorted: [0],
      description: "Swapped 1 with 9 – index 0 is now sorted"
    },
    // Pass 2: find minimum in indices 1..6
    {
      array: [1, 6, 4, 8, 2, 10, 9],
      comparing: [1, 2],
      swapping: [],
      sorted: [0],
      description: "Comparing 6 and 4 – new minimum 4"
    },
    {
      array: [1, 6, 4, 8, 2, 10, 9],
      comparing: [2, 3],
      swapping: [],
      sorted: [0],
      description: "Comparing 4 and 8 – minimum still 4"
    },
    {
      array: [1, 6, 4, 8, 2, 10, 9],
      comparing: [2, 4],
      swapping: [],
      sorted: [0],
      description: "Comparing 4 and 2 – new minimum 2"
    },
    {
      array: [1, 6, 4, 8, 2, 10, 9],
      comparing: [4, 5],
      swapping: [],
      sorted: [0],
      description: "Comparing 2 and 10 – minimum still 2"
    },
    {
      array: [1, 6, 4, 8, 2, 10, 9],
      comparing: [4, 6],
      swapping: [],
      sorted: [0],
      description: "Comparing 2 and 9 – minimum remains 2"
    },
    // Swap minimum (index 4) with index 1
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [],
      swapping: [1, 4],
      sorted: [0, 1],
      description: "Swapped 2 with 6 – indices 0‑1 are sorted"
    },
    // Pass 3: find minimum in indices 2..6
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [2, 3],
      swapping: [],
      sorted: [0, 1],
      description: "Comparing 4 and 8 – minimum 4"
    },
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [2, 4],
      swapping: [],
      sorted: [0, 1],
      description: "Comparing 4 and 6 – minimum still 4"
    },
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [2, 5],
      swapping: [],
      sorted: [0, 1],
      description: "Comparing 4 and 10 – still 4"
    },
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [2, 6],
      swapping: [],
      sorted: [0, 1],
      description: "Comparing 4 and 9 – 4 is minimum"
    },
    // No swap needed (min already at index 2)
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [],
      swapping: [],
      sorted: [0, 1, 2],
      description: "Minimum already in place – index 2 is sorted"
    },
    // Pass 4: find minimum in indices 3..6
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [3, 4],
      swapping: [],
      sorted: [0, 1, 2],
      description: "Comparing 8 and 6 – new minimum 6"
    },
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [4, 5],
      swapping: [],
      sorted: [0, 1, 2],
      description: "Comparing 6 and 10 – minimum still 6"
    },
    {
      array: [1, 2, 4, 8, 6, 10, 9],
      comparing: [4, 6],
      swapping: [],
      sorted: [0, 1, 2],
      description: "Comparing 6 and 9 – minimum remains 6"
    },
    // Swap minimum (index 4) with index 3
    {
      array: [1, 2, 4, 6, 8, 10, 9],
      comparing: [],
      swapping: [3, 4],
      sorted: [0, 1, 2, 3],
      description: "Swapped 6 with 8 – index 3 is sorted"
    },
    // Pass 5: find minimum in indices 4..6
    {
      array: [1, 2, 4, 6, 8, 10, 9],
      comparing: [4, 5],
      swapping: [],
      sorted: [0, 1, 2, 3],
      description: "Comparing 8 and 10 – minimum 8"
    },
    {
      array: [1, 2, 4, 6, 8, 10, 9],
      comparing: [4, 6],
      swapping: [],
      sorted: [0, 1, 2, 3],
      description: "Comparing 8 and 9 – minimum still 8"
    },
    // No swap needed (min already at index 4)
    {
      array: [1, 2, 4, 6, 8, 10, 9],
      comparing: [],
      swapping: [],
      sorted: [0, 1, 2, 3, 4],
      description: "Index 4 is already correct – sorted"
    },
    // Pass 6: find minimum in indices 5..6
    {
      array: [1, 2, 4, 6, 8, 10, 9],
      comparing: [5, 6],
      swapping: [],
      sorted: [0, 1, 2, 3, 4],
      description: "Comparing 10 and 9 – new minimum 9"
    },
    // Swap minimum (index 6) with index 5
    {
      array: [1, 2, 4, 6, 8, 9, 10],
      comparing: [],
      swapping: [5, 6],
      sorted: [0, 1, 2, 3, 4, 5, 6],
      description: "Swapped 9 with 10 – array fully sorted! 🎉"
    },
    // Final state
    {
      array: [1, 2, 4, 6, 8, 9, 10],
      comparing: [],
      swapping: [],
      sorted: [0, 1, 2, 3, 4, 5, 6],
      description: "Selection sort complete!"
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-2">Selection Sort Visualization</h2>
      <p className="text-center text-gray-600 mb-6">Initial: [9, 6, 4, 8, 2, 10, 1]</p>

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
        <span className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span> Unsorted</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></span> Comparing</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span> Swapping</span>
        <span className="flex items-center"><span className="w-3 h-3 bg-gray-400 rounded-full mr-1"></span> Sorted</span>
      </div>

      {/* Description */}
      <div className="bg-blue-50 p-3 rounded-lg mb-4 border-l-4 border-blue-500">
        <p className="text-gray-700"><span className="font-semibold">Step {currentStep+1}:</span> {steps[currentStep].description}</p>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{Math.round((currentStep+1)/steps.length*100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((currentStep+1)/steps.length)*100}%` }}></div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-1">Step {currentStep+1} of {steps.length}</div>
      </div>

      {/* Speed control */}
      <div className="flex items-center justify-center gap-4 mb-4 bg-gray-50 p-3 rounded-lg">
        <span className="text-gray-700">⏱️ Speed:</span>
        <input type="range" min="300" max="2000" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-64 accent-blue-500" />
        <span className="text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">{speed}ms</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <button onClick={() => { setCurrentStep(Math.max(0, currentStep-1)); setIsPlaying(false); }} disabled={currentStep === 0} className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-all ${currentStep === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>← Previous</button>
        <button onClick={() => { setCurrentStep(0); setIsPlaying(false); }} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold shadow-md">Reset</button>
        <button onClick={() => setIsPlaying(!isPlaying)} disabled={currentStep === steps.length-1} className={`px-6 py-3 rounded-lg font-semibold shadow-md ${currentStep === steps.length-1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : isPlaying ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>{isPlaying ? '⏸️ Pause' : '▶️ Play'}</button>
        <button onClick={() => { setCurrentStep(Math.min(steps.length-1, currentStep+1)); setIsPlaying(false); }} disabled={currentStep === steps.length-1} className={`px-6 py-3 rounded-lg font-semibold shadow-md ${currentStep === steps.length-1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>Next →</button>
      </div>

      {/* Current array */}
      <div className="mt-4 text-center">
        <div className="inline-block bg-gray-800 text-green-400 font-mono px-4 py-2 rounded-lg">
          Current: [{steps[currentStep].array.join(', ')}]
        </div>
      </div>
    </div>
  );
};

export default SelectionSort;

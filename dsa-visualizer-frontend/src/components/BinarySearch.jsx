import React, { useState, useEffect } from 'react';

const BinarySearch = () => {
  const pseudocodeLines = [
    "procedure binarySearch(arr, target):",
    "  low = 0",
    "  high = length(arr) - 1",
    "  while low <= high:",
    "    mid = floor((low + high) / 2)",
    "    if arr[mid] == target:",
    "      return mid",
    "    else if arr[mid] < target:",
    "      low = mid + 1",
    "    else:",
    "      high = mid - 1",
    "  return -1"
  ];

  const sortedArray = [1, 2, 4, 6, 8, 9, 10];
  const target = 8;

  const steps = [
    {
      array: sortedArray,
      low: 0,
      high: 6,
      mid: null,
      found: null,
      description: "Initialize low = 0, high = 6",
      pseudocodeLine: 1
    },
    {
      array: sortedArray,
      low: 0,
      high: 6,
      mid: 3,
      found: null,
      description: "mid = floor((0+6)/2) = 3 → arr[3] = 6",
      pseudocodeLine: 3
    },
    {
      array: sortedArray,
      low: 0,
      high: 6,
      mid: 3,
      found: null,
      description: "6 < 8 → search right half (low = mid + 1 = 4)",
      pseudocodeLine: 5
    },
    {
      array: sortedArray,
      low: 4,
      high: 6,
      mid: null,
      description: "Now low = 4, high = 6",
      pseudocodeLine: 1
    },
    {
      array: sortedArray,
      low: 4,
      high: 6,
      mid: 5,
      found: null,
      description: "mid = floor((4+6)/2) = 5 → arr[5] = 9",
      pseudocodeLine: 3
    },
    {
      array: sortedArray,
      low: 4,
      high: 6,
      mid: 5,
      found: null,
      description: "9 > 8 → search left half (high = mid - 1 = 4)",
      pseudocodeLine: 7
    },
    {
      array: sortedArray,
      low: 4,
      high: 4,
      mid: null,
      description: "Now low = 4, high = 4",
      pseudocodeLine: 1
    },
    {
      array: sortedArray,
      low: 4,
      high: 4,
      mid: 4,
      found: null,
      description: "mid = floor((4+4)/2) = 4 → arr[4] = 8",
      pseudocodeLine: 3
    },
    {
      array: sortedArray,
      low: 4,
      high: 4,
      mid: 4,
      found: 4,
      description: "8 == 8 → target found at index 4! 🎉",
      pseudocodeLine: 4
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
    const step = steps[currentStep];
    if (step.found === index) return 'bg-green-600';
    if (step.mid === index) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  const getBorderStyle = (index) => {
    const step = steps[currentStep];
    if (step.low === index) return 'border-2 border-[#4ec9b0]';
    if (step.high === index) return 'border-2 border-[#ce9178]';
    return 'border-2 border-[#222222]';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#0a0a0a] text-gray-200 rounded-2xl shadow-2xl transition-all duration-300 font-mono border border-[#222222]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#569cd6] mb-2">Binary Search Visualization</h2>
        <p className="text-[#9cdcfe]">
          Array: <span className="text-[#ce9178]">[1, 2, 4, 6, 8, 9, 10]</span> | 
          Target: <span className="text-[#ce9178]">8</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column: Visualization */}
        <div className="lg:w-2/3 space-y-6">
          <div className="flex justify-center gap-3 flex-wrap">
            {steps[currentStep].array.map((num, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl ${getBgColor(idx)} ${getBorderStyle(idx)}`}
                >
                  {num}
                </div>
                <div className="text-xs mt-1 font-bold">
                  {steps[currentStep].low === idx && <span className="text-[#4ec9b0]">L</span>}
                  {steps[currentStep].mid === idx && <span className="text-yellow-500">M</span>}
                  {steps[currentStep].high === idx && <span className="text-[#ce9178]">H</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 flex-wrap text-sm">
            <div className="flex items-center gap-2"><span className="w-4 h-4 bg-blue-500 rounded-full"></span><span className="text-gray-300">Not examined</span></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 bg-yellow-500 rounded-full"></span><span className="text-gray-300">Mid (current)</span></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 bg-green-600 rounded-full"></span><span className="text-gray-300">Found</span></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-[#4ec9b0]"></span><span className="text-gray-300">Low</span></div>
            <div className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-[#ce9178]"></span><span className="text-gray-300">High</span></div>
          </div>

          <div className="bg-[#0d0d0d] p-4 rounded-lg border-l-4 border-[#569cd6]">
            <p className="text-gray-300">
              <span className="font-bold text-[#9cdcfe]">Step {currentStep + 1}:</span> {steps[currentStep].description}
            </p>
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>Progress</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-[#1a1a1a] rounded-full h-3 overflow-hidden">
              <div
                className="bg-[#4ec9b0] h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-1">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 bg-[#0d0d0d] p-3 rounded-lg">
            <span className="text-gray-300 font-medium">⏱️ Speed:</span>
            <input type="range" min="300" max="2000" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-48 md:w-64 accent-[#4ec9b0]" />
            <span className="text-gray-300 bg-[#1a1a1a] px-3 py-1 rounded-full shadow-sm">{speed}ms</span>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => { setCurrentStep(Math.max(0, currentStep-1)); setIsPlaying(false); }} disabled={currentStep === 0} className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 ${currentStep === 0 ? 'bg-[#1a1a1a] text-gray-500 cursor-not-allowed' : 'bg-[#0e639c] hover:bg-[#1177bb] text-white'}`}>← Previous</button>
            <button onClick={() => { setCurrentStep(0); setIsPlaying(false); }} className="px-6 py-3 bg-[#c2410c] hover:bg-[#b91c1c] text-white rounded-lg font-semibold hover:scale-105 active:scale-95 transition-all">Reset</button>
            <button onClick={() => setIsPlaying(!isPlaying)} disabled={currentStep === steps.length - 1} className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 ${currentStep === steps.length - 1 ? 'bg-[#1a1a1a] text-gray-500 cursor-not-allowed' : isPlaying ? 'bg-[#ca5100] hover:bg-[#b74700] text-white' : 'bg-[#2e7d32] hover:bg-[#1e5f20] text-white'}`}>{isPlaying ? '⏸️ Pause' : '▶️ Play'}</button>
            <button onClick={() => { setCurrentStep(Math.min(steps.length - 1, currentStep + 1)); setIsPlaying(false); }} disabled={currentStep === steps.length - 1} className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 ${currentStep === steps.length - 1 ? 'bg-[#1a1a1a] text-gray-500 cursor-not-allowed' : 'bg-[#0e639c] hover:bg-[#1177bb] text-white'}`}>Next →</button>
          </div>

          <div className="text-center text-sm text-gray-400">
            {steps[currentStep].low !== undefined && <span className="mr-4">low = {steps[currentStep].low}</span>}
            {steps[currentStep].high !== undefined && <span className="mr-4">high = {steps[currentStep].high}</span>}
            {steps[currentStep].mid !== undefined && <span>mid = {steps[currentStep].mid}</span>}
          </div>
        </div>

        <div className="lg:w-1/3 bg-[#0a0a0a] border border-[#222222] rounded-xl p-5 font-mono text-sm shadow-inner">
          <h3 className="text-lg font-bold text-[#569cd6] mb-4 flex items-center gap-2">📝 Pseudocode</h3>
          <div className="space-y-1 overflow-x-auto">
            {pseudocodeLines.map((line, idx) => (
              <div key={idx} className={`px-3 py-1.5 rounded transition-all duration-200 ${idx === steps[currentStep].pseudocodeLine ? 'bg-[#1a1a1a] text-[#d4d4d4] font-semibold border-l-4 border-[#569cd6]' : 'text-[#9cdcfe] hover:bg-[#1a1a1a]'}`}>{line}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinarySearch;
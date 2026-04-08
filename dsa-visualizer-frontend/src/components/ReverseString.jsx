import React, { useState, useEffect } from 'react';

const ReverseString = () => {
  const pseudocodeLines = [
    "procedure reverseString(s):",
    "  left = 0, right = length(s) - 1",
    "  while left < right:",
    "    swap s[left] and s[right]",
    "    left++",
    "    right--",
    "  return s"
  ];

  const [inputString, setInputString] = useState('hello');
  const [array, setArray] = useState(['h','e','l','l','o']);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);

  const generateSteps = (arr) => {
    const steps = [];
    let left = 0;
    let right = arr.length - 1;
    let currentArr = [...arr];

    steps.push({
      array: [...currentArr],
      left,
      right,
      swapping: [],
      description: `Start: left = ${left}, right = ${right}`,
      pseudocodeLine: 1
    });

    while (left < right) {
      steps.push({
        array: [...currentArr],
        left,
        right,
        swapping: [left, right],
        description: `Swap arr[${left}] = '${currentArr[left]}' with arr[${right}] = '${currentArr[right]}'`,
        pseudocodeLine: 3
      });
      // Perform swap
      [currentArr[left], currentArr[right]] = [currentArr[right], currentArr[left]];
      steps.push({
        array: [...currentArr],
        left,
        right,
        swapping: [],
        description: `After swap → ${currentArr.join('')}`,
        pseudocodeLine: 4
      });
      left++;
      right--;
      if (left < right) {
        steps.push({
          array: [...currentArr],
          left,
          right,
          swapping: [],
          description: `Move pointers: left = ${left}, right = ${right}`,
          pseudocodeLine: 2
        });
      }
    }

    steps.push({
      array: [...currentArr],
      left,
      right,
      swapping: [],
      description: `Reversed string = ${currentArr.join('')}`,
      pseudocodeLine: 5
    });
    return steps;
  };

  useEffect(() => {
    const newArray = inputString.split('');
    setArray(newArray);
    setSteps(generateSteps(newArray));
    setCurrentStep(0);
    setIsPlaying(false);
  }, [inputString]);

  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < steps.length - 1) {
      timer = setTimeout(() => setCurrentStep(currentStep + 1), speed);
    } else if (currentStep === steps.length - 1) setIsPlaying(false);
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, speed, steps.length]);

  const getBgColor = (idx) => {
    const step = steps[currentStep];
    if (!step) return 'bg-blue-500';
    if (step.swapping?.includes(idx)) return 'bg-green-500';
    if (step.left === idx || step.right === idx) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#0a0a0a] text-gray-200 rounded-2xl shadow-2xl font-mono border border-[#222222]">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#569cd6] mb-2">Reverse a String</h2>
        <div className="flex justify-center gap-4 mb-4">
          <span className="bg-[#2d2d2d] px-3 py-1 rounded-full text-sm border border-[#3c3c3c]">⏱️ Time: <span className="text-[#4ec9b0]">O(n)</span></span>
          <span className="bg-[#2d2d2d] px-3 py-1 rounded-full text-sm border border-[#3c3c3c]">💾 Space: <span className="text-[#4ec9b0]">O(1)</span></span>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          className="bg-[#1e1e1e] border border-[#3c3c3c] rounded px-3 py-1 focus:border-[#569cd6] text-center"
        />
      </div>

      <div className="flex justify-center gap-3 flex-wrap mb-6">
        {steps[currentStep]?.array.map((ch, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 ${getBgColor(idx)} border-2 border-[#222222]`}>
              {ch}
            </div>
            <div className="text-xs mt-1">
              {steps[currentStep]?.left === idx && <span className="text-[#4ec9b0]">L</span>}
              {steps[currentStep]?.right === idx && <span className="text-[#ce9178]">R</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 flex-wrap text-sm">
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-blue-500 rounded-full"></span>Character</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-yellow-500 rounded-full"></span>Pointer</div>
        <div className="flex items-center gap-2"><span className="w-4 h-4 bg-green-500 rounded-full"></span>Swapping</div>
      </div>

      <div className="bg-[#0d0d0d] p-4 rounded-lg border-l-4 border-[#569cd6] mb-4">
        <p className="text-gray-300"><span className="font-bold text-[#9cdcfe]">Step {currentStep+1}:</span> {steps[currentStep]?.description}</p>
      </div>

      {/* Progress, speed, buttons (same as binary search) */}
      <div>
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>Progress</span><span>{Math.round(((currentStep+1)/steps.length)*100)}%</span>
        </div>
        <div className="w-full bg-[#1a1a1a] rounded-full h-3 overflow-hidden">
          <div className="bg-[#4ec9b0] h-3 rounded-full transition-all" style={{ width: `${((currentStep+1)/steps.length)*100}%` }}></div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-1">Step {currentStep+1} of {steps.length}</div>
      </div>

      <div className="flex items-center justify-center gap-4 bg-[#0d0d0d] p-3 rounded-lg mt-4">
        <span>⏱️ Speed:</span>
        <input type="range" min="300" max="2000" value={speed} onChange={(e) => setSpeed(e.target.value)} className="w-48 md:w-64 accent-[#4ec9b0]" />
        <span className="bg-[#1a1a1a] px-3 py-1 rounded-full">{speed}ms</span>
      </div>

      <div className="flex justify-center gap-4 flex-wrap mt-4">
        <button onClick={() => { setCurrentStep(Math.max(0, currentStep-1)); setIsPlaying(false); }} disabled={currentStep===0} className={`px-6 py-3 rounded-lg font-semibold transition-all ${currentStep===0 ? 'bg-[#1a1a1a] text-gray-500 cursor-not-allowed' : 'bg-[#0e639c] hover:bg-[#1177bb] text-white'}`}>← Prev</button>
        <button onClick={() => { setCurrentStep(0); setIsPlaying(false); }} className="px-6 py-3 bg-[#c2410c] hover:bg-[#b91c1c] text-white rounded-lg">Reset</button>
        <button onClick={() => setIsPlaying(!isPlaying)} disabled={currentStep===steps.length-1} className={`px-6 py-3 rounded-lg font-semibold ${currentStep===steps.length-1 ? 'bg-[#1a1a1a] text-gray-500 cursor-not-allowed' : isPlaying ? 'bg-[#ca5100] hover:bg-[#b74700] text-white' : 'bg-[#2e7d32] hover:bg-[#1e5f20] text-white'}`}>{isPlaying ? '⏸️ Pause' : '▶️ Play'}</button>
        <button onClick={() => { setCurrentStep(Math.min(steps.length-1, currentStep+1)); setIsPlaying(false); }} disabled={currentStep===steps.length-1} className={`px-6 py-3 rounded-lg font-semibold ${currentStep===steps.length-1 ? 'bg-[#1a1a1a] text-gray-500 cursor-not-allowed' : 'bg-[#0e639c] hover:bg-[#1177bb] text-white'}`}>Next →</button>
      </div>

      <div className="mt-6 bg-[#0a0a0a] border border-[#222222] rounded-xl p-5 font-mono text-sm shadow-inner">
        <h3 className="text-lg font-bold text-[#569cd6] mb-4">📝 Pseudocode</h3>
        <div className="space-y-1">
          {pseudocodeLines.map((line, idx) => (
            <div key={idx} className={`px-3 py-1.5 rounded transition-all duration-200 ${idx === steps[currentStep]?.pseudocodeLine ? 'bg-[#1a1a1a] text-[#d4d4d4] font-semibold border-l-4 border-[#569cd6]' : 'text-[#9cdcfe] hover:bg-[#1a1a1a]'}`}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReverseString;
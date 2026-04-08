// src/components/SearchHome.jsx
import React from 'react';
import SearchBarWithSuggestions from './SearchBarWithSuggestions';

const SearchHome = ({ onSelectAlgorithm }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      {/* Logo */}
      <div className="mb-6">
        <LogoIcon />
      </div>

      <h1 className="text-4xl font-bold text-[#9cdcfe] mb-2">AlgoScape</h1>
      <p className="text-gray-400 mb-8">Visualize algorithms, understand deeply.</p>

      {/* Centered search bar with suggestions */}
      <SearchBarWithSuggestions
        onSelectAlgorithm={onSelectAlgorithm}
        placeholder="Ask about an algorithm... (e.g., 'bubble sort', 'binary search')"
        compact={false}
      />

      <p className="text-xs text-gray-500 mt-3">
        Try: bubble sort, binary search, merge sort, koko bananas, aggressive cows...
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {['Bubble Sort', 'Binary Search', 'Merge Sort', 'Quick Sort', 'Koko Eating Bananas'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              // Simulate selecting the suggestion
              const match = { name: suggestion, id: suggestion.toLowerCase().replace(/ /g, '-') };
              onSelectAlgorithm(match);
            }}
            className="px-3 py-1 text-sm bg-[#2d2d2d] hover:bg-[#3c3c3c] rounded-full text-gray-300 transition"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

// Logo SVG component (same as before)
const LogoIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#0e639c" />
    <path d="M20 32L28 24L20 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M44 32L36 24L44 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M28 44L36 36L28 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="32" cy="32" r="2" fill="white"/>
    <path d="M48 44L52 40L48 36" stroke="#9cdcfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M16 44L12 40L16 36" stroke="#9cdcfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default SearchHome;
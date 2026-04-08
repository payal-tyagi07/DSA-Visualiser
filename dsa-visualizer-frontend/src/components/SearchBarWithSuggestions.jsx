// src/components/SearchBarWithSuggestions.jsx
import React, { useState } from 'react';
import algorithms from '../data/algorithms';

const SearchBarWithSuggestions = ({ onSelectAlgorithm, placeholder, compact = false }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const lowerQuery = value.toLowerCase();
    const matches = algorithms.filter(algo =>
      algo.name.toLowerCase().includes(lowerQuery) ||
      algo.keywords.some(kw => kw.includes(lowerQuery))
    );
    setSuggestions(matches.slice(0, 5));
    setShowSuggestions(true);
  };

  const handleSelect = (algorithm) => {
    setQuery(algorithm.name);
    setShowSuggestions(false);
    onSelectAlgorithm(algorithm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    } else if (query.trim() !== '') {
      onSelectAlgorithm(null, query);
    }
  };

  return (
    <div className={`relative w-full ${compact ? 'max-w-md mx-auto' : 'max-w-2xl mx-auto'}`}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder || "Search algorithm"}
          className={`w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded-2xl px-4 py-2 pr-10 text-gray-200 focus:outline-none focus:border-[#569cd6] focus:ring-1 focus:ring-[#569cd6] ${compact ? 'text-sm py-1.5' : 'text-lg py-3'}`}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9cdcfe] hover:text-white transition"
        >
          🔍
        </button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl shadow-lg overflow-hidden">
          {suggestions.map((algo) => (
            <div
              key={algo.id}
              onClick={() => handleSelect(algo)}
              className="px-4 py-2 hover:bg-[#2d2d2d] cursor-pointer text-gray-200 text-sm"
            >
              {algo.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBarWithSuggestions;
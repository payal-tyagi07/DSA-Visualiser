import React from 'react';
import A2ZSheetLayout from './components/A2ZSheetLayout';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1e1e1e] text-gray-200 font-mono">
      {/* Fixed dark header */}
      <header className="bg-[#2d2d2d] border-b border-[#3c3c3c] py-3 px-6 flex items-center gap-3 shadow-md">
        <div className="w-8 h-8 bg-[#007acc] rounded-lg flex items-center justify-center text-white font-bold text-lg">
          &lt;/&gt;
        </div>
        <h1 className="text-xl font-bold text-[#9cdcfe] tracking-wide">DSA VISUALIZER</h1>
      </header>

      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        <A2ZSheetLayout />
      </div>
    </div>
  );
}

export default App;
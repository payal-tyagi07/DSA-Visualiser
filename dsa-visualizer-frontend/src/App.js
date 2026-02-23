import React, { useContext } from 'react';
import A2ZSheetLayout from './components/A2ZSheetLayout';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Header - fixed height */}
      <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">DSA Visualizer</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* Main content - takes remaining height */}
      <div className="flex-1 overflow-hidden">
        <A2ZSheetLayout />
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import BubbleSortEnhanced from './components/BubbleSortEnhanced';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center">
          DSA Visualization Platform
        </h1>
      </header>
      
      <main className="py-8">
        <BubbleSortEnhanced />
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>Interactive DSA Learning Platform - Built with React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;
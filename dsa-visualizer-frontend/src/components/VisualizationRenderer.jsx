import React from 'react';
import BubbleSortEnhanced from './BubbleSortEnhanced';
import SelectionSort from './SelectionSort';

const componentMap = {
  'bubble-sort': BubbleSortEnhanced,
  'selection-sort': SelectionSort,
};

const VisualizationRenderer = ({ algorithm }) => {
  const Component = componentMap[algorithm.id];

  if (!Component) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{algorithm.name}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Visualization coming soon!</p>
          <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-yellow-700 dark:text-yellow-200">
              This algorithm is in our roadmap. Check back soon!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Component />
    </div>
  );
};

export default VisualizationRenderer;
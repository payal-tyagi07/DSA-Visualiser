import React from 'react';

// Import sorting components (if not already imported elsewhere)
import BubbleSortEnhanced from './BubbleSortEnhanced';
import SelectionSort from './SelectionSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';
import QuickSort from './QuickSort';

// Import binary search components
import BinarySearch from './BinarySearch';
import LowerBoundSearch from './LowerBoundSearch';
import UpperBoundSearch from './UpperBoundSearch';
import FirstLastOccurrence from './FirstLastOccurrence';
import SearchRotated from './SearchRotated';
import FindMinRotated from './FindMinRotated';
import SingleElementSorted from './SingleElementSorted';
import PeakElement from './PeakElement';
import Search2DMatrix from './Search2DMatrix';
import SquareRoot from './SquareRoot';
import KokoBananas from './KokoBananas';
import Bouquets from './Bouquets';
import ShipCapacity from './ShipCapacity';
import KthMissing from './KthMissing';
import AggressiveCows from './AggressiveCows';
import BookAllocation from './BookAllocation';
import SplitArrayLargestSum from './SplitArrayLargestSum';
import MedianTwoArrays from './MedianTwoArrays';
import KthTwoArrays from './KthTwoArrays';
import GasStations from './GasStations';
import PeakElement2D from './PeakElement2D';
import MatrixMedian from './MatrixMedian';

// Map algorithm IDs to their components
const componentMap = {
  // Sorting
  'bubble-sort': BubbleSortEnhanced,
  'selection-sort': SelectionSort,
  'insertion-sort': InsertionSort,
  'merge-sort': MergeSort,
  'quick-sort': QuickSort,

  // Binary search (basic)
  'binary-search': BinarySearch,
  'lower-bound': LowerBoundSearch,
  'upper-bound': UpperBoundSearch,
  'first-last-occurrence': FirstLastOccurrence,
  'search-rotated': SearchRotated,
  'find-min-rotated': FindMinRotated,
  'single-element': SingleElementSorted,
  'peak-element': PeakElement,

  // Binary search on 2D & answer concept
  'search-2d-matrix': Search2DMatrix,
  'peak-element-2d': PeakElement2D,
  'matrix-median': MatrixMedian,
  'sqrt': SquareRoot,
  'koko-eating-bananas': KokoBananas,
  'minimum-days-bouquets': Bouquets,
  'ship-capacity': ShipCapacity,
  'kth-missing': KthMissing,
  'aggressive-cows': AggressiveCows,
  'book-allocation': BookAllocation,
  'split-array': SplitArrayLargestSum,
  'median-two-arrays': MedianTwoArrays,
  'kth-two-arrays': KthTwoArrays,
  'gas-stations': GasStations,
};

const VisualizationRenderer = ({ algorithm }) => {
  const Component = componentMap[algorithm.id];

  if (!Component) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center p-8 bg-[#0a0a0a] border border-[#222222] rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-[#569cd6] mb-2">{algorithm.name}</h3>
          <p className="text-gray-400 mb-4">Visualization coming soon!</p>
          <div className="bg-[#2d2d2d] border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-sm text-yellow-500">
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
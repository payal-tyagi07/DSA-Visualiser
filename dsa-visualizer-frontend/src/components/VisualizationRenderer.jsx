// src/components/VisualizationRenderer.jsx
import React from 'react';

// ---------- Sorting ----------
import BubbleSortEnhanced from './BubbleSortEnhanced';
import SelectionSort from './SelectionSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';
import QuickSort from './QuickSort';

// ---------- Binary Search (1D) ----------
import BinarySearch from './BinarySearch';
import LowerBoundSearch from './LowerBoundSearch';
import UpperBoundSearch from './UpperBoundSearch';
import FirstLastOccurrence from './FirstLastOccurrence';
import SearchRotated from './SearchRotated';
import FindMinRotated from './FindMinRotated';
import SingleElementSorted from './SingleElementSorted';
import PeakElement from './PeakElement';

// ---------- Binary Search (2D) ----------
import Search2DMatrix from './Search2DMatrix';
import PeakElement2D from './PeakElement2D';
import MatrixMedian from './MatrixMedian';

// ---------- Binary Search (Answer Concept) ----------
import SquareRoot from './SquareRoot';
import KokoBananas from './KokoBananas';
import ShipCapacity from './ShipCapacity';
import KthMissing from './KthMissing';
import AggressiveCows from './AggressiveCows';
import BookAllocation from './BookAllocation';
import SplitArrayLargestSum from './SplitArrayLargestSum';
import GasStations from './GasStations';
import Bouquets from './Bouquets';
import MedianTwoArrays from './MedianTwoArrays';
import KthTwoArrays from './KthTwoArrays';

// ---------- Strings ----------
import ReverseString from './ReverseString';
// New string algorithms (if you create them, import here)
// import ValidParentheses from './ValidParentheses'; // already below

// ---------- Linked List ----------
import ReverseLinkedList from './ReverseLinkedList';
import DetectCycle from './DetectCycle';

// ---------- Recursion ----------
import Factorial from './Factorial';
import Fibonacci from './Fibonacci';
import ClimbingStairs from './ClimbingStairs';

// ---------- Array Algorithms (New) ----------
import TwoSum from './TwoSum';
import Kadane from './Kadane';
import MajorityElement from './MajorityElement';

// ---------- Stack ----------
import ValidParentheses from './ValidParentheses';

// ---------- Tree ----------
import InorderTraversal from './InorderTraversal';

// ---------- Graph ----------
import BFS from './BFS';

// ---------- Component Map ----------
const componentMap = {
  // Sorting
  'bubble-sort': BubbleSortEnhanced,
  'selection-sort': SelectionSort,
  'insertion-sort': InsertionSort,
  'merge-sort': MergeSort,
  'quick-sort': QuickSort,

  // Binary Search (1D)
  'binary-search': BinarySearch,
  'lower-bound': LowerBoundSearch,
  'upper-bound': UpperBoundSearch,
  'first-last-occurrence': FirstLastOccurrence,
  'search-rotated': SearchRotated,
  'find-min-rotated': FindMinRotated,
  'single-element': SingleElementSorted,
  'peak-element': PeakElement,

  // Binary Search (2D)
  'search-2d-matrix': Search2DMatrix,
  'peak-element-2d': PeakElement2D,
  'matrix-median': MatrixMedian,

  // Binary Search (Answer Concept)
  'sqrt': SquareRoot,
  'koko-eating-bananas': KokoBananas,
  'ship-capacity': ShipCapacity,
  'kth-missing': KthMissing,
  'aggressive-cows': AggressiveCows,
  'book-allocation': BookAllocation,
  'split-array': SplitArrayLargestSum,
  'gas-stations': GasStations,
  'minimum-days-bouquets': Bouquets,
  'median-two-arrays': MedianTwoArrays,
  'kth-two-arrays': KthTwoArrays,

  // Strings
  'reverse-string': ReverseString,
  'valid-parentheses': ValidParentheses,

  // Linked List
  'reverse-linked-list': ReverseLinkedList,
  'detect-cycle': DetectCycle,

  // Recursion & DP
  'factorial': Factorial,
  'fibonacci': Fibonacci,
  'climbing-stairs': ClimbingStairs,

  // Array Algorithms
  '2sum': TwoSum,
  'kadane': Kadane,
  'majority-element': MajorityElement,

  // Tree
  'inorder-traversal': InorderTraversal,

  // Graph
  'bfs': BFS,
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
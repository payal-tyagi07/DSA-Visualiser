import React, { useState } from 'react';
import topics from '../data/a2zTopics';
import VisualizationRenderer from './VisualizationRenderer';

const A2ZSheetLayout = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  return (
    <div className="flex h-full bg-[#0a0a0a] text-gray-300 font-mono">
      {/* Sidebar – ultra‑dark with enhanced colors */}
      <div className="w-80 bg-[#111111] border-r border-[#222222] overflow-y-auto">
        {/* Header section */}
        <div className="p-4 bg-[#0d0d0d] border-b border-[#222222]">
          <h2 className="text-lg font-bold text-[#9cdcfe] flex items-center gap-2">
            <span>📚</span> DSA SHEET
          </h2>
          <p className="text-xs text-[#6a9955] mt-1">Visualize Your Code</p>
        </div>

        {/* Topics list */}
        <div className="p-2">
          {topics.map((topic) => (
            <div key={topic.id} className="mb-2">
              {/* Topic header */}
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full text-left p-2 bg-[#0d0d0d] hover:bg-[#1a1a1a] rounded flex justify-between items-center transition-colors border border-transparent hover:border-[#333333]"
              >
                <span className="text-[#9cdcfe] font-medium">{topic.name}</span>
                <span className="text-xs text-[#6a9955]">
                  {topic.completed || 0}/{topic.total}
                </span>
              </button>

              {/* Subtopics (expandable) */}
              {expandedTopics[topic.id] && (
                <div className="ml-4 mt-1 space-y-1">
                  {topic.subtopics.map((subtopic) => (
                    <div key={subtopic.id} className="border-l-2 border-[#222222] pl-3">
                      <h4 className="text-xs font-medium text-[#d4d4d4] mt-2 mb-1">
                        {subtopic.name}
                      </h4>
                      {subtopic.problems.map((problem) => (
                        <button
                          key={problem.id}
                          onClick={() => setSelectedAlgorithm(problem)}
                          className={`
                            w-full text-left p-1.5 text-xs rounded transition-colors
                            flex items-center gap-2
                            ${
                              selectedAlgorithm?.id === problem.id
                                ? 'bg-[#094771] text-white border-l-2 border-[#007acc] pl-2'
                                : 'text-[#9cdcfe] hover:bg-[#1a1a1a]'
                            }
                          `}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              problem.completed ? 'bg-[#6a9955]' : 'bg-[#3c3c3c]'
                            }`}
                          ></span>
                          {problem.name}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content area – unchanged */}
      <div className="flex-1 overflow-y-auto bg-[#0a0a0a] p-4">
        {selectedAlgorithm ? (
          <VisualizationRenderer algorithm={selectedAlgorithm} />
        ) : (
          <div className="h-full flex items-center justify-center text-[#6a9955]">
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-10">{'{ }'}</div>
              <h3 className="text-2xl font-bold text-[#9cdcfe] mb-2">Welcome to DSA Visualizer</h3>
              <p className="text-sm">Select an algorithm from the A2Z sheet to begin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default A2ZSheetLayout;
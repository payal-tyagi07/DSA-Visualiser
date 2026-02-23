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
    <div className="flex h-full bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-80 bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-xl font-bold">DSA VISUALISER</h2>
          <p className="text-sm text-blue-100 dark:text-blue-200">Interactive Learning Platform</p>
        </div>
        
        <div className="p-2">
          {topics.map((topic) => (
            <div key={topic.id} className="mb-2">
              {/* Topic Header */}
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg flex justify-between items-center"
              >
                <span className="font-semibold text-gray-800 dark:text-gray-200">{topic.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {topic.completed || 0}/{topic.total}
                </span>
              </button>
              
              {/* Subtopics */}
              {expandedTopics[topic.id] && (
                <div className="ml-4 mt-1 space-y-1">
                  {topic.subtopics.map((subtopic) => (
                    <div key={subtopic.id} className="border-l-2 border-gray-200 dark:border-gray-600 pl-3">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                        {subtopic.name}
                      </h4>
                      {subtopic.problems.map((problem) => (
                        <button
                          key={problem.id}
                          onClick={() => setSelectedAlgorithm(problem)}
                          className={`w-full text-left p-2 text-sm rounded hover:bg-blue-50 dark:hover:bg-blue-900 
                            ${selectedAlgorithm?.id === problem.id ? 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'}`}
                        >
                          <span className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${
                              problem.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-500'
                            }`}></span>
                            {problem.name}
                          </span>
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

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900">
        {selectedAlgorithm ? (
          <VisualizationRenderer algorithm={selectedAlgorithm} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">
                Welcome to DSA Visualizer
              </h3>
              <p>Select an algorithm from the A2Z sheet to begin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default A2ZSheetLayout;
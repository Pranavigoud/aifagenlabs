import React, { useState } from 'react';

const InnovationLabsPage = () => {
  const [activeTab, setActiveTab] = useState('research');

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="pt-32 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <span className="text-sm font-semibold text-blue-400">Research & Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Innovation Labs
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Where imagination meets intelligence. Explore our cutting-edge research, prototypes, and the roadmap to 2026.
          </p>

          {/* Watch Lab Tour Button */}
          <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 mx-auto border border-gray-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Lab Tour
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-900/50 border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveTab('research')}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 flex items-center gap-2 ${
                activeTab === 'research'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C6.596 6.253 2 10.849 2 16.5S6.596 26.747 12 26.747s10-4.596 10-10.247S17.404 6.253 12 6.253z" />
              </svg>
              Research
            </button>
            <button
              onClick={() => setActiveTab('prototypes')}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 flex items-center gap-2 ${
                activeTab === 'prototypes'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Prototypes
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 flex items-center gap-2 ${
                activeTab === 'partners'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                <path d="M16 14v2a3 3 0 01-3 3h-2a3 3 0 01-3-3v-2" />
              </svg>
              Partners
            </button>
            <button
              onClick={() => setActiveTab('launch')}
              className={`px-6 py-3 rounded-full font-semibold transition duration-200 flex items-center gap-2 ${
                activeTab === 'launch'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Launch 2026
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {activeTab === 'research' && (
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Pioneering AI Research
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our research teams are pushing the boundaries of what's possible with AI, focusing on areas that will shape the future of technology.
              </p>
            </div>
          )}
          {activeTab === 'prototypes' && (
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Experimental Prototypes
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Preview experimental features and next-generation capabilities that are shaping the future of our products.
              </p>
            </div>
          )}
          {activeTab === 'partners' && (
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Strategic Partnerships
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Collaborate with industry leaders and organizations driving innovation in artificial intelligence and automation.
              </p>
            </div>
          )}
          {activeTab === 'launch' && (
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Launch Roadmap 2026
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our roadmap to launching AIFAG and LifeOS to the world. Discover what's coming and how you can be part of the future.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InnovationLabsPage;

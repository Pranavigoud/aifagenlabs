import React from 'react';

const Hero = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      {/* Badge */}
      <div className="mb-12 inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium">Launching AIFAG & LifeOS in 2026</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 max-w-4xl leading-tight">
        AI for All Generations
      </h1>

      {/* Subheading */}
      <p className="text-2xl md:text-3xl text-gray-400 text-center mb-8">
        Innovating Beyond Imagination
      </p>

      {/* Description */}
      <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl">
        Building intelligent ecosystems that transform businesses and empower individuals
        — from startups to global enterprises.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        {/* Explore AI Solutions Button */}
        <button 
          onClick={() => setCurrentPage('services')}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
          Explore AI Solutions
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Book Demo Button */}
        <button 
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 border border-gray-700 whitespace-nowrap">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Book Demo
        </button>

        {/* Chat with AIFA Button */}
        <button 
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-full transition duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
          Chat with AIFA
        </button>
      </div>

    </div>
  );
};

export default Hero;

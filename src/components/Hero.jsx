import React from 'react';

const Hero = ({ setCurrentPage, setIsChatOpen }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Badge */}
      <div className="mb-8 md:mb-12 inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-800 fade-in-up">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <span className="font-medium">Launching AIFAG & LifeOS in 2026</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 md:mb-6 max-w-4xl leading-tight fade-in-up stagger-1">
        AI for All Generations
      </h1>

      {/* Subheading */}
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 text-center mb-6 md:mb-8 max-w-2xl fade-in-up stagger-2">
        Innovating Beyond Imagination
      </p>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-300 text-center mb-10 md:mb-12 max-w-2xl fade-in-up stagger-3">
        Building intelligent ecosystems that transform businesses and empower individuals
        — from startups to global enterprises.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-16 md:mb-20 w-full sm:w-auto fade-in-up stagger-4">
        {/* Explore AI Solutions Button */}
        <button 
          onClick={() => { setCurrentPage('services'); window.scrollTo(0, 0); }}
          className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm md:text-base font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap btn-smooth">
          Explore AI Solutions
          <svg className="w-4 md:w-5 h-4 md:h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Book Demo Button */}
        <button 
          onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
          className="px-6 md:px-8 py-3 md:py-4 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white text-sm md:text-base font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-600 whitespace-nowrap btn-smooth">
          <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Book Demo
        </button>

        {/* Chat with AIFA Button */}
        <button 
          onClick={() => setIsChatOpen(true)}
          className="px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-gray-100 active:bg-gray-200 text-black text-sm md:text-base font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap btn-smooth">
          <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
          Chat with AIFA
        </button>
      </div>

    </div>
  );
};

export default Hero;

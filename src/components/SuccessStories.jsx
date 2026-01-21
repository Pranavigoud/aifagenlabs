import React, { useState } from 'react';

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      company: 'TechCorp Global',
      companyColor: 'text-blue-400',
      title: 'AI-Powered Risk Assessment',
      description: 'Reduced risk analysis time by 85% with intelligent automation.',
      metrics: [
        { value: '+85%', label: 'Efficiency' },
        { value: '99.2%', label: 'Accuracy' },
        { value: '-40%', label: 'Cost' }
      ],
      image: 'Finance',
      category: 'Finance'
    },
    {
      id: 2,
      company: 'DataStream Inc',
      companyColor: 'text-blue-400',
      title: 'Predictive Analytics Platform',
      description: 'Improved forecast accuracy and reduced data processing time significantly.',
      metrics: [
        { value: '+120%', label: 'Throughput' },
        { value: '96.5%', label: 'Accuracy' },
        { value: '-60%', label: 'Latency' }
      ],
      image: 'Analytics',
      category: 'Analytics'
    },
    {
      id: 3,
      company: 'RetailPro Solutions',
      companyColor: 'text-blue-400',
      title: 'Customer Behavior AI',
      description: 'Enhanced customer insights and increased conversion rates with AI.',
      metrics: [
        { value: '+45%', label: 'Conversion' },
        { value: '92.8%', label: 'Satisfaction' },
        { value: '-35%', label: 'Churn' }
      ],
      image: 'Retail',
      category: 'Retail'
    },
    {
      id: 4,
      company: 'HealthTech Innovations',
      companyColor: 'text-blue-400',
      title: 'Diagnostic AI Engine',
      description: 'Accelerated diagnosis process with improved accuracy for patient care.',
      metrics: [
        { value: '+78%', label: 'Speed' },
        { value: '98.3%', label: 'Accuracy' },
        { value: '-50%', label: 'Errors' }
      ],
      image: 'Healthcare',
      category: 'Healthcare'
    }
  ];

  const currentStory = stories[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real results from real partnerships. See how we've helped organizations transform with AI.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-96">
            {/* Left Side - Image/Dashboard */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="w-full max-w-md bg-gradient-to-br from-green-900 to-gray-900 rounded-3xl p-8 border border-gray-800 relative overflow-hidden h-80 flex items-center justify-center">
                {/* Placeholder dashboard visualization */}
                <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {currentStory.metrics[0].value}
                    </div>
                    <div className="text-gray-400 text-sm mb-6">
                      {currentStory.category} Dashboard
                    </div>
                  </div>
                  {/* Simple chart visualization */}
                  <div className="flex items-end gap-1 h-32 w-full px-4">
                    {[45, 60, 50, 75, 65, 80, 70].map((height, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-70 hover:opacity-100 transition"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-4">Analytics & Performance</div>
                </div>
              </div>
            </div>

            {/* Right Side - Case Study Card */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                {/* Company Name */}
                <div className={`${currentStory.companyColor} text-sm font-semibold mb-4`}>
                  {currentStory.company}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {currentStory.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg mb-8">
                  {currentStory.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {currentStory.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 5h8v2h-8V5zM3 5h8v2H3V5zm0 7h8v2H3v-2zm10 0h8v2h-8v-2zM3 17h8v2H3v-2zm10 0h8v2h-8v-2z" />
                        </svg>
                        <div className="text-2xl font-bold text-white">
                          {metric.value}
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Read Full Case Study Button */}
                <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group transition">
                  Read Full Case Study
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition ${
                    idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-600 w-2 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

import React, { useState } from 'react';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = [
    { id: 'all', label: 'All Cases' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'finance', label: 'Finance' },
    { id: 'retail', label: 'Retail' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'technology', label: 'Technology' }
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'healthcare',
      title: 'Predictive Patient Analytics',
      client: 'HealthFirst Systems',
      description: 'Late detection of critical conditions was leading to poor patient outcomes. Doctors needed to manually review thousands of records, missing early warning signs.',
      metrics: ['+85%', '-40%'],
      image: 'bg-gradient-to-br from-gray-800 to-gray-900'
    },
    {
      id: 2,
      category: 'finance',
      title: 'AI-Powered Risk Assessment',
      client: 'TechCorp Global',
      description: 'Manual risk analysis was taking weeks, creating bottlenecks in loan approvals and increasing operational costs. The legacy system couldn\'t keep up with the...',
      metrics: ['+85%', '-40%'],
      image: 'bg-gradient-to-br from-blue-900/20 to-gray-900'
    },
    {
      id: 3,
      category: 'finance',
      title: 'AI-Powered Risk Assessment Platform',
      client: 'TechCorp Global',
      description: 'Manual risk assessment taking weeks per application with inconsistent results.',
      metrics: ['+85%', '-40%'],
      image: 'bg-gradient-to-br from-blue-900/20 to-gray-900'
    },
    {
      id: 4,
      category: 'retail',
      title: 'Smart Inventory Management',
      client: 'RetailMax',
      description: 'Stockouts and overstock situations were costing millions annually. Manual forecasting couldn\'t account for seasonal trends, promotions, and external factors.',
      metrics: ['+78%', '-55%'],
      image: 'bg-gradient-to-br from-amber-900/10 to-gray-900'
    },
    {
      id: 5,
      category: 'healthcare',
      title: 'Predictive Patient Analytics System',
      client: 'HealthFirst Systems',
      description: 'Late detection of patient deterioration leading to poor outcomes.',
      metrics: ['+60%', '-30%'],
      image: 'bg-gradient-to-br from-gray-800 to-gray-900'
    }
  ];

  const filteredCaseStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Success Stories
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            Real results from real partnerships. See how we've helped organizations transform with AI.
          </p>
        </div>
      </div>

      {/* Sticky Category Filter Buttons */}
      <div className="sticky top-16 z-40 bg-gray-900/50 border-b border-gray-800 backdrop-blur-sm mb-15">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Case Studies Section - Only show when "All Cases" is selected */}
      {activeCategory === 'all' && (
      <div className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TechSupport Pro Card */}
            <div 
              onClick={() => setSelectedCase(caseStudies.find(cs => cs.client === 'TechSupport Pro'))}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200 cursor-pointer"
            >
              {/* Category Badge */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-56 w-full flex items-center justify-center relative">
                  <img 
                    src={image1}
                    alt="TechSupport Pro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-xs font-semibold">
                    Technology
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client Name with Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                  <p className="text-blue-400 font-semibold text-sm">TechSupport Pro</p>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  Intelligent Customer Support
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Call center was overwhelmed with repetitive queries. Wait times exceeded 20 minutes and customer satisfaction was declining.
                </p>

                {/* Stats Icons */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.58 4.58 4.58 4.58L16 19.74 6.26 10z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* RetailMax Card */}
            <div 
              onClick={() => setSelectedCase(caseStudies.find(cs => cs.client === 'RetailMax'))}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200 cursor-pointer"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-56 w-full flex items-center justify-center relative">
                  <img 
                    src={image2}
                    alt="RetailMax"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-xs font-semibold">
                    Retail
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client Name with Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                  <p className="text-blue-400 font-semibold text-sm">RetailMax</p>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  Smart Inventory Management
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Stockouts and overstock situations were costing millions annually. Manual forecasting couldn't account for seasonal trends, promotions, and external factors.
                </p>

                {/* Stats Icons */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.58 4.58 4.58 4.58L16 19.74 6.26 10z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* AutoManufacture Card */}
            <div 
              onClick={() => setSelectedCase(caseStudies.find(cs => cs.client === 'AutoManufacture Inc'))}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200 cursor-pointer"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-56 w-full flex items-center justify-center relative">
                  <img 
                    src={image3}
                    alt="AutoManufacture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-xs font-semibold">
                    Manufacturing
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client Name with Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                  <p className="text-blue-400 font-semibold text-sm">AutoManufacture Inc</p>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  Quality Control Automation
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Manual quality inspection was slow, inconsistent, and missed defects. This led to recalls and customer complaints.
                </p>

                {/* Stats Icons */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.58 4.58 4.58 4.58L16 19.74 6.26 10z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Case Studies Grid - Adjusts spacing based on whether Featured Section is shown */}
      <div className={`px-4 ${activeCategory === 'all' ? 'pb-24' : 'pt-8 pb-24'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedCase(study)}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200 flex flex-col group cursor-pointer"
              >
                {/* Image Section with Category Badge */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`${study.image} w-full h-full flex items-center justify-center group-hover:scale-105 transition duration-300`}>
                    {study.id === 2 || study.id === 3 ? (
                      // Finance cards with image4
                      <img 
                        src={image4}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    ) : study.id === 4 ? (
                      // Smart Inventory Management with image1
                      <img 
                        src={image2}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // Default dark image
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-gray-800 border border-gray-600 text-gray-200 rounded-full text-xs font-semibold inline-block capitalize">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Client Name with Icon */}
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    <p className="text-blue-400 font-semibold text-sm">{study.client}</p>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="flex gap-3">
                    {study.metrics.map((metric, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-900/30 border border-blue-700 text-blue-400 rounded-full text-sm font-semibold">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="w-full h-64 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center overflow-hidden relative">
              <img 
                src={selectedCase.client === 'RetailMax' ? image2 : selectedCase.client === 'AutoManufacture Inc' ? image3 : image1}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Client Name */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
                <span className="text-blue-500 font-semibold">{selectedCase.client}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-black mb-8">{selectedCase.title}</h2>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-2-.9-2-2zM1 2v6h6V2H1zm6 10H1v6h6v-6zm6-10v6h6V2h-6zm0 10h6v6h-6v-6z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">Efficiency Gain</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 5V1h-1v4H8.49c-.45 0-.67.54-.35.85l3.51 3.51 3.51-3.51c.31-.31.1-.85-.35-.85h-2.51v.01zm.01 14v4h1v-4h3.51c.45 0 .67-.54.35-.85l-3.51-3.51-3.51 3.51c-.31.31-.1.85.35.85h2.51v-.01z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">Time Saved</p>
                </div>
              </div>

              {/* The Challenge */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  The Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              {/* Our Solution */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Our Solution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedCase.client === 'RetailMax' 
                    ? 'Built an AI-driven inventory management system that predicts demand with high accuracy, considering weather, events, trends, and historical data. Automated reordering prevents stockouts.'
                    : selectedCase.client === 'AutoManufacture Inc'
                    ? 'Deployed computer vision systems on the production line that inspect every product in real-time, detecting even microscopic defects. The system learns from feedback and continuously improves.'
                    : selectedCase.client === 'HealthFirst Systems'
                    ? 'Developed a predictive analytics platform that monitors patient data in real-time, identifying early warning signs of complications. The system integrates with existing EMR systems and provides actionable alerts.'
                    : 'Implemented advanced AI technology to automate processes, improve efficiency, and deliver measurable results across the organization.'}
                </p>
              </div>

              {/* Results & Impact */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                  </svg>
                  Results & Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Response time reduced by 90%, customer satisfaction up 65%, and support costs cut by 50%. The team now focuses on complex, high-value interactions.
                </p>
              </div>

              {/* Technologies Used */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-lg font-bold text-black mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-50 text-black rounded-lg text-sm font-medium">Conversational AI</span>
                  <span className="px-4 py-2 bg-blue-50 text-black rounded-lg text-sm font-medium">NLP</span>
                  <span className="px-4 py-2 bg-blue-50 text-black rounded-lg text-sm font-medium">Sentiment Analysis</span>
                  <span className="px-4 py-2 bg-blue-50 text-black rounded-lg text-sm font-medium">Multi-language Support</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <button className="w-3/5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-200 flex items-center justify-center gap-2">
                Start Your Transformation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;

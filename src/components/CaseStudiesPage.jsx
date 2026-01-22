import React, { useState } from 'react';

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
    },
    {
      id: 6,
      category: 'retail',
      title: 'Smart Inventory Optimization',
      client: 'RetailMax',
      description: 'High stockouts and overstock situations causing revenue loss.',
      metrics: ['+78%', '-55%'],
      image: 'bg-gradient-to-br from-amber-900/10 to-gray-900'
    },
    {
      id: 7,
      category: 'manufacturing',
      title: 'Quality Control Automation',
      client: 'AutoManufacture Inc',
      description: 'Manual quality inspection was slow, inconsistent, and missed defects. This led to recalls and customer complaints.',
      metrics: ['+92%', '-45%'],
      image: 'bg-gradient-to-br from-orange-900/10 to-gray-900'
    },
    {
      id: 8,
      category: 'technology',
      title: 'Intelligent Customer Support',
      client: 'TechSupport Pro',
      description: 'Call center was overwhelmed with repetitive queries. Wait times exceeded 20 minutes and customer satisfaction was declining.',
      metrics: ['+88%', '-75%'],
      image: 'bg-gradient-to-br from-slate-900/10 to-gray-900'
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
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200">
              {/* Category Badge */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-56 w-full flex items-center justify-center relative">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23444' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%23666'%3ETechnology Image%3C/text%3E%3C/svg%3E"
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
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200">
              {/* Category Badge */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-56 w-full flex items-center justify-center relative">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23444' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%23666'%3ERetail Image%3C/text%3E%3C/svg%3E"
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
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200">
              {/* Category Badge */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-56 w-full flex items-center justify-center relative">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23444' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%23666'%3EManufacturing Image%3C/text%3E%3C/svg%3E"
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
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition duration-200 flex flex-col group"
              >
                {/* Image Section with Category Badge */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`${study.image} w-full h-full flex items-center justify-center group-hover:scale-105 transition duration-300`}>
                    {study.id === 2 || study.id === 3 ? (
                      // Dashboard/Chart visualization for Finance cards
                      <div className="relative w-full h-full bg-gradient-to-br from-blue-900/30 via-gray-900 to-gray-900 flex items-center justify-center p-4">
                        <div className="space-y-2 w-full">
                          <div className="flex gap-2 justify-center">
                            <div className="w-12 h-24 bg-blue-500 opacity-60 rounded"></div>
                            <div className="w-12 h-20 bg-blue-500 opacity-70 rounded"></div>
                            <div className="w-12 h-28 bg-blue-500 opacity-50 rounded"></div>
                            <div className="w-12 h-16 bg-blue-500 opacity-80 rounded"></div>
                          </div>
                          <div className="text-xs text-gray-500 text-center">Analytics Dashboard</div>
                        </div>
                      </div>
                    ) : study.id === 4 ? (
                      // Person/Retail image placeholder
                      <div className="w-full h-full bg-gradient-to-br from-amber-900/10 to-gray-900 flex items-center justify-center">
                        <svg className="w-24 h-24 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </svg>
                      </div>
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
    </div>
  );
};

export default CaseStudiesPage;

import React, { useState } from 'react';
import CTA from './CTA';

const Services = ({ setCurrentPage }) => {
  const [expandedId, setExpandedId] = useState(0);

  const services = [
    {
      id: 0,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      ),
      title: 'Generative AI Solutions',
      tagline: 'Create. Generate. Transform.',
      description: 'Harness the power of large language models, image generation, and creative AI to revolutionize your content creation, product development, and customer experiences.',
      whatWeDeliver: [
        'Custom LLM fine-tuning & deployment',
        'AI-powered content generation',
        'Code generation & assistance',
        'Creative asset production',
        'Document summarization & analysis'
      ],
      useCases: [
        { text: 'Marketing automation', color: 'bg-blue-900' },
        { text: 'Product descriptions', color: 'bg-blue-900' },
        { text: 'Customer support chatbots', color: 'bg-blue-900' },
        { text: 'Code review', color: 'bg-blue-900' }
      ]
    },
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: 'Intelligent Automation',
      tagline: 'Work smarter, not harder.',
      description: 'Transform manual processes into intelligent, self-optimizing workflows. Our automation solutions learn and adapt, continuously improving efficiency.',
      whatWeDeliver: [
        'Robotic Process Automation (RPA)',
        'Intelligent document processing',
        'Workflow orchestration',
        'Decision automation engines',
        'Integration with existing systems'
      ],
      useCases: [
        { text: 'Data processing', color: 'bg-blue-900' },
        { text: 'Invoice processing', color: 'bg-blue-900' },
        { text: 'Report generation', color: 'bg-blue-900' },
        { text: 'Quality assurance', color: 'bg-blue-900' }
      ]
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Computer Vision',
      tagline: 'See what others cant',
      description: 'Extract actionable insights from images and video with advanced visual AI systems for real-world applications.',
      whatWeDeliver: [
        'Object detection & recognition',
        'Image classification & analysis',
        'Video processing & tracking',
        'Document understanding',
        'Real-time visual monitoring'
      ],
      useCases: [
        { text: 'Quality inspection', color: 'bg-blue-900' },
        { text: 'Security monitoring', color: 'bg-blue-900' },
        { text: 'Medical imaging', color: 'bg-blue-900' },
        { text: 'Inventory management', color: 'bg-blue-900' }
      ]
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Conversational AI',
      tagline: 'Talk. Understand. Engage.',
      description: 'Build intelligent chatbots and voice assistants that understand context and deliver personalized interactions.',
      whatWeDeliver: [
        'Conversational AI platforms',
        'Voice assistant development',
        'Intent recognition & NLU',
        'Multi-language support',
        'Context-aware responses'
      ],
      useCases: [
        { text: 'Customer service', color: 'bg-blue-900' },
        { text: 'Lead qualification', color: 'bg-blue-900' },
        { text: 'HR support', color: 'bg-blue-900' },
        { text: 'Technical support', color: 'bg-blue-900' }
      ]
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'SaaS Consulting',
      tagline: 'Build. Scale. Succeed.',
      description: 'End-to-end guidance for building, scaling, and optimizing your AI-powered SaaS products from concept to market leadership.',
      whatWeDeliver: [
        'Product strategy & roadmap',
        'Architecture & tech stack selection',
        'Go-to-market strategy',
        'Scaling & infrastructure planning',
        'Monetization & pricing models'
      ],
      useCases: [
        { text: 'MVP development', color: 'bg-blue-900' },
        { text: 'Product scaling', color: 'bg-blue-900' },
        { text: 'Market expansion', color: 'bg-blue-900' },
        { text: 'Team building', color: 'bg-blue-900' }
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-10 md:pb-12 lg:pb-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8">
            AI Solutions That Deliver
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-2 sm:px-0">
            From generative AI to predictive analytics, we offer comprehensive solutions designed to transform your business operations.
          </p>
        </div>
      </div>

      {/* Services Accordion */}
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-2 border-blue-600 rounded-lg sm:rounded-2xl md:rounded-3xl bg-gray-900/50 backdrop-blur overflow-hidden hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
            >
              {/* Header */}
              <button
                onClick={() => toggleExpand(service.id)}
                className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-blue-600/10"
              >
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-left min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 truncate transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 truncate transition-colors duration-300">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <div className={`flex-shrink-0 text-blue-400 transition-all duration-300 ml-3 sm:ml-4 ${expandedId === service.id ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expandedId === service.id ? "M19 14l-7 7m0 0l-7-7m7 7V3" : "M5 10l7-7m0 0l7 7m-7-7v16"} />
                  </svg>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedId === service.id && (
                <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-8 border-t border-gray-700 fade-in-up"
                  style={{ animation: 'fadeInUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) ease-out' }}
                >
                  {/* Description */}
                  <p className="text-gray-400 mb-6 sm:mb-8 mt-4 sm:mt-6 md:mt-8 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {/* What We Deliver */}
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg md:text-lg mb-4 sm:mb-6">
                        What We Deliver
                      </h4>
                      <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                        {service.whatWeDeliver.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg md:text-lg mb-4 sm:mb-6">
                        Use Cases
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {service.useCases.map((useCase, idx) => (
                          <span
                            key={idx}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 ${useCase.color} text-white text-xs sm:text-sm rounded-lg border border-blue-500/50`}
                          >
                            {useCase.text}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center gap-2 transition text-sm sm:text-base">
                    Discuss This Solution
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <CTA setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Services;

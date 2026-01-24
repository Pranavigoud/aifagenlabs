import React from 'react';

const FlagshipProducts = ({ setCurrentPage }) => {
  const products = [
    {
      id: 1,
      badge: 'AIFAG',
      title: 'Enterprise AI Agent Suite',
      description: 'Connect, configure, and deploy intelligent AI agents across your organization. Automate complex workflows with human-like reasoning.',
      features: [
        { icon: '◉', text: 'Multi-Agent Orchestration' },
        { icon: '⊞', text: 'Enterprise Integration' },
        { icon: '⚡', text: 'Real-time Processing' }
      ]
    },
    {
      id: 2,
      badge: 'LifeOS',
      title: 'Personal AI Operating System',
      description: 'Your intelligent life companion. Organize, plan, and optimize every aspect of your personal and professional life.',
      features: [
        { icon: '📅', text: 'Smart Planning' },
        { icon: '🎯', text: 'Goal Tracking' },
        { icon: '🔒', text: 'Privacy-First Design' }
      ]
    }
  ];

  return (
    <div className="bg-black text-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Flagship Products
          </h2>
          <p className="text-xl text-gray-400">
            Coming 2026 — The future of intelligent ecosystems
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition duration-300"
            >
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gray-800 border border-blue-500 text-blue-400 rounded-full text-sm font-semibold">
                  {product.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-white">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        {feature.icon === '◉' && (
                          <circle cx="12" cy="12" r="8" />
                        )}
                        {feature.icon === '⊞' && (
                          <rect x="4" y="4" width="16" height="16" />
                        )}
                        {feature.icon === '⚡' && (
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        )}
                        {feature.icon === '📅' && (
                          <path d="M9 1a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9zm0 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9zm-3 3H3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 1 0 0-2z" />
                        )}
                        {feature.icon === '🎯' && (
                          <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                        )}
                        {feature.icon === '🔒' && (
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l6 3V11c0 4.52-2.98 8.69-6 10-3.02-1.31-6-5.48-6-10V6.18l6-3z" />
                        )}
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button 
                onClick={() => setCurrentPage('products')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-400 text-white rounded-full transition duration-200 group">
                <span className="font-medium">Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagshipProducts;

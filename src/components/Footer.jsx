import React, { useState } from 'react';

const Footer = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="border-t border-b border-gray-800 py-7 px-6 md:px-16 lg:px-32 xl:px-48">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              <span className="text-lg md:text-xl">Stay ahead with AI insights</span>
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              <span className="text-sm md:text-base">Get the latest on AI innovations delivered to your inbox.</span>
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 md:px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs md:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-600 focus:bg-neutral-800 transition-all duration-300 flex-1 md:flex-none min-w-40 input-smooth"
              required
            />
            <button
              type="submit"
              className="px-4 md:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap btn-smooth"
            >
              Subscribe
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-10 px-6 md:px-16 lg:px-32 xl:px-48">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-1 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">A</div>
                <span className="text-base font-bold">
                  <span className="text-white">AIFAGen</span>
                  <span className="text-gray-400 ml-1">Labs</span>
                </span>
              </div>
              <p className="text-gray-400 mb-3 text-xs leading-relaxed">
                <span className="text-xs md:text-sm">Building Intelligent Ecosystems for the Future. AI for All Generations.</span>
              </p>
              {/* Social Links */}
              <div className="flex gap-2 mt-1">
                <a href="#" className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M7 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.09-.923.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M4 6l8 5 8-5v2l-8 5-8-5V6z" fill="black" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Company Links */}
            <div className="md:col-span-1">
              <h4 className="font-bold text-white mb-3 text-xs">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition-colors duration-300 text-xs link-smooth">About Us</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('innovation-labs'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition-colors duration-300 text-xs link-smooth">Innovation Labs</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('case-studies'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition-colors duration-300 text-xs link-smooth">Case Studies</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs">Careers</a></li>
              </ul>
            </div>
            {/* Solutions Links */}
            <div className="md:col-span-1">
              <h4 className="font-bold text-white mb-3 text-xs">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs">Services</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('products'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs">Products</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs">AIFAG Suite</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs">LifeOS</a></li>
              </ul>
            </div>
            {/* Connect Links */}
            <div className="md:col-span-1">
              <h4 className="font-bold text-white mb-3 text-xs">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs">Contact</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('collaborate'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs">Collaborate</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs">Partners</a></li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
              {/* Contact Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Global Operations</span>
                </div>
                <a href="mailto:pmo@aifagenlabs.com" className="flex items-center gap-1 hover:text-white transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>pmo@aifagenlabs.com</span>
                </a>
                <a href="tel:+919490868555" className="flex items-center gap-1 hover:text-white transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 9490868555</span>
                </a>
              </div>
              {/* Copyright */}
              <div className="text-gray-400 text-xs md:text-right">
                © 2026 AIFAGen Labs Pvt. Ltd. All rights reserved.
              </div>
            </div>
            {/* Locations */}
            <div className="flex flex-col md:flex-row gap-2 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>India: 12-4-89/3 Saraswathi Nagar Colony, Siddipet</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>USA: New Jersey</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

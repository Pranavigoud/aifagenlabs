import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-t border-b border-gray-800 py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              Stay ahead with AI insights
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Get the latest on AI innovations delivered to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-gray-800 transition-all duration-300 flex-1 md:flex-none min-w-56 text-sm sm:text-base input-smooth"
              required
            />
            <button
              type="submit"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base btn-smooth"
            >
              Subscribe
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 sm:py-14 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Logo and Description */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm sm:text-base">
                  A
                </div>
                <span className="text-base sm:text-lg md:text-xl font-bold">
                  <span className="text-white">AIFA</span>
                  <span className="text-gray-400">Gen</span>
                  <span className="text-gray-300 ml-1">Labs</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                Building Intelligent Ecosystems for the Future. AI for All Generations.
              </p>
              {/* Social Links */}
              <div className="flex gap-2 sm:gap-4">
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M7 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.09-.923.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M4 6l8 5 8-5v2l-8 5-8-5V6z" fill="black" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm link-smooth">About Us</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm link-smooth">Innovation Labs</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm link-smooth">Case Studies</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs sm:text-sm">Careers</a></li>
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Solutions</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs sm:text-sm">Services</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs sm:text-sm">Products</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs sm:text-sm">AIFAG Suite</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs sm:text-sm">LifeOS</a></li>
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h4 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Connect</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs sm:text-sm">Contact</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs sm:text-sm">Collaborate</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition text-xs sm:text-sm">Partners</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 sm:pt-10 md:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-start md:items-center">
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Global Operations</span>
                </div>
                <a href="mailto:pmo@aifagenlabs.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs sm:text-sm">pmo@aifagenlabs.com</span>
                </a>
                <a href="tel:+919490868555" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs sm:text-sm">+91 9490868555</span>
                </a>
              </div>

              {/* Copyright */}
              <div className="flex items-center justify-start md:justify-end text-gray-400 text-sm">
                © 2026 AIFAGen Labs Pvt. Ltd. All rights reserved.
              </div>
            </div>

            {/* Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>India: 12-4-89/3 Saraswathi Nagar Colony, Siddipet</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

import React, { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', page: 'home' },
    { name: 'Services', href: '#', page: 'services' },
    { name: 'Products', href: '#', page: 'products' },
    { name: 'Innovation Labs', href: '#', page: 'innovation-labs' },
    { name: 'Case Studies', href: '#', page: 'case-studies' },
    { name: 'About', href: '#', page: 'about' },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0f172a] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
              A
            </div>
            <span className="text-lg font-semibold">
              <span className="text-white">AIFA</span>
              <span className="text-gray-400">Gen</span>
              <span className="ml-1 text-gray-300">Labs</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition duration-200 ${
                  currentPage === item.page
                    ? 'text-white border-b-2 border-blue-600'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-gray-300 border border-gray-600 rounded hover:text-white hover:border-gray-400 transition duration-200 text-sm font-medium">
              Contact
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 text-sm font-medium">
              Collaborate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className="block w-full text-left text-gray-300 hover:text-white transition duration-200 text-sm font-medium py-2"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-700 flex gap-3">
              <button className="flex-1 px-4 py-2 text-gray-300 border border-gray-600 rounded hover:text-white hover:border-gray-400 transition duration-200 text-sm font-medium">
                Contact
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 text-sm font-medium">
                Collaborate
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

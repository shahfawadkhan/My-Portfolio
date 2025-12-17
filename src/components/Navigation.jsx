import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail }
];

const Navigation = ({ activeSection, scrollToSection, setIsMenuOpen, isMenuOpen }) => {
  const safeActiveSection = activeSection || 'home';
  
  const handleClick = (itemId) => {
    scrollToSection(itemId);

  };

  return (
    <>
      <nav className="hidden md:flex fixed right-2 top-1/2 transform -translate-y-1/2 z-50 flex-col items-center space-y-8">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = safeActiveSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="group relative"
            >
              <div className={`relative p-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-gray-900 text-white scale-110 shadow-lg' 
                  : 'bg-white text-gray-600 group-hover:bg-gray-900 group-hover:text-white shadow-md hover:shadow-lg hover:scale-105'
              }`}>
                <Icon size={20} />
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              
              <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-300 pointer-events-none ${
                'bg-gray-900 text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
              }`}>
                <span className="text-sm font-medium">{item.label}</span>
                {/* Arrow pointing to the icon */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
              </div>

             
            </button>
          );
        })}
      </nav>

      <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">{'<SFK />'}</span>
              <span className="ml-3 text-sm font-normal text-gray-500">
                {NAV_ITEMS.find(item => item.id === safeActiveSection)?.label}
              </span>
            </div>
            
            <button
              className="text-gray-700 hover:text-gray-900 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = safeActiveSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`flex items-center justify-between w-full text-left py-3 px-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gray-900 text-white font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
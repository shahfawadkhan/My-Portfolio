import React from 'react';

const ScrollProgress = ({ scrollProgress }) => (
  <div className="fixed top-0 left-0 w-full h-1 z-[9999]">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50"></div>
    
    <div
      className="absolute h-full bg-gradient-to-r from-gray-700 via-gray-800 to-black transition-all duration-200 ease-out shadow-lg shadow-blue-500/30"
      style={{ width: `${scrollProgress}%` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
    </div>
    
  </div>
);

export default ScrollProgress;
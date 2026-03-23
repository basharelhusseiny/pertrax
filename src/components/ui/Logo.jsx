import React from 'react';

const Logo = ({ className = "text-3xl" }) => (
  <div className={`flex items-center font-sans tracking-tighter ${className}`}>
    <span className="text-gray-500 font-extrabold">PETRA</span>
    <span className="text-blue-700 font-black scale-x-110 ml-[2px]">X</span>
  </div>
);

export default Logo;

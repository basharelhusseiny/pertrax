import React from 'react';
import Reveal from './Reveal';

const SectionHeader = ({ title, subtitle, align = "left" }) => (
  <Reveal>
    <div
      className={`mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1.5 w-24 bg-linear-to-r from-blue-700 to-cyan-500 mt-6 ${align === "center" ? "mx-auto" : ""}`}
      ></div>
    </div>
  </Reveal>
);

export default SectionHeader;

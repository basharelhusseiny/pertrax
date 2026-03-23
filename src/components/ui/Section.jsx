import React from 'react';

const Section = ({ id, className, children }) => (
  <section
    id={id}
    className={`py-20 md:py-28 relative overflow-hidden ${className}`}
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      {children}
    </div>
  </section>
);

export default Section;

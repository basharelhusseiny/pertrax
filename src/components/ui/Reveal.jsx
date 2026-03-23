import React from 'react';
import useOnScreen from '../../hooks/useOnScreen';

const Reveal = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  let transform = "translate-y-12";
  if (direction === "left") transform = "-translate-x-12";
  if (direction === "right") transform = "translate-x-12";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${transform}`} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;

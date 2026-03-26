import React from "react";

const Logo = ({ className = "h-11", isScrolled = false }) => {
  return (
    <img
      src={isScrolled ? "/Orange Letter X Company white Logo (1).png" : "/Orange Letter X Company Logo.png"}
      alt="Petrax Logo"
      width={180}
      height={44}
      className={`${className} w-auto object-contain transition-all duration-300`}
      draggable={false}
      loading="eager"
    />
  );
};

export default Logo;

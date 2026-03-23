import React from "react";

const Button = ({ children, primary, className = "", ...props }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 font-semibold transition-all duration-300 ease-in-out rounded-sm relative overflow-hidden group";
  const variants = primary
    ? "bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
    : "bg-transparent border-2 border-gray-300 text-gray-800 hover:border-blue-700 hover:text-blue-700";

  return (
    <button className={`${baseStyle} ${variants} ${className}`} {...props}>
      {primary && (
        <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
      )}
      <span className="relative z-10 flex items-center">{children}</span>
    </button>
  );
};

export default Button;

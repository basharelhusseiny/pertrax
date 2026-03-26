import React from "react";
import { Globe } from "lucide-react";

export default function Navbar({ navLinks, handleScrollTo, toggleLang, t, isScrolled }) {
  return (
    <div className="hidden lg:flex items-center gap-6">
      {navLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => handleScrollTo(link.id, link.path)}
          className={`text-sm font-bold tracking-[0.12em] uppercase transition-all duration-300 relative group ${isScrolled ? "text-white/90 hover:text-white" : "text-slate-700 hover:text-blue-700"}`}
        >
          {link.name}
          <span className={`absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${isScrolled ? "bg-white" : "bg-blue-700"}`} />
        </button>
      ))}

      <div className={`flex items-center border-l px-5 mx-1 h-5 ${isScrolled ? "border-white/30" : "border-slate-300"}`}>
        <button
          onClick={toggleLang}
          className={`flex items-center gap-2 text-xs font-bold tracking-wide transition-all duration-300 ${isScrolled ? "text-white/90 hover:text-white" : "text-slate-600 hover:text-blue-700"}`}
        >
          <Globe className="w-3.5 h-3.5" />
          {t.nav.lang}
        </button>
      </div>

      <button
        onClick={() => handleScrollTo("contact")}
        className={`group relative px-5 py-2.5 rounded-xl font-black text-xs tracking-widest uppercase transition-all duration-400 overflow-hidden ${
          isScrolled 
            ? "bg-white text-blue-600 shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
            : "bg-blue-700 hover:bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        }`}
      >
        <div className={`absolute inset-0 bg-linear-to-r ${isScrolled ? "from-blue-100/30" : "from-white/10"} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700`} />
        <span className="relative z-10">{t.nav.getInTouch}</span>
      </button>
    </div>
  );
}

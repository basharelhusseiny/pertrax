import React from "react";
import { Globe } from "lucide-react";

export default function Navbar({ navLinks, handleScrollTo, toggleLang, t }) {
  return (
    <div className="hidden lg:flex items-center gap-6">
      {navLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => handleScrollTo(link.id, link.path)}
          className="text-xs font-bold tracking-[0.12em] uppercase transition-all duration-300 text-blue-100/80 hover:text-white relative group"
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#1A1AFA] group-hover:w-full transition-all duration-300" />
        </button>
      ))}

      <div className="flex items-center border-l border-blue-500/20 px-5 mx-1 h-5">
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 text-xs font-bold tracking-wide text-blue-300/70 hover:text-white transition-all duration-300"
        >
          <Globe className="w-3.5 h-3.5" />
          {t.nav.lang}
        </button>
      </div>

      <button
        onClick={() => handleScrollTo("contact")}
        className="group relative px-5 py-2.5 bg-[#1A1AFA] hover:bg-blue-600 text-white rounded-xl font-black text-xs tracking-widest uppercase transition-all duration-400 hover:shadow-[0_0_20px_rgba(26,26,250,0.4)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative z-10">{t.nav.getInTouch}</span>
      </button>
    </div>
  );
}

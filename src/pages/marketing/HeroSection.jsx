import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection({ t, lang, openProjectModal }) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden z-20"
      style={{ background: 'linear-gradient(160deg, #03030f 0%, #06062e 50%, #030318 100%)' }}
    >
      {/* Background Glows */}
      <div className="absolute inset-x-0 top-0 h-[400px] bg-linear-to-b from-blue-600/8 to-transparent pointer-events-none blur-[100px]" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(26,26,250,0.12)_50%,transparent_70%)] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 backdrop-blur-md text-blue-300/70 text-[9px] font-black tracking-[0.25em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A1AFA] animate-ping opacity-75"></span>
          {t.marketing.hero.badge}
        </div>
        
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white">
            <span className="block opacity-90 mb-1">
              {t.marketing.hero.title1}
            </span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#1A1AFA] via-blue-400 to-cyan-300">
              {t.marketing.hero.title2}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-200/50 max-w-xl mx-auto leading-relaxed font-light">
            {t.marketing.hero.subtitle}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => openProjectModal()}
            className="group relative w-full sm:w-auto px-8 py-4 bg-[#1A1AFA] hover:bg-blue-600 text-white rounded-[20px] font-black text-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(26,26,250,0.5)] flex items-center justify-center gap-2.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">{t.marketing.hero.ctaPrimary}</span>
            <ArrowRight className={`w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>
          
          <a href="#about" className="group w-full sm:w-auto px-8 py-4 bg-blue-900/20 hover:bg-blue-800/30 border border-blue-500/15 text-white rounded-[20px] font-bold text-sm transition-all backdrop-blur-md flex items-center justify-center gap-2.5">
            {t.marketing.hero.ctaSecondary}
            <ChevronDown className="w-4 h-4 opacity-50 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-[#04041e] to-transparent z-10 pointer-events-none" />
    </section>
  );
}

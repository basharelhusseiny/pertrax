import React from 'react';
import { Droplet, Factory, Settings, Zap, HardHat, ArrowRight } from 'lucide-react';

const indIcons = [Droplet, Factory, Settings, Zap, HardHat, Droplet];

export default function IndustriesSection({ t, lang }) {
  return (
    <section id="industries" className="py-20 relative overflow-hidden z-10" style={{background: 'linear-gradient(180deg, #020214 0%, #010118 60%, #030320 100%)'}}>
      {/* Orbs */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-800/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-600/8 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/15 bg-cyan-500/8 text-cyan-400 text-[10px] font-black tracking-[0.2em] uppercase">
               CORE SECTORS
             </div>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-white">
               {t.industries.title}
             </h2>
             <div className="w-20 h-1 bg-linear-to-r from-[#1A1AFA] to-cyan-400 rounded-full"></div>
          </div>
          <p className="text-blue-200/40 max-w-sm text-sm font-light leading-relaxed">
            {t.industries.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.industries.items.map((name, idx) => {
            const Icon = indIcons[idx];
            return (
              <div
                key={idx}
                className="group relative h-72 flex items-end p-8 rounded-[36px] border border-blue-500/10 overflow-hidden transition-all duration-500 hover:border-cyan-400/30 hover:-translate-y-1.5 cursor-pointer shadow-2xl"
                style={{background: 'linear-gradient(135deg, rgba(26,26,250,0.08) 0%, rgba(1,1,24,0.9) 100%)'}}
              >
                <div className="absolute inset-0 bg-linear-to-t from-[#010118] via-[#010118]/60 to-transparent z-0" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#1A1AFA]/8 blur-[60px] rounded-full group-hover:bg-cyan-500/15 transition-all duration-700" />
                
                <div className="relative z-10 w-full">
                  <div className="w-14 h-14 bg-blue-900/60 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-[#1A1AFA] group-hover:text-white group-hover:rotate-6 transition-all duration-500 mb-6 shadow-xl">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors duration-500">{name}</h3>
                    <div className="w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 scale-0 group-hover:scale-100 transition-all duration-500 border border-blue-500/20">
                      <ArrowRight className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

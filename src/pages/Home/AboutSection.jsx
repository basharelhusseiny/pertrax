import React from 'react';
import { Globe, Settings } from 'lucide-react';
import Dynamic3DChart from '../../components/Dynamic3DChart';

export default function AboutSection({ t, lang }) {
  return (
    <section id="about" className="py-20 relative overflow-hidden z-10" style={{background: 'linear-gradient(135deg, #05051a 0%, #0a0a2e 40%, #050520 70%, #03030f 100%)'}}>
      {/* Animated Glow Orbs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#1A1AFA]/15 blur-[140px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/20 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      {/* Hero Image Behind Content */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero-img.png"
          alt="Industrial"
          className="w-full h-full object-cover opacity-[0.04] scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#05051a]/90 via-[#0a0a2e]/80 to-[#05051a]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
               ABOUT THE COMPANY
             </div>
             
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.15] text-white">
               {t.about.title}
             </h2>
             
             <div className="space-y-5 text-blue-100/60 text-base leading-relaxed font-light">
               <p className="border-l-2 border-[#1A1AFA] pl-6 py-2 bg-linear-to-r from-[#1A1AFA]/10 to-transparent rounded-r-lg">
                  {t.about.p1}
               </p>
               <p className="pl-6">{t.about.p2}</p>
             </div>

             <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-7 rounded-[32px] bg-blue-950/60 border border-blue-500/15 backdrop-blur-md transition-all duration-500 hover:border-blue-400/40 hover:bg-blue-900/40 group/card shadow-xl">
                   <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5 text-blue-400 group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform">
                      <Globe className="w-5 h-5" />
                   </div>
                   <h3 className="text-lg font-black text-white mb-2 tracking-tight">{t.about.visionTitle}</h3>
                   <p className="text-blue-200/50 text-xs font-light leading-relaxed">{t.about.visionDesc}</p>
                </div>
                <div className="p-7 rounded-[32px] bg-cyan-950/40 border border-cyan-500/15 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-900/30 group/card shadow-xl">
                   <div className="w-11 h-11 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-5 text-cyan-400 group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform">
                      <Settings className="w-5 h-5" />
                   </div>
                   <h3 className="text-lg font-black text-white mb-2 tracking-tight">{t.about.missionTitle}</h3>
                   <p className="text-cyan-100/50 text-xs font-light leading-relaxed">{t.about.missionDesc}</p>
                </div>
             </div>
          </div>

          <div className="relative group">
             <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-opacity duration-1000" />
             <div className="relative z-10 p-4 rounded-[40px] border border-blue-500/10 bg-blue-950/30 backdrop-blur-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <Dynamic3DChart t={t} lang={lang} />
                <div className="absolute bottom-8 right-8 p-5 bg-[#05051a]/80 backdrop-blur-3xl border border-blue-500/20 rounded-[24px] shadow-2xl">
                   <div className="text-[10px] text-blue-400/60 font-bold uppercase tracking-widest mb-1">Live Efficiency</div>
                   <div className="text-blue-400 font-black text-2xl">98.4%</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

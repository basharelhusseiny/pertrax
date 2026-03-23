import React from 'react';

export default function AboutSection({ t }) {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden z-10"
      style={{ background: 'linear-gradient(135deg, #04041e 0%, #070730 50%, #04041e 100%)' }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A1AFA]/12 blur-[130px] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/15 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="relative group">
          {/* Glass Card */}
          <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-xl rounded-[32px] border border-blue-500/10 shadow-2xl transition-all duration-500 group-hover:border-blue-400/20" />
          
          <div className="relative p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-500/8 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
                  {t.nav.about}
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] text-white">
                  {t.marketing.about.title}
                </h2>
                
                <div className="space-y-5 text-blue-200/55 text-base leading-relaxed font-light">
                  <p className="border-l-2 border-[#1A1AFA] pl-5 py-1 bg-linear-to-r from-[#1A1AFA]/10 to-transparent">
                    {t.marketing.about.text1}
                  </p>
                  <p className="pl-5">
                    {t.marketing.about.text2}
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {t.marketing.about.stats.slice(0, 2).map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-blue-950/50 border border-blue-500/10 rounded-2xl hover:bg-blue-900/40 hover:border-blue-400/30 transition-all duration-300 group/stat"
                    >
                      <div className="text-3xl font-black text-white mb-1 group-hover/stat:scale-105 transition-transform origin-left">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-blue-400/50 font-bold uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div
                  className="p-6 rounded-2xl transform hover:scale-[1.01] transition-transform shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1A1AFA 0%, #0d0da0 100%)' }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-black text-white mb-0.5">
                        {t.marketing.about.stats[2]?.value}
                      </div>
                      <div className="text-[11px] text-blue-100/70 font-bold uppercase tracking-widest">
                        {t.marketing.about.stats[2]?.label}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-white/15 rounded-xl backdrop-blur-md flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full border-2 border-white animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

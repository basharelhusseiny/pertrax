import React from 'react';

export default function ApproachSection({ t }) {
  return (
    <section
      id="approach"
      className="py-20 relative z-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050522 0%, #020214 60%, #04041c 100%)' }}
    >
      {/* Accent glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/25 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-5">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">{t.marketing.approach.title}</h2>
            <div className="w-16 h-1 bg-linear-to-r from-[#1A1AFA] to-blue-400 rounded-full"></div>
          </div>
          <p className="text-blue-200/40 max-w-sm text-xs font-light leading-relaxed">
            Our strategic methodology ensures that every campaign is backed by data and executed with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.marketing.approach.steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group h-full">
                {idx < 3 && (
                  <div className="absolute top-1/2 left-[calc(100%-16px)] w-16 h-px bg-linear-to-r from-blue-500/20 to-transparent hidden lg:block z-0" />
                )}
                
                <div
                  className="relative z-10 p-7 h-full rounded-[28px] border border-blue-500/10 hover:border-[#1A1AFA]/35 transition-all duration-500 shadow-xl flex flex-col items-center text-center"
                  style={{ background: 'linear-gradient(135deg, rgba(26,26,250,0.06) 0%, rgba(5,5,34,0.9) 100%)' }}
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#1A1AFA] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                    <div className="w-14 h-14 bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/15 group-hover:scale-105 transition-transform relative">
                      <Icon className="w-7 h-7" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1A1AFA] text-white flex items-center justify-center rounded-full text-[9px] font-black border-[3px] border-[#020214]">
                        {idx + 1}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-base font-black mb-2 text-white transition-colors group-hover:text-blue-300">{step.title}</h3>
                  <p className="text-blue-200/40 text-xs leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

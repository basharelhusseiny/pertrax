import React from 'react';

export default function SolutionsSection({ t }) {
  return (
    <section id="solutions" className="py-20 relative overflow-hidden z-10 border-t border-blue-900/30" style={{background: 'linear-gradient(135deg, #04041e 0%, #06062a 50%, #030318 100%)'}}>
      {/* Background Glow Mesh */}
      <div className="absolute top-1/4 left-0 w-[700px] h-[500px] bg-[#1A1AFA]/8 blur-[150px] rounded-full -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-800/10 blur-[120px] rounded-full translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A1AFA]/20 bg-[#1A1AFA]/8 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
             INTEGRATED SOLUTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-white">
            {t.solutions.title}
          </h2>
          <p className="text-blue-200/40 text-base font-light leading-relaxed">
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-5">
          {t.solutions.items.map((sol, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col md:flex-row rounded-[32px] border border-blue-500/10 hover:border-[#1A1AFA]/40 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(26,26,250,0.2)]"
              style={{background: 'linear-gradient(90deg, rgba(26,26,250,0.06) 0%, rgba(4,4,30,0.95) 100%)'}}
            >
              <div className="md:w-36 bg-[#1A1AFA]/8 flex items-center justify-center p-8 group-hover:bg-[#1A1AFA] transition-all duration-500 border-r border-blue-500/10">
                <span className="text-5xl font-black text-blue-800 group-hover:text-white transition-colors duration-500">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                   {sol.title}
                </h3>
                <p className="text-blue-200/45 text-base font-light leading-relaxed">
                   {sol.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

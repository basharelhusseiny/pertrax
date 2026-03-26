import React from "react";
import Reveal from "../../components/ui/Reveal";

export default function SolutionsSection({ t, lang }) {
  return (
    <section
      id="solutions"
      className="py-12 sm:py-20 relative overflow-hidden z-10 border-t border-blue-900/30"
      style={{
        background:
          "linear-gradient(135deg, #04041e 0%, #06062a 50%, #030318 100%)",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2] bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
        }}
      ></div>

      {/* Background Glow Mesh */}
      <div className="absolute top-1/4 left-0 w-[700px] h-[500px] bg-[#1A1AFA]/8 blur-[150px] rounded-full -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-800/10 blur-[120px] rounded-full translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A1AFA]/20 bg-[#1A1AFA]/8 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
              {lang === "ar" ? "الحلول المتكاملة" : "INTEGRATED SOLUTIONS"}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-white">
              {t.solutions.title}
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-blue-200/40 text-base font-light leading-relaxed">
              {t.solutions.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto grid gap-5">
          {t.solutions.items.map((sol, idx) => (
            <Reveal key={idx} delay={400 + idx * 100}>
              <div
                className="group relative flex flex-col md:flex-row rounded-[32px] border border-blue-500/10 hover:border-[#1A1AFA]/40 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(26,26,250,0.2)]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(26,26,250,0.06) 0%, rgba(4,4,30,0.95) 100%)",
                }}
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

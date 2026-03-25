import React from "react";
import { Globe, Settings } from "lucide-react";
import Dynamic3DChart from "../../components/Dynamic3DChart";

export default function AboutSection({ t, lang }) {
  return (
    <section
      id="about"
      className="py-22 relative overflow-hidden z-10 bg-linear-to-b from-white via-blue-600/80 to-blue-600/80"
    >
      {/* Light Animated Blue Backgrounds matching Values Section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[0%] right-[-10%] w-[50%] h-[120%] bg-blue-100/60 rounded-full blur-[120px] mix-blend-multiply animate-[float_25s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-full bg-sky-100/70 rounded-full blur-[100px] mix-blend-multiply animate-[float_30s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* Hero Image Behind Content with light overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Hero-img.png"
          alt="Industrial"
          className="w-full h-full object-cover opacity-[0.03] scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-50/90 via-slate-50/80 to-slate-50/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/50 bg-blue-100/50 text-blue-700 text-[10px] font-black tracking-[0.2em] uppercase">
              ABOUT THE COMPANY
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.15] text-slate-900">
              {t.about.title}
            </h2>

            <div className="space-y-5 text-slate-600 text-base leading-relaxed font-normal">
              <p className="border-l-2 border-blue-500 pl-6 py-2 bg-linear-to-r from-blue-50 to-transparent rounded-r-lg">
                {t.about.p1}
              </p>
              <p className="pl-6">{t.about.p2}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-7 rounded-[32px] bg-white/70 border border-white/60 backdrop-blur-xl transition-all duration-500 hover:border-blue-200/60 hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.1)] group/card relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-400/10 blur-2xl rounded-full group-hover/card:bg-blue-400/20 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 flex items-center justify-center mb-5 text-blue-600 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300 shadow-sm">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight group-hover/card:text-blue-700 transition-colors">
                    {t.about.visionTitle}
                  </h3>
                  <p className="text-slate-500 text-xs font-normal leading-relaxed">
                    {t.about.visionDesc}
                  </p>
                </div>
              </div>

              <div className="p-7 rounded-[32px] bg-white/70 border border-white/60 backdrop-blur-xl transition-all duration-500 hover:border-cyan-200/60 hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.1)] group/card relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-cyan-400/10 blur-2xl rounded-full group-hover/card:bg-cyan-400/20 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-cyan-50 to-cyan-100/50 border border-cyan-200/50 flex items-center justify-center mb-5 text-cyan-600 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300 shadow-sm">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight group-hover/card:text-cyan-700 transition-colors">
                    {t.about.missionTitle}
                  </h3>
                  <p className="text-slate-500 text-xs font-normal leading-relaxed">
                    {t.about.missionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-blue-400/20 blur-[80px] rounded-full group-hover:bg-blue-400/30 transition-opacity duration-1000" />
            <div className="relative z-10 p-4 rounded-[40px] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]">
              <Dynamic3DChart t={t} lang={lang} />
              <div className="absolute bottom-8 right-8 p-5 bg-white/90 backdrop-blur-3xl border border-blue-100 rounded-[24px] shadow-xl">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">
                  Live Efficiency
                </div>
                <div className="text-blue-600 font-black text-2xl">98.4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

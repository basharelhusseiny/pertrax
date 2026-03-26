import React from "react";

export default function AboutSection({ t }) {
  return (
    <section
      id="about"
      className="py-12 sm:py-20 relative overflow-hidden z-10 bg-white"
    >
      {/* --- Premium Light Mode Mesh Gradients & Textures --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Soft Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1.5px, transparent 0)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />

        {/* Top/Bottom Blends */}
        <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-[#f8fbff] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-[#f8fbff] to-transparent" />

        {/* Dynamic Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-blue-100/90 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[70%] bg-sky-100/70 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="relative group">
          {/* Main Glass Panel */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl rounded-[48px] border-2 border-white shadow-[0_20px_60px_-15px_rgba(37,99,235,0.08)] transition-all duration-700 group-hover:shadow-[0_20px_80px_-15px_rgba(37,99,235,0.12)]" />

          <div className="relative p-6 md:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-200/60 bg-blue-50/80 shadow-sm text-blue-600 text-[11px] font-black tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {t.nav.about}
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                  {t.marketing.about.title}
                </h2>

                {/* Texts */}
                <div className="space-y-6 text-slate-500 text-base md:text-lg leading-relaxed font-normal">
                  <p className="border-l-4 border-blue-600 pl-6 py-2 bg-linear-to-r from-blue-50/50 to-transparent rounded-r-2xl text-slate-700 font-medium">
                    {t.marketing.about.text1}
                  </p>
                  <p className="pl-6">{t.marketing.about.text2}</p>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="grid gap-5">
                <div className="grid grid-cols-2 gap-5">
                  {t.marketing.about.stats.slice(0, 2).map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition-all duration-500 group/stat"
                    >
                      <div className="text-4xl font-black text-slate-900 mb-2 group-hover/stat:scale-110 group-hover/stat:text-blue-600 transition-all origin-left">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Special Stat Card */}
                <div className="relative p-8 rounded-3xl overflow-hidden hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-blue-600/20 transition-all duration-500 group/highlight">
                  {/* Background Gradients */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-blue-800" />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover/highlight:bg-white/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="text-5xl font-black text-white mb-2">
                        {t.marketing.about.stats[2]?.value}
                      </div>
                      <div className="text-xs text-blue-100/90 font-bold uppercase tracking-widest">
                        {t.marketing.about.stats[2]?.label}
                      </div>
                    </div>

                    <div className="w-14 h-14 bg-white/15 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/highlight:scale-110 group-hover/highlight:bg-white/20 transition-all duration-500">
                      <div className="w-5 h-5 rounded-full border-[3px] border-white animate-pulse" />
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

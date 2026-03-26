import React from "react";

export default function ApproachSection({ t, lang }) {
  return (
    <section
      id="approach"
      className="py-12 sm:py-20 relative z-10 overflow-hidden bg-white"
      style={{
        backgroundImage: "radial-gradient(#e2e8f0 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Accent glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-200/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-5">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-slate-900">
              {t.marketing.approach.title}
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
          <p className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">
            {lang === "ar"
              ? "منهجيتنا الاستراتيجية تضمن أن كل حملة مدعومة بالبيانات وتنفذ بدقة."
              : "Our strategic methodology ensures that every campaign is backed by data and executed with precision."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.marketing.approach.steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group h-full">
                {idx < 3 && (
                  <div className="absolute top-1/2 left-[calc(100%-16px)] w-16 h-px bg-linear-to-r from-blue-200 to-transparent hidden lg:block z-0" />
                )}

                <div className="relative z-10 p-7 h-full rounded-[28px] border border-slate-100 bg-white hover:border-blue-300 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-100 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity" />
                    <div className="w-14 h-14 bg-blue-50/80 rounded-xl flex items-center justify-center text-blue-600 border border-blue-100 group-hover:scale-105 transition-transform relative">
                      <Icon className="w-7 h-7" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full text-[9px] font-black border-[3px] border-white">
                        {idx + 1}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-black mb-2 text-slate-900 transition-colors group-hover:text-blue-600">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

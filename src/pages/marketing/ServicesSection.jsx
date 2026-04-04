import { ArrowUpRight } from "lucide-react";

export default function ServicesSection({
  t,
  lang,
  selectedServices,
  openProjectModal,
}) {
  return (
    <section
      id="services"
      className="py-12 sm:py-20 relative z-10 overflow-hidden bg-[#fafcff]"
    >
      {/* --- Premium Background --- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Soft Modern Grid */}
        <div
          className="absolute inset-0 opacity-[0.6]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.12) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
          }}
        />

        {/* Dynamic Abstract Glows */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-300/35 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-200/50 blur-[130px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-200 bg-white shadow-sm text-blue-600 text-[11px] font-black tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
            {t.marketing.services.title}
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            {t.marketing.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.marketing.services.items.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedServices.includes(service.id);
            return (
              <div
                key={service.id}
                onClick={() => openProjectModal(service.id)}
                className={`group relative p-8 md:p-10 rounded-[2.5rem] cursor-pointer overflow-hidden transition-all duration-700 flex flex-col justify-between ${
                  isSelected
                    ? "shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_-15px_rgba(37,99,235,0.5)] -translate-y-2"
                    : "bg-slate-800 border border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] hover:border-blue-500 hover:-translate-y-2"
                }`}
                style={{
                  background: isSelected
                    ? "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)"
                    : "linear-gradient(180deg, #1f2937 0%, #111827 100%)",
                }}
              >
                {/* Decorative Highlights */}
                {isSelected && (
                  <>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-200/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                  </>
                )}
                {!isSelected && (
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                )}

                <div className="relative z-10 flex-1">
                  {/* Icon Container */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      isSelected
                        ? "bg-white/20 border border-white/20 text-white shadow-inner"
                        : "bg-slate-700 border border-slate-600 text-blue-400 shadow-xl shadow-slate-900/20 group-hover:shadow-blue-500/20 group-hover:border-blue-400"
                    }`}
                  >
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>

                  {/* Title & Desc */}
                  <h3
                    className={`text-2xl font-black mb-4 tracking-tight transition-colors duration-500 ${isSelected ? "text-white" : "text-white group-hover:text-blue-300"}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-lg leading-relaxed font-light transition-colors duration-500 ${isSelected ? "text-blue-100/90" : "text-slate-300 group-hover:text-slate-200"}`}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="relative z-10 mt-10 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-2 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-700 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md"
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-black uppercase tracking-widest transition-all duration-500 group-hover:translate-x-2 ${
                      isSelected
                        ? "text-white"
                        : "text-slate-400 group-hover:text-blue-600"
                    }`}
                  >
                    {lang === "en" ? "Add to Project" : "إضافة للمشروع"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

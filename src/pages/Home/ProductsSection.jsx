import {
  Search,
  Activity,
  Shield,
  Wrench,
  Droplet,
  Cpu,
  ChevronRight,
} from "lucide-react";

const productIcons = [Search, Activity, Shield, Wrench, Droplet, Cpu];

export default function ProductsSection({ t, lang }) {
  return (
    <section
      id="products"
      className="py-12 sm:py-20 relative overflow-hidden z-10"
      style={{
        background:
          "linear-gradient(160deg, #030310 0%, #020218 50%, #050525 100%)",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.3] bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 80%)",
        }}
      ></div>

      {/* Top Glow Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#1A1AFA]/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-[#1A1AFA]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A1AFA]/20 bg-[#1A1AFA]/8 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
            {lang === "ar" ? "منتجاتنا" : "PRODUCT CATALOGUE"}
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-white">
            {t.products.title}
          </h2>
          <p className="text-blue-200/40 text-base font-light leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.items.map((item, idx) => {
            const Icon = productIcons[idx];
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-[32px] text-center border border-blue-500/10 hover:border-[#1A1AFA]/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(26,26,250,0.06) 0%, rgba(10,10,40,0.8) 100%)",
                }}
              >
                <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-[#1A1AFA]/10 blur-[50px] rounded-full group-hover:bg-[#1A1AFA]/20 transition-all" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#1A1AFA]/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/10 group-hover:bg-[#1A1AFA] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-blue-200/60 font-light leading-relaxed mb-6">
                    {item.desc}
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

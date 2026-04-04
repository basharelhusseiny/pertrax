import React from "react";
import { Droplet, Factory, Settings, Zap, HardHat, Waves } from "lucide-react";

const industries = [
  {
    Icon: Droplet,
    image: "/oil-new.jpeg",
    accent: "#0ea5e9",
    label: "Water Treatment",
  },
  {
    Icon: Factory,
    image: "/petro.jpg",
    accent: "#3b82f6",
    label: "Manufacturing",
  },
  {
    Icon: Settings,
    image: "/tsne3.jpg",
    accent: "#6366f1",
    label: "Industrial Systems",
  },
  {
    Icon: Zap,
    image: "/twled.webp",
    accent: "#f59e0b",
    label: "Energy & Power",
  },
  {
    Icon: HardHat,
    image: "/t3deen.jpg",
    accent: "#10b981",
    label: "Construction",
  },
  {
    Icon: Waves,
    image: "/water.jpg",
    accent: "#06b6d4",
    label: "Marine & Offshore",
  },
];

export default function IndustriesSection({ t, lang }) {
  const items = t?.industries?.items || industries.map((i) => i.label);

  return (
    <section
      id="industries"
      className="py-12 sm:py-20 relative overflow-hidden bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.9]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 90%, transparent 100%)",
        }}
      />
      {/* Soft color blobs */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-sky-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold tracking-[0.15em] uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              {lang === "ar" ? "قطاعاتنا" : "Core Sectors"}
            </div>

            <h2
              className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t?.industries?.title || (
                <>
                  Industries
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-blue-600 to-indigo-500">
                    We Serve
                  </span>
                </>
              )}
            </h2>

            <div className="flex items-center gap-3">
              <div className="h-[3px] w-16 bg-linear-to-r from-sky-500 to-blue-500 rounded-full" />
              <div className="h-[3px] w-6 bg-sky-500/30 rounded-full" />
              <div className="h-[3px] w-3 bg-sky-500/15 rounded-full" />
            </div>
          </div>

          <p className="text-slate-400 max-w-xs text-base leading-relaxed lg:text-right font-light">
            {t?.industries?.subtitle ||
              "Delivering precision engineering solutions across critical industrial sectors worldwide."}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((name, idx) => {
            const { Icon, image, accent } = industries[idx] || industries[0];
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ height: "380px" }}
              >
                {/* Full bleed image — clearly visible */}
                <img
                  src={image}
                  alt={name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay — lighter so image shows through */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-500" />

                {/* Colored accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at 30% 70%, ${accent}, transparent 65%)`,
                  }}
                />

                {/* Top-left: icon badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${accent}33, ${accent}11)`,
                      boxShadow: `0 4px 20px ${accent}40`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Top-right: index number */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="text-white/25 text-xs font-bold tracking-widest tabular-nums group-hover:text-white/50 transition-colors duration-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
                  {/* Animated accent bar */}
                  <div
                    className="h-[2px] w-8 rounded-full mb-4 transition-all duration-500 group-hover:w-16"
                    style={{ background: accent }}
                  />

                  <h3 className="text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-white transition-colors duration-300">
                    {name}
                  </h3>
                </div>

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px transparent`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

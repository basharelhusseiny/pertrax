import React from "react";
import {
  Droplet,
  Factory,
  Settings,
  Zap,
  HardHat,
  ArrowRight,
} from "lucide-react";

const indIcons = [Droplet, Factory, Settings, Zap, HardHat, Droplet];

export default function IndustriesSection({ t, lang }) {
  return (
    <section
      id="industries"
      className="py-24 relative overflow-hidden z-20 bg-white"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
        }}
      ></div>

      {/* Premium Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-100 to-transparent opacity-50" />
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-24 w-[400px] h-[400px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              CORE SECTORS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]!">
              {t.industries.title}
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-blue-600 via-blue-400 to-cyan-300 rounded-full"></div>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed">
            {t.industries.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.industries.items.map((name, idx) => {
            const Icon = indIcons[idx];
            return (
              <div
                key={idx}
                className="group relative h-[420px] rounded-[48px] overflow-hidden transition-all duration-700 hover:-translate-y-2 cursor-pointer shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] bg-white border border-slate-100"
              >
                {/* Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/Hero-image.jpeg" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-20 group-hover:opacity-40 grayscale group-hover:grayscale-0" 
                    alt={name} 
                  />
                  {/* Premium Overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent z-10" />
                  <div className="absolute inset-0 bg-linear-to-b from-blue-50/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                </div>
                
                {/* Content Layer */}
                <div className="relative z-20 h-full flex flex-col justify-between p-10">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-white shadow-xl shadow-blue-900/5 rounded-[22px] flex items-center justify-center text-blue-600 border border-slate-50 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-10 transition-all duration-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-blue-600 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white shadow-lg">
                      <ArrowRight className={`w-5 h-5 ${lang === "ar" ? "rotate-180" : ""}`} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-1 w-12 bg-blue-600/20 rounded-full group-hover:w-20 group-hover:bg-blue-600 transition-all duration-500" />
                    <h3 className="text-3xl font-black text-slate-800 tracking-tight leading-tight group-hover:text-blue-700 transition-colors duration-500">
                      {name}
                    </h3>
                  </div>
                </div>

                {/* Subtle Hover Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/10 rounded-[48px] transition-colors duration-500 z-30 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

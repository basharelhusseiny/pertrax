import React from 'react';
import { Shield, CheckCircle, TrendingUp, MapPin } from 'lucide-react';

const propIcons = [Shield, CheckCircle, TrendingUp, MapPin];

export default function ValuesSection({ t }) {
  return (
    <div className="relative z-20 py-12 bg-linear-to-r from-blue-950 via-[#0a0a1f] to-blue-950 border-t border-blue-900/40">
      {/* Glowing Mid-Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.values.map((prop, i) => {
            const Icon = propIcons[i];
            return (
              <div
                key={i}
                className="group relative p-7 bg-white/3 backdrop-blur-md rounded-[28px] border border-blue-500/10 hover:border-blue-400/30 transition-all duration-500 shadow-xl overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-600/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 transition-all" />
                <div className="relative z-10 flex flex-col items-start">
                  <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 text-blue-400 border border-blue-500/10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-white text-base mb-1.5 tracking-tight">{prop.title}</h4>
                  <p className="text-blue-200/50 text-xs font-light leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Shield, CheckCircle, TrendingUp, MapPin } from 'lucide-react';

const propIcons = [Shield, CheckCircle, TrendingUp, MapPin];

export default function ValuesSection({ t }) {
  return (
    <div className="relative z-20 py-16 bg-white border-t border-gray-100 overflow-hidden">
      {/* Light Animated Blue Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[50%] -left-[10%] w-[60%] h-[150%] bg-blue-100/80 rounded-full blur-[100px] mix-blend-multiply animate-[float_22s_ease-in-out_infinite]"></div>
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[120%] bg-sky-100/50 rounded-full blur-[120px] mix-blend-multiply animate-[float_28s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-full bg-indigo-50/90 rounded-full blur-[100px] mix-blend-multiply animate-[float_32s_ease-in-out_infinite_2s]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.values.map((prop, i) => {
            const Icon = propIcons[i];
            return (
              <div
                key={i}
                className="group relative p-8 bg-white/70 backdrop-blur-xl rounded-[32px] border border-white/60 hover:border-blue-200/60 transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.1)] overflow-hidden hover:-translate-y-1"
              >
                {/* Internal Hover Glow */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-400/20 blur-2xl rounded-full group-hover:bg-blue-400/40 transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col items-start">
                  <div className="w-14 h-14 bg-linear-to-br from-blue-50 to-blue-100/50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 border border-blue-200/50 group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2 tracking-tight group-hover:text-blue-700 transition-colors">{prop.title}</h4>
                  <p className="text-slate-500 text-sm font-normal leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

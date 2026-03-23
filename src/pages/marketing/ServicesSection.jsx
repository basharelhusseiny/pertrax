import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function ServicesSection({ t, lang, selectedServices, openProjectModal }) {
  return (
    <section
      id="services"
      className="py-20 relative z-10 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #030318 0%, #050528 60%, #020215 100%)' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A1AFA]/8 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/8 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/15 bg-blue-500/8 text-blue-400 text-[9px] font-black tracking-[0.2em] uppercase mb-5">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight tracking-tight text-white">
            {t.marketing.services.title}
          </h2>
          <p className="text-blue-200/45 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            {t.marketing.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.marketing.services.items.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedServices.includes(service.id);
            return (
              <div
                key={service.id}
                onClick={() => openProjectModal(service.id)}
                className={`group relative p-8 rounded-[32px] border cursor-pointer overflow-hidden transition-all duration-500 h-full flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#1A1AFA] shadow-[0_20px_40px_-10px_rgba(26,26,250,0.35)]'
                    : 'border-blue-500/10 hover:border-blue-400/30'
                }`}
                style={{
                  background: isSelected
                    ? 'linear-gradient(135deg, #1A1AFA 0%, #1010c0 100%)'
                    : 'linear-gradient(135deg, rgba(26,26,250,0.06) 0%, rgba(3,3,30,0.95) 100%)',
                }}
              >
                <div className={`absolute -right-4 -bottom-4 w-28 h-28 rounded-full blur-[60px] opacity-20 transition-all duration-700 ${isSelected ? 'bg-white' : 'bg-blue-500'}`} />
                
                <div className="relative z-10 flex-1">
                  <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center mb-6 transition-all duration-500 ${
                    isSelected
                      ? 'bg-white/20 rotate-12 scale-105'
                      : 'bg-blue-900/40 text-blue-400 border border-blue-500/15 group-hover:rotate-12 group-hover:scale-105 group-hover:bg-[#1A1AFA] group-hover:text-white'
                  }`}>
                    <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-blue-400 group-hover:text-white'}`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className={`text-xl font-black mb-3 tracking-tight transition-colors duration-500 ${isSelected ? 'text-white' : 'text-white group-hover:text-blue-300'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-light transition-colors duration-500 ${isSelected ? 'text-blue-100/75' : 'text-blue-200/45'}`}>
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-500">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isSelected ? 'bg-white/20' : 'bg-[#1A1AFA]/15'}`}>
                    <ExternalLink className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-blue-400'}`} />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${isSelected ? 'text-white' : 'text-blue-400'}`}>
                    {lang === 'en' ? 'Add to Project' : 'إضافة للمشروع'}
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

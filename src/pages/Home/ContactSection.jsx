import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactSection({ t }) {
  return (
    <section id="contact" className="py-20 relative overflow-hidden z-10" style={{background: 'linear-gradient(180deg, #030318 0%, #010112 60%, #020215 100%)'}}>
      {/* Accent glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#1A1AFA]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-[40px] border border-blue-500/15 flex flex-col lg:flex-row shadow-2xl" style={{background: 'linear-gradient(135deg, rgba(26,26,250,0.08) 0%, rgba(1,1,24,0.95) 100%)'}}>
          
          {/* Contact Info (Left) - Blue gradient side */}
          <div className="lg:w-2/5 relative overflow-hidden p-10 lg:p-14 flex flex-col justify-between" style={{background: 'linear-gradient(145deg, #1A1AFA 0%, #1010c0 50%, #0a0a80 100%)'}}>
             <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/10 animate-[spin_40s_linear_infinite] scale-150 translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-white/10 animate-[spin_30s_linear_infinite_reverse] -translate-x-1/2 translate-y-1/2" />
             <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />

             <div className="relative z-10 space-y-6">
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-black tracking-[0.2em] uppercase mb-5">
                      GET IN TOUCH
                   </div>
                   <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight mb-3 text-white">
                      {t.contact.title}
                   </h2>
                   <p className="text-blue-100/60 text-sm font-light leading-relaxed">
                      {t.contact.subtitle}
                   </p>
                </div>

                <div className="space-y-7 pt-6">
                   {[
                     { icon: MapPin, label: t.contact.hq, val: t.contact.hqDesc },
                     { icon: Phone, label: t.contact.phone, val: '+966 11 123 4567' },
                     { icon: Mail, label: t.contact.email, val: 'info@petrax-sa.com' },
                   ].map(({ icon: Icon, label, val }, i) => (
                     <div key={i} className="flex items-start gap-5 group cursor-pointer">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-700 transition-all duration-400 shrink-0">
                           <Icon className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-black text-base mb-0.5">{label}</h4>
                           <p className="text-blue-100/55 text-xs font-light">{val}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:w-3/5 p-10 lg:p-14">
             <h3 className="text-2xl font-black text-white mb-8 tracking-tight">
                {t.contact.formTitle}
             </h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   {[
                     { label: t.contact.labels.name, type: 'text', ph: t.contact.placeholders.name },
                     { label: t.contact.labels.company, type: 'text', ph: t.contact.placeholders.company },
                     { label: t.contact.labels.email, type: 'email', ph: t.contact.placeholders.email },
                   ].map(({ label, type, ph }, i) => (
                     <div key={i} className="space-y-1.5">
                        <label className="text-[9px] font-black text-blue-400/70 uppercase tracking-widest px-1">{label}</label>
                        <input type={type} className="w-full px-5 py-3.5 bg-blue-950/40 border border-blue-500/15 rounded-xl text-white focus:border-[#1A1AFA] transition-all outline-none text-sm placeholder:text-blue-400/20" placeholder={ph} />
                     </div>
                   ))}
                   <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-blue-400/70 uppercase tracking-widest px-1">{t.contact.labels.dept}</label>
                      <select className="w-full px-5 py-3.5 bg-blue-950/40 border border-blue-500/15 rounded-xl text-white focus:border-[#1A1AFA] transition-all outline-none text-sm">
                         {t.contact.depts.map((d, i) => <option key={i} className="bg-[#04041e]">{d}</option>)}
                      </select>
                   </div>
                </div>

                <div className="space-y-1.5">
                   <label className="text-[9px] font-black text-blue-400/70 uppercase tracking-widest px-1">{t.contact.labels.msg}</label>
                   <textarea rows="4" className="w-full px-5 py-3.5 bg-blue-950/40 border border-blue-500/15 rounded-xl text-white focus:border-[#1A1AFA] transition-all outline-none text-sm resize-none placeholder:text-blue-400/20" placeholder={t.contact.placeholders.msg}></textarea>
                </div>

                <button className="group relative w-full py-4 bg-[#1A1AFA] hover:bg-blue-600 text-white rounded-[20px] font-black text-base flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 hover:shadow-[0_15px_30px_-10px_rgba(26,26,250,0.5)]">
                   <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                   <Send className="w-4 h-4" />
                   {t.contact.submit}
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}

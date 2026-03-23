import React from "react";
import { ExternalLink } from "lucide-react";
import Logo from "../../components/ui/Logo";

export default function Footer({ t }) {
  return (
    <footer
      className="relative overflow-hidden z-10 py-14 border-t border-blue-900/30"
      style={{
        background: "linear-gradient(180deg, #010112 0%, #020219 100%)",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#1A1AFA]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start pb-12">
          <div className="space-y-4">
            <Logo className="text-2xl text-white opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer" />
            <p className="text-blue-200/35 text-sm font-light leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-blue-400/60 font-black text-[10px] uppercase tracking-[0.2em]">
              QUICK ACCESS
            </h5>
            <a
              href="/marketing"
              className="group inline-flex items-center gap-3 text-blue-400 hover:text-white transition-all duration-400 font-black text-sm p-3.5 rounded-xl bg-[#1A1AFA]/8 border border-[#1A1AFA]/15 hover:border-[#1A1AFA]/40 self-start"
            >
              {t.footer.visitDiv}
              <ExternalLink className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          <div className="space-y-4">
            <h5 className="text-blue-400/60 font-black text-[10px] uppercase tracking-[0.2em]">
              LEGAL
            </h5>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="hover:text-white transition-colors text-blue-200/40 text-xs font-light"
              >
                {t.footer.privacy}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-blue-200/40 text-xs font-light"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-blue-200/25 text-[10px] uppercase tracking-widest font-light">
            {t.footer.rights}
          </span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1A1AFA] animate-pulse" />
            <span className="text-[10px] text-[#1A1AFA]/80 font-black uppercase tracking-[0.3em]">
              {t.footer.vision}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

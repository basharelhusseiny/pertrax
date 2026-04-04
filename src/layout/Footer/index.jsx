import React from "react";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../../components/ui/Logo";

export default function Footer({ t, lang }) {
  const isAr = lang === "ar";

  return (
    <footer
      className="relative overflow-hidden z-10 py-20 border-t border-blue-900/30"
      style={{
        background: "linear-gradient(180deg, #010112 0%, #020219 100%)",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1A1AFA]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16">
          {/* Brand & Desc */}
          <div className="space-y-6 lg:col-span-1">
            <Logo
              isScrolled={true}
              className="h-10 md:h-12 opacity-80 hover:opacity-100 transition-all duration-500 cursor-pointer"
            />
            <p className="text-blue-200/50 text-base font-light leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h5 className="text-blue-400/60 font-black text-xs uppercase tracking-[0.2em]">
              {isAr ? "وصول سريع" : "Quick Access"}
            </h5>
            <div className="flex flex-col gap-4">
              <a
                href="/marketing"
                className="group inline-flex items-center gap-3 text-blue-400 hover:text-white transition-all duration-400 font-black text-base p-4 rounded-xl bg-[#1A1AFA]/8 border border-[#1A1AFA]/15 hover:border-[#1A1AFA]/40 self-start w-fit"
              >
                {t.footer.visitDiv}
                <ExternalLink
                  className={`w-4 h-4 group-hover:rotate-12 transition-transform ${isAr ? "-scale-x-100" : ""}`}
                />
              </a>
              <a
                href="#about"
                className="hover:text-blue-300 transition-colors text-blue-200/60 text-sm font-medium w-fit"
              >
                {isAr ? "من نحن" : "About Us"}
              </a>
              <a
                href="/marketing"
                className="hover:text-blue-300 transition-colors text-blue-200/60 text-sm font-medium w-fit"
              >
                {isAr ? "التسويق" : "Marketing"}
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h5 className="text-blue-400/60 font-black text-xs uppercase tracking-[0.2em]">
              {isAr ? "تواصل معنا" : "Contact Us"}
            </h5>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@petrax-sa.com"
                className="flex items-center gap-3 hover:text-white transition-colors text-blue-200/60 text-sm font-medium w-fit"
              >
                <Mail className="w-5 h-5 text-blue-400/70" />
                info@petrax-sa.com
              </a>
              <div
                className="flex items-center gap-3 hover:text-white transition-colors text-blue-200/60 text-sm font-medium w-fit"
                dir="ltr"
              >
                <Phone className="w-5 h-5 text-blue-400/70" />
                <div className="flex flex-col gap-1">
                  <span>+966 53 734 7710</span>
                  <span>+966 53 361 3446</span>
                </div>
              </div>
              <div className="flex items-start gap-4 text-blue-200/60 text-sm font-medium leading-relaxed max-w-[250px]">
                <MapPin className="w-5 h-5 text-blue-400/70 shrink-0 mt-0.5" />
                {isAr
                  ? "الخبر، المنطقة الشرقية، المملكة العربية السعودية"
                  : "Khobar, Eastern province, Saudi Arabia "}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h5 className="text-blue-400/60 font-black text-xs uppercase tracking-[0.2em]">
              {isAr ? "قانوني" : "Legal"}
            </h5>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="hover:text-white transition-colors text-blue-200/60 text-sm font-medium w-fit"
              >
                {t.footer.privacy}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-blue-200/60 text-sm font-medium w-fit"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-blue-200/40 text-[11px] md:text-xs uppercase tracking-widest font-medium text-center md:text-left">
            {t.footer.rights}
          </span>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#1A1AFA] animate-pulse" />
            <span className="text-xs text-[#1A1AFA] font-black uppercase tracking-[0.3em]">
              {t.footer.vision}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

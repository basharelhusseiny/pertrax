import { Globe, X } from "lucide-react";
import Logo from "../../components/ui/Logo";

export default function MobileMenu({
  mobileMenuOpen,
  closeMenu,
  toggleLang,
  navLinks,
  handleScrollTo,
  t,
}) {
  return (
    <div
      className={`fixed inset-0 z-55 flex flex-col transition-all duration-500 ease-in-out ${
        mobileMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{
        background:
          "linear-gradient(160deg, #03030f 0%, #060622 60%, #030318 100%)",
      }}
    >
      {/* Top border glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
      {/* Background Orb */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#1A1AFA]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-800/8 blur-[100px] rounded-full pointer-events-none" />

      {/* Header Row */}
      <div className="flex items-center justify-between px-6 pt-5 pb-6 border-b border-blue-900/30 relative z-10">
        <Logo isScrolled={true} className="h-8 md:h-10 w-auto" />
        <button
          onClick={closeMenu}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
          <X size={20} />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 flex flex-col justify-center px-8 space-y-1 relative z-10">
        {navLinks.map((link, idx) => (
          <button
            key={link.name}
            onClick={() => handleScrollTo(link.id, link.path)}
            className="group flex items-center justify-between w-full py-4 border-b border-blue-900/20 text-blue-100/60 hover:text-white transition-all duration-300"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <span className="text-xl font-black uppercase tracking-[0.15em] group-hover:translate-x-2 transition-transform duration-300">
              {link.name}
            </span>
            <span className="text-[#1A1AFA] opacity-0 group-hover:opacity-100 transition-opacity text-lg font-black">
              →
            </span>
          </button>
        ))}
      </div>

      {/* Bottom: Language + CTA */}
      <div className="px-8 pb-12 pt-8 relative z-10 space-y-5">
        <button
          onClick={() => {
            toggleLang();
            closeMenu();
          }}
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border border-blue-500/20 bg-blue-900/20 text-blue-300 font-bold text-sm tracking-widest uppercase hover:bg-blue-800/30 transition-all"
        >
          <Globe className="w-4 h-4" />
          {t.nav.lang}
        </button>
        <button
          onClick={() => handleScrollTo("contact")}
          className="w-full py-4 bg-[#1A1AFA] hover:bg-blue-600 text-white rounded-2xl font-black text-sm tracking-widest uppercase transition-all hover:shadow-[0_10px_30px_rgba(26,26,250,0.4)]"
        >
          {t.nav.getInTouch}
        </button>
      </div>
    </div>
  );
}

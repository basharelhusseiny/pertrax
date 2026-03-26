import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../components/ui/Logo";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router";

export default function MainHeader({
  lang,
  toggleLang,
  t,
  scrollTo,
  isScrolled,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, id: "home", path: "/" },
    { name: t.nav.marketing, id: "marketing", path: "/marketing" },
    { name: t.nav.about, id: "about" },
    { name: t.nav.products, id: "products" },
    { name: t.nav.industries, id: "industries" },
    { name: t.nav.solutions, id: "solutions" },
    { name: t.nav.contact, id: "contact" },
  ];

  const navigate = useNavigate();

  const handleScrollTo = (id, path) => {
    setMobileMenuOpen(false);
    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    } else {
      scrollTo(id);
    }
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#184293]/80 backdrop-blur-2xl border-b border-white/60 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <button
            onClick={() => handleScrollTo("home", "/")}
            className="focus:outline-none z-60 relative"
          >
            <Logo
              isScrolled={isScrolled}
              className="h-10 md:h-12 w-auto"
            />
          </button>

          <Navbar
            navLinks={navLinks}
            handleScrollTo={handleScrollTo}
            toggleLang={toggleLang}
            lang={lang}
            t={t}
            isScrolled={isScrolled}
          />

          <button
            className={`lg:hidden z-60 relative focus:outline-none transition-colors duration-300 ${isScrolled ? "text-white" : "text-slate-800"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        closeMenu={closeMenu}
        toggleLang={toggleLang}
        navLinks={navLinks}
        handleScrollTo={handleScrollTo}
        lang={lang}
        t={t}
      />
    </>
  );
}

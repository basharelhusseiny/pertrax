import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router";
import dict from "./data/dict";

// Components
import Layout from "./layout";
import Home from "./pages/Home";
import MarketingPage from "./pages/marketing";
import Chatbot from "./components/Chatbot";

function AppContent() {
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const t = dict[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    document.documentElement.dir = t.dir;
    return () => window.removeEventListener("scroll", handleScroll);
  }, [t.dir]);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      dir={t.dir}
      className="text-white bg-[#030303] selection:bg-[#1A1AFA] selection:text-white overflow-x-hidden flex flex-col min-h-screen"
    >
      <Layout
        lang={lang}
        toggleLang={toggleLang}
        t={t}
        scrollTo={scrollTo}
        isScrolled={isScrolled}
      >
        <Routes>
          <Route
            path="/"
            element={<Home t={t} lang={lang} scrollTo={scrollTo} />}
          />
          <Route
            path="/marketing"
            element={<MarketingPage t={t} lang={lang} scrollTo={scrollTo} />}
          />
        </Routes>
      </Layout>

      {location.pathname === "/" && <Chatbot t={t} lang={lang} />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

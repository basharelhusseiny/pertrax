import { ArrowRight, Activity } from "lucide-react";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";

export default function HeroSection({ t, lang, scrollTo }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0 bg-pan bg-linear-to-br from-blue-950 via-gray-900 to-black"></div>
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-color-dodge bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0djI2SDI0VjM0SDJWMjRoMjJWMGgxMnYyNGgyMnYzNEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] animate-[panBg_30s_linear_infinite]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center w-full">
        <div className="lg:w-3/5">
          <Reveal delay={100}>
            <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/50 rounded-full bg-blue-900/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="text-cyan-300 font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                {t.hero.tag}
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 text-balance">
              {t.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-white">
                {t.hero.titleHighlight}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                primary
                onClick={() => scrollTo("solutions")}
                className="text-lg px-8 py-4 bg-linear-to-r from-blue-700 to-blue-600 border border-blue-500/50"
              >
                {t.hero.cta1}{" "}
                <ArrowRight
                  className={`w-5 h-5 transition-transform ${lang === "ar" ? "rotate-180 group-hover:-translate-x-1 mr-2" : "group-hover:translate-x-1 ml-2"}`}
                />
              </Button>
              <Button
                onClick={() => scrollTo("products")}
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm"
              >
                {t.hero.cta2}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:flex lg:w-2/5 justify-end">
          <Reveal delay={500} direction={lang === "ar" ? "right" : "left"}>
            <div className="relative group">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full scale-110 pointer-events-none" />
              {/* Frame */}
              <div className="relative overflow-hidden rounded-[40px] border border-blue-500/20 p-2 bg-white/5 backdrop-blur-sm transition-transform duration-700 group-hover:scale-[1.02]">
                <img
                  src="/heroo.jpg"
                  alt="Industrial Equipment"
                  className="w-full h-auto object-cover rounded-[32px] opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                {/* Status Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2.5 rounded-xl border border-blue-500/20 backdrop-blur-xl bg-black/50 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <div className="text-[8px] text-blue-400/60 font-bold uppercase tracking-widest">System Status</div>
                    <div className="text-white font-black text-xs">OPTIMAL</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

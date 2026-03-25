import { ArrowRight, Activity } from "lucide-react";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";

export default function HeroSection({ t, lang, scrollTo }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050810]">
      {/* Background Base with Premium Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-[#0f172a] via-[#050810] to-black"></div>

      {/* Animated Glowing Orbs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] z-0 pointer-events-none"
        style={{ animation: "float 22s ease-in-out infinite" }}
      >
        <div className="w-full h-full bg-blue-600/15 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] z-0 pointer-events-none"
        style={{ animation: "float 28s ease-in-out infinite reverse" }}
      >
        <div className="w-full h-full bg-cyan-700/25 rounded-full blur-[130px] mix-blend-screen"></div>
      </div>
      <div
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] z-0 pointer-events-none"
        style={{ animation: "float 32s ease-in-out infinite 2s" }}
      >
        <div className="w-full h-full bg-indigo-600/15 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 bg-blue-400/50 rounded-full shadow-[0_0_10px_#60a5fa] animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute top-[60%] left-[30%] w-2 h-2 bg-cyan-400/40 rounded-full shadow-[0_0_12px_#22d3ee] animate-[float_18s_ease-in-out_infinite_1s]"></div>

        <div className="absolute top-[40%] left-[15%] w-2 h-2 bg-blue-300/40 rounded-full shadow-[0_0_8px_#93c5fd] animate-[float_22s_ease-in-out_infinite_3s]"></div>
        <div className="absolute top-[10%] left-[50%] w-2 h-2 bg-cyan-300/30 rounded-full shadow-[0_0_15px_#67e8f9] animate-[float_16s_ease-in-out_infinite_4s]"></div>
        <div className="absolute top-[70%] left-[15%] w-1.5 h-1.5 bg-blue-500/50 rounded-full shadow-[0_0_10px_#3b82f6] animate-[float_14s_ease-in-out_infinite_1.5s]"></div>
        <div className="absolute top-[30%] left-[70%] w-2 h-2 bg-indigo-300/40 rounded-full shadow-[0_0_12px_#a5b4fc] animate-[float_22s_ease-in-out_infinite_2.5s]"></div>
        <div className="absolute top-[90%] left-[85%] w-2 h-2 bg-cyan-500/50 rounded-full shadow-[0_0_8px_#06b6d4] animate-[float_17s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute top-[15%] left-[85%] w-1.5 h-1.5 bg-blue-400/50 rounded-full shadow-[0_0_10px_#60a5fa] animate-[float_19s_ease-in-out_infinite_1.2s]"></div>

        <div className="absolute top-[95%] left-[55%] w-1.5 h-1.5 bg-blue-500/40 rounded-full shadow-[0_0_10px_#3b82f6] animate-[float_20s_ease-in-out_infinite_2.8s]"></div>
        <div className="absolute top-[35%] left-[5%] w-2 h-2 bg-cyan-500/30 rounded-full shadow-[0_0_15px_#06b6d4] animate-[float_15s_ease-in-out_infinite_3.2s]"></div>
        <div className="absolute top-[65%] left-[80%] w-1 h-1 bg-indigo-400/40 rounded-full shadow-[0_0_8px_#818cf8] animate-[float_23s_ease-in-out_infinite_0.3s]"></div>

        <div className="absolute top-[55%] left-[65%] w-1.5 h-1.5 bg-blue-300/40 rounded-full shadow-[0_0_10px_#93c5fd] animate-[float_19s_ease-in-out_infinite_0.9s]"></div>
        <div className="absolute top-[30%] left-[95%] w-1 h-1 bg-cyan-400/50 rounded-full shadow-[0_0_8px_#22d3ee] animate-[float_21s_ease-in-out_infinite_3.8s]"></div>
        <div className="absolute top-[78%] left-[95%] w-2 h-2 bg-indigo-300/40 rounded-full shadow-[0_0_12px_#a5b4fc] animate-[float_16s_ease-in-out_infinite_1.4s]"></div>
      </div>

      {/* Subtle Premium Grid Overlay, slightly animated */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none animate-[panBg_60s_linear_infinite]"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      ></div>

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
                  src="/Hero-image.jpeg"
                  alt="Industrial Equipment"
                  className="w-full h-150 object-cover rounded-[32px] opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                {/* Status Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2.5 rounded-xl border border-blue-500/20 backdrop-blur-xl bg-black/50 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <div className="text-sm text-blue-400/60 font-bold uppercase tracking-widest">
                      {lang === "en" ? "System Status" : "حالة النظام"}
                    </div>
                    <div className="text-white font-black text-xs">
                      {lang === "en" ? "OPTIMAL" : "ممتاز"}
                    </div>
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

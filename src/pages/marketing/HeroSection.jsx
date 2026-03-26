import React, { useMemo } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion as Motion } from "framer-motion";

/* ─── Premium Animated Background ─── */
function AnimatedBackground() {
  const shapes = useMemo(
    () => [
      { width: 280, height: 280, left: "15%", top: "25%", duration: 22 },
      { width: 340, height: 340, left: "65%", top: "60%", duration: 26 },
      { width: 220, height: 220, left: "85%", top: "15%", duration: 20 },
      { width: 400, height: 400, left: "5%", top: "75%", duration: 32 },
      { width: 300, height: 300, left: "45%", top: "35%", duration: 28 },
      { width: 260, height: 260, left: "75%", top: "85%", duration: 24 },
    ],
    [],
  );

  const particles = useMemo(
    () => [
      { left: "10%", top: "20%" },
      { left: "85%", top: "15%" },
      { left: "45%", top: "55%" },
      { left: "25%", top: "80%" },
      { left: "70%", top: "40%" },
      { left: "50%", top: "10%" },
      { left: "15%", top: "65%" },
      { left: "80%", top: "90%" },
      { left: "35%", top: "25%" },
      { left: "90%", top: "50%" },
      { left: "40%", top: "70%" },
      { left: "60%", top: "30%" },
      { left: "20%", top: "95%" },
      { left: "75%", top: "55%" },
      { left: "55%", top: "85%" },
    ],
    [],
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none bg-[#f8fbff]"
      style={{ zIndex: 0 }}
    >
      {/* ── GRID (Animated) ── */}
      <Motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(14,165,233,0.1), transparent 70%),
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1.2px, transparent 1.2px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1.2px, transparent 1.2px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 55%, transparent 100%)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/40 via-transparent to-transparent" />

      {/* ── GLOW BLOBS ── */}
      <Motion.div
        className="absolute rounded-full"
        style={{
          width: 1000,
          height: 1000,
          top: "-20%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 75%)",
          filter: "blur(110px)",
        }}
        animate={{ x: [0, 60, -30, 0], y: [0, 40, -50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="absolute rounded-full"
        style={{
          width: 900,
          height: 900,
          bottom: "-25%",
          right: "-15%",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 75%)",
          filter: "blur(100px)",
        }}
        animate={{ x: [0, -50, 40, 0], y: [0, -40, 50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── SHAPES ── */}
      {shapes.map((s, i) => (
        <Motion.div
          key={i}
          className="absolute border border-sky-400/90 rounded-full"
          style={{
            width: s.width,
            height: s.height,
            left: s.left,
            top: s.top,
          }}
          animate={{
            y: [0, -40, 20, 0],
            x: [0, 30, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.05, 0.95, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── GLASS CARDS ── */}
      <Motion.div
        className="absolute hidden md:block w-56 h-56 bg-sky-200/50 border border-sky-200/30 backdrop-blur-3xl rounded-[48px]"
        style={{ top: "15%", right: "12%", rotate: "15deg" }}
        animate={{ y: [0, -30, 15, 0], rotate: [15, 20, 10, 15] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="absolute hidden md:block w-56 h-56 bg-sky-200/20 border border-sky-200/30 backdrop-blur-3xl rounded-[36px]"
        style={{ bottom: "20%", left: "10%", rotate: "-8deg" }}
        animate={{ y: [0, 25, -15, 0], rotate: [-8, -4, -12, -8] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── PARTICLES ── */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute bg-sky-400 rounded-full"
            style={{
              width: 2.5,
              height: 2.5,
              left: p.left,
              top: p.top,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Animations ─── */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Hero ─── */
export default function HeroSection({ t, lang, openProjectModal }) {
  const isAr = lang === "ar";

  const stats = [
    { value: "15+", label: isAr ? "سنة خبرة" : "Years" },
    { value: "200+", label: isAr ? "مشروع" : "Projects" },
    { value: "98%", label: isAr ? "رضا العملاء" : "Satisfaction" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-[#f8fbff]">
      <AnimatedBackground />

      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-300/60 to-transparent" />

      <Motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Motion.div variants={fadeUp} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping opacity-80" />
            {t?.marketing?.hero?.badge ?? "Industrial Excellence"}
          </span>
        </Motion.div>

        <Motion.div variants={fadeUp} className="mb-3">
          <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.03em] leading-[1.02] text-slate-900">
            <span className="block pb-2">
              {t?.marketing?.hero?.title1 ?? "Engineering"}
            </span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r pb-6 from-blue-700 via-blue-600 to-sky-500">
              {t?.marketing?.hero?.title2 ?? "The Future"}
            </span>
          </h1>
        </Motion.div>

        <Motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto leading-relaxed font-light mb-12"
        >
          {t?.marketing?.hero?.subtitle ??
            "Delivering precision-engineered solutions across critical industrial sectors worldwide."}
        </Motion.p>

        <Motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <Motion.button
            onClick={() => openProjectModal?.()}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2.5 overflow-hidden bg-linear-to-r from-blue-700 to-blue-600"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/15 to-transparent skew-x-12" />
            <span className="relative z-10">
              {t?.marketing?.hero?.ctaPrimary ?? "Start a Project"}
            </span>
            <ArrowRight
              className={`w-4 h-4 relative z-10 ${isAr ? "rotate-180" : ""}`}
            />
          </Motion.button>

          <Motion.a
            href="#about"
            whileHover={{ scale: 1.02 }}
            className="group w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-sm text-slate-700 border border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50/50 flex items-center justify-center gap-2.5"
          >
            {t?.marketing?.hero?.ctaSecondary ?? "Learn More"}
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 group-hover:text-blue-500 transition-all duration-300" />
          </Motion.a>
        </Motion.div>

        <Motion.div
          variants={fadeUp}
          className="mt-12 md:mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {stats.map(({ value, label }, i) => (
            <React.Fragment key={label}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-slate-900">
                  {value}
                </div>
                <div className="text-xs text-slate-400 mt-1 tracking-widest uppercase">
                  {label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block h-10 w-px bg-slate-200" />
              )}
            </React.Fragment>
          ))}
        </Motion.div>
      </Motion.div>

      <div className="absolute bottom-0 inset-x-0 h-20 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}

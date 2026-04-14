import React, { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function TermsOfService({ t, lang }) {
  const navigate = useNavigate();
  const isAr = lang === "ar";
  const data = t.legal.terms;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-8 flex items-center gap-2 text-blue-400/60 hover:text-blue-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${isAr ? "rotate-180 group-hover:translate-x-1" : ""}`} />
          <span className="text-sm font-medium">{isAr ? "العودة" : "Back"}</span>
        </button>

        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 mb-6 group">
            <FileText className="w-8 h-8 text-blue-500 transition-transform duration-500 group-hover:scale-110" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {data.title}
          </h1>
          <p className="text-blue-400/60 font-medium">{data.lastUpdated}</p>
        </Motion.div>

        {/* Content */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          <section>
            <p className="text-lg text-blue-100/80 leading-relaxed font-light">
              {data.intro}
            </p>
          </section>

          <div className="grid gap-12">
            {data.sections.map((section, index) => (
              <Motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                className="space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors"
              >
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <p className="text-blue-100/60 leading-relaxed font-light">
                  {section.content}
                </p>
              </Motion.section>
            ))}
          </div>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12 border-t border-white/10 text-center"
          >
            <p className="text-blue-400/40 text-sm italic">
              {isAr
                ? "باستخدامك لموقعنا، فإنك تقبل هذه الشروط بالكامل."
                : "By using our website, you accept these terms in full."}
            </p>
          </Motion.div>
        </Motion.div>
      </div>
    </div>
  );
}

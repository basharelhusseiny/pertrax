import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

const Dynamic3DChart = ({ t, lang }) => {
  const [data, setData] = useState([
    { label: "Asset Uptime", value: 92, color: "from-blue-600 to-blue-800" },
    { label: "Efficiency", value: 78, color: "from-cyan-400 to-blue-600" },
    {
      label: "Safety Score",
      value: 98,
      color: "from-emerald-400 to-emerald-600",
    },
    {
      label: "Predictive AI",
      value: 65,
      color: "from-indigo-500 to-purple-600",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => {
          const fluctuation = Math.floor(Math.random() * 15) - 5;
          const newValue = Math.min(
            Math.max(item.value + fluctuation, 40),
            100,
          );
          return { ...item, value: newValue };
        }),
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800"
      dir="ltr"
    >
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px] transform-[perspective(500px)_rotateX(60deg)] origin-bottom"></div>

      <div
        className={`absolute top-6 z-20 ${lang === "ar" ? "right-6 text-right" : "left-6 text-left"}`}
        dir={t.dir}
      >
        <h4 className="text-white font-bold text-lg flex items-center gap-2">
          {lang === "ar" && (
            <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
          )}
          {t.dashboard.title}
          {lang === "en" && (
            <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
          )}
        </h4>
        <p className="text-gray-400 text-sm">{t.dashboard.subtitle}</p>
      </div>

      <div className="relative w-full max-w-md h-64 mt-12 perspective-[1000px] flex items-end justify-around px-8">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="relative group w-16 flex flex-col items-center transform-3d transition-all duration-1000 ease-in-out"
            style={{ height: `${item.value}%` }}
          >
            <div
              className={`absolute bottom-0 w-full h-full bg-linear-to-t ${item.color} shadow-lg transform-[rotateX(20deg)] origin-bottom transition-all duration-1000 border-t border-white/30 rounded-t-sm group-hover:brightness-125`}
            >
              <div className="absolute top-0 -right-4 w-4 h-full bg-black/30 transform-[skewY(-45deg)_translateY(-2px)] origin-top-left transition-all duration-1000"></div>
            </div>
            <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 font-bold px-3 py-1 rounded shadow-lg text-sm transform-[translateZ(50px)]">
              {item.value}%
            </div>
            <div className="absolute -bottom-8 w-32 text-center text-xs font-semibold text-gray-300 transform-[rotateX(20deg)]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dynamic3DChart;

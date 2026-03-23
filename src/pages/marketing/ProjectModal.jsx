import React from "react";
import { X, Send } from "lucide-react";
import PremiumColorPicker from "./PremiumColorPicker";

export default function ProjectModal({
  t,
  lang,
  isModalOpen,
  setIsModalOpen,
  selectedServices,
  toggleServiceSelection,
  formData,
  handleFormChange,
  isContactValid,
}) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
        onClick={() => setIsModalOpen(false)}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-white/10 rounded-[32px] shadow-2xl custom-scrollbar animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 z-20 p-6 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-black text-white">
              {t.marketing.forms.title}
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              {t.marketing.forms.subtitle}
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="p-8 space-y-10">
          {/* Section 1: Contact */}
          <section className="space-y-6">
            <h4 className="text-[#1A1AFA] text-xs font-black uppercase tracking-widest flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#1A1AFA]/10 flex items-center justify-center">
                1
              </span>
              {t.marketing.forms.contactDetails}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 px-1">
                  {t.marketing.forms.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                  className="w-full bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1A1AFA] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 px-1">
                  {t.marketing.forms.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleFormChange("email", e.target.value)}
                  className="w-full bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1A1AFA] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 px-1">
                  {t.marketing.forms.company}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleFormChange("company", e.target.value)}
                  className="w-full bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1A1AFA] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 px-1">
                  {t.marketing.forms.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleFormChange("phone", e.target.value)}
                  className="w-full bg-white/2 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#1A1AFA] outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Services */}
          <section className="space-y-6">
            <h4 className="text-[#1A1AFA] text-xs font-black uppercase tracking-widest flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#1A1AFA]/10 flex items-center justify-center">
                2
              </span>
              {t.marketing.forms.serviceSelection}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {t.marketing.services.items.map((s) => (
                <button
                  key={s.id}
                  onClick={() => toggleServiceSelection(s.id)}
                  className={`p-3 rounded-xl border text-[11px] font-bold transition-all text-center ${
                    selectedServices.includes(s.id)
                      ? "bg-[#1A1AFA] border-[#1A1AFA] text-white shadow-lg scale-105"
                      : "bg-white/2 border-white/5 text-gray-400 hover:border-white/20"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </section>

          {/* Conditional Sections */}
          {(selectedServices.includes("branding") ||
            selectedServices.includes("web")) && (
            <section className="space-y-6 pt-6 border-t border-white/5">
              <h4 className="text-[#1A1AFA] text-xs font-black uppercase tracking-widest flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1A1AFA]/10 flex items-center justify-center">
                  3
                </span>
                {t.marketing.forms.intakeDetails}
              </h4>
              <div className="space-y-6">
                {selectedServices.includes("branding") && (
                  <div className="space-y-4">
                    <h5 className="font-semibold text-sm text-[#1A1AFA]">
                      Branding & Identity Context
                    </h5>
                    <PremiumColorPicker
                      t={t}
                      lang={lang}
                      value={formData.brandingColor}
                      onChange={(c) => handleFormChange("brandingColor", c)}
                    />
                  </div>
                )}

                {selectedServices.includes("web") && (
                  <div className="space-y-3">
                    <h5 className="font-semibold text-sm text-[#1A1AFA]">
                      Website Requirements
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "E-commerce",
                        "Interactive Storytelling",
                        "Customer Portal",
                        "Blog/Education",
                        "AI Integration",
                      ].map((f) => (
                        <button
                          key={f}
                          onClick={() => {
                            const current = formData.webFeatures || [];
                            handleFormChange(
                              "webFeatures",
                              current.includes(f)
                                ? current.filter((x) => x !== f)
                                : [...current, f],
                            );
                          }}
                          className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${
                            (formData.webFeatures || []).includes(f)
                              ? "bg-blue-600/20 border-blue-500 text-blue-400"
                              : "bg-white/2 border-white/10 text-gray-500"
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          <div className="pt-6">
            <button
              disabled={!isContactValid}
              className={`w-full py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-all ${
                isContactValid
                  ? "bg-[#1A1AFA] hover:bg-blue-600 text-white shadow-xl hover:scale-[1.02]"
                  : "bg-white/5 text-gray-600 cursor-not-allowed border border-white/5"
              }`}
            >
              <Send className="w-4 h-4" />
              {t.marketing.forms.submit}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

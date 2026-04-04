import {
  MapPin,
  Phone,
  Mail,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Music,
  Twitter,
  Ghost,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { socialMediaLinks } from "../../data/socialMedia";

export default function ContactSection({ lang, t }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    dept: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      // Validate required fields
      if (
        !formData.name ||
        !formData.email ||
        !formData.company ||
        !formData.dept ||
        !formData.message
      ) {
        setFeedback({
          type: "error",
          message: t.contact.validation.required,
        });
        setLoading(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setFeedback({
          type: "error",
          message: t.contact.validation.invalidEmail,
        });
        setLoading(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        department: formData.dept,
        message: formData.message,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_INFO_TEMPLATE_ID,
        templateParams,
      );

      if (response.status === 200) {
        setFeedback({
          type: "success",
          message: t.contact.messages.success,
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          dept: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setFeedback({
        type: "error",
        message: t.contact.messages.error,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 relative overflow-hidden z-10 bg-white"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2] bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 80%)",
        }}
      ></div>

      {/* Accent glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-50/50 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-[48px] border border-slate-100 flex flex-col lg:flex-row shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] bg-white">
          {/* Contact Info (Left) - Blue gradient side */}
          <div
            className="lg:w-2/5 relative overflow-hidden p-10 lg:p-14 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(145deg, #1A1AFA 0%, #1010c0 50%, #0a0a80 100%)",
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/10 animate-[spin_40s_linear_infinite] scale-150 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-white/10 animate-[spin_30s_linear_infinite_reverse] -translate-x-1/2 translate-y-1/2" />
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-30" />

            <div className="relative z-10 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-black tracking-[0.2em] uppercase mb-5">
                  GET IN TOUCH
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
                  {t.contact.title}
                </h2>
                <p className="text-blue-50/80 text-base font-medium leading-relaxed max-w-sm">
                  {t.contact.subtitle}
                </p>
              </div>

              <div className="space-y-7 pt-6">
                {[
                  { icon: MapPin, label: t.contact.hq, val: t.contact.hqDesc },
                  {
                    icon: Phone,
                    label: t.contact.phone,
                    val: "Trading",
                    val2: "Marketing",
                    val_link: "+966537347710",
                    val2_link: "+966533613446",
                  },
                  {
                    icon: Mail,
                    label: t.contact.email,
                    val: "info@petrax-sa.com",
                  },
                ].map(({ icon, label, val, val2, val_link, val2_link }, i) => {
                  const ContactIcon = icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-5 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-blue-700 transition-all duration-400 shrink-0">
                        <ContactIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-1">
                          {label}
                        </h4>
                        <p className="text-blue-50/60 text-sm font-medium flex flex-col">
                          {val_link ? (
                            <span>
                              {val}:{" "}
                              <a
                                href={`tel:${val_link}`}
                                className="hover:text-white transition-colors"
                              >
                                +966 53 734 7710
                              </a>
                            </span>
                          ) : (
                            <span>{val}</span>
                          )}
                          {val2 && (
                            <span>
                              {val2_link ? (
                                <>
                                  {val2}:{" "}
                                  <a
                                    href={`tel:${val2_link}`}
                                    className="hover:text-white transition-colors"
                                  >
                                    +966 53 361 3446
                                  </a>
                                </>
                              ) : (
                                val2
                              )}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <div className="pt-10 border-t border-white/15">
                <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-widest">
                  {lang === "ar" ? "تابعنا" : "Follow Us"}
                </h4>
                <div className="flex items-center gap-4 flex-wrap">
                  {socialMediaLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-blue-700 transition-all duration-400 group"
                      title={social.name}
                    >
                      {social.id === "instagram" && (
                        <Instagram className="w-5 h-5" />
                      )}
                      {social.id === "facebook" && (
                        <Facebook className="w-5 h-5" />
                      )}
                      {social.id === "linkedin" && (
                        <Linkedin className="w-5 h-5" />
                      )}
                      {social.id === "twitter" && (
                        <Twitter className="w-5 h-5" />
                      )}
                      {social.id === "tiktok" && <Music className="w-5 h-5" />}
                      {social.id === "snapchat" && (
                        <Ghost className="w-5 h-5" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-white/50 backdrop-blur-sm flex items-center justify-center min-h-[600px]">
            <div className="max-w-xl w-full">
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                {t.contact.formTitle}
              </h3>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-10"></div>
              {feedback.message && (
                <div
                  className={`mb-6 p-4 rounded-2xl text-sm font-medium ${
                    feedback.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {feedback.message}
                </div>
              )}
              <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      name: "name",
                      label: t.contact.labels.name,
                      type: "text",
                      ph: t.contact.placeholders.name,
                      required: true,
                    },
                    {
                      name: "company",
                      label: t.contact.labels.company,
                      type: "text",
                      ph: t.contact.placeholders.company,
                      required: true,
                    },
                    {
                      name: "email",
                      label: t.contact.labels.email,
                      type: "email",
                      ph: t.contact.placeholders.email,
                      required: true,
                    },
                  ].map(({ name, label, type, ph, required }, i) => (
                    <div key={i} className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-1">
                        {label}
                        {required && (
                          <span className="text-red-500 font-black">*</span>
                        )}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm placeholder:text-slate-300 shadow-sm"
                        placeholder={ph}
                        required={required}
                      />
                    </div>
                  ))}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-1">
                      {t.contact.labels.dept}
                      <span className="text-red-500 font-black">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="dept"
                        value={formData.dept}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm shadow-sm appearance-none cursor-pointer"
                        required
                      >
                        <option value="">{t.contact.selectDept}</option>
                        {t.contact.depts.map((d, i) => (
                          <option key={i} className="bg-white" value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-1">
                    {t.contact.labels.msg}
                    <span className="text-red-500 font-black">*</span>
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm resize-none placeholder:text-slate-300 shadow-sm"
                    placeholder={t.contact.placeholders.msg}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-2xl font-bold text-base flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-[0.98] disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t.dir === "rtl" ? "جاري الإرسال..." : "Sending..."}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t.contact.submit}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

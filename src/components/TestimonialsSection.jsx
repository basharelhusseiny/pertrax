"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    company: "PEPSI",
    rating: 5,
    logoClass:
      "text-blue-600 font-black italic tracking-widest text-3xl uppercase drop-shadow-sm",
    text_ar:
      "خدمات رائعة وفريق عمل محترف جدًا. التزامهم بالمواعيد وجودة التنفيذ غيّرت طريقة عملنا للأفضل وجعلتنا نحقق أرقاماً قياسية في النمو.",
    text_en:
      "Fantastic services and a very professional team. Their commitment to deadlines and quality changed the way we work for the better.",
  },
  {
    id: 2,
    company: "Coca-Cola",
    rating: 5,
    logoClass:
      "text-red-600 font-serif font-bold italic text-4xl tracking-tight drop-shadow-sm",
    text_ar:
      "تجربة استثنائية من البداية للنهاية. أفكارهم الإبداعية ونتائجهم فاقت كل توقعاتنا، هم شركاء حقيقيون للنجاح المستمر.",
    text_en:
      "An exceptional experience from start to finish. Their creative ideas and results exceeded all our expectations.",
  },
  {
    id: 3,
    company: "SAMSUNG",
    rating: 5,
    logoClass:
      "text-blue-800 font-black tracking-tighter text-3xl uppercase drop-shadow-sm",
    text_ar:
      "شريك استراتيجي يمكن الاعتماد عليه في أصعب المشاريع التقنية. دعم فني مذهل وتواصل مستمر لضمان سير العمل بنجاح تام.",
    text_en:
      "A strategic partner you can rely on in the toughest technical projects. Amazing support and continuous communication.",
  },
  {
    id: 4,
    company: "Apple",
    rating: 5,
    logoClass:
      "text-slate-800 font-semibold tracking-tight text-4xl drop-shadow-sm",
    text_ar:
      "الابتكار والجودة هما عنوان هذا الفريق. مشاريعنا معهم اتّسمت بالدقة الشديدة والاهتمام المطلق بأدق تفاصيل تجربة المستخدم.",
    text_en:
      "Innovation and quality are the hallmarks of this team. Our projects with them were characterized by extreme precision.",
  },
  {
    id: 5,
    company: "amazon",
    rating: 5,
    logoClass:
      "text-amber-500 font-bold lowercase tracking-tighter text-4xl drop-shadow-sm",
    text_ar:
      "سرعة مذهلة في الإنجاز مع الحفاظ على التميز ومقاييس الجودة العالمية. من أفضل وأسرع الشركات الاستشارية التي تعاملنا معها.",
    text_en:
      "Amazing speed in execution while maintaining global quality standards. One of the best consulting companies.",
  },
  {
    id: 6,
    company: "Google",
    rating: 5,
    logoClass:
      "text-slate-900 font-black tracking-tight text-3xl drop-shadow-sm",
    text_ar:
      "حلول استراتيجية متطورة ساهمت في نمو مبيعاتنا بشكل ملحوظ وفي وقت قياسي. استراتيجياتهم مبنية على تفهم عميق للسوق.",
    text_en:
      "Advanced strategic solutions that contributed to the significant growth of our sales in record time based on data.",
  },
  {
    id: 7,
    company: "Microsoft",
    rating: 5,
    logoClass:
      "text-slate-600 font-semibold tracking-wide text-3xl drop-shadow-sm",
    text_ar:
      "احترافية لا مثيل لها وتفهم عميق لاحتياجات السوق المحلي والعالمي. نوصي بشدة بالتعامل المثمر مع مستشاريهم المتميزين.",
    text_en:
      "Unmatched professionalism and deep understanding of market needs. We highly recommend working with their consultants.",
  },
];

export default function TestimonialsSection({ lang }) {
  const isAr = lang === "ar";

  return (
    <section
      className="py-12 sm:py-20 relative overflow-hidden bg-white z-10"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Decorative Light Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Abstract elegant mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(59, 130, 246, 0.5) 19px, rgba(59, 130, 246, 0.3) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(59, 130, 246, 0.3) 19px, rgba(59, 130, 246, 0.1) 20px)`,
            backgroundSize: "20px 20px",
            maskImage:
              "radial-gradient(ellipse at top, black 50%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, black 50%, transparent 80%)",
          }}
        />
        {/* Soft abstract glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-sky-50/60 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-100 bg-white shadow-sm text-blue-600 text-[11px] font-black tracking-[0.15em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {isAr ? "آراء شركاء النجاح" : "Partners Feedback"}
          </div>
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-[1.15]">
            {isAr ? "ماذا يقولون عن خدماتنا؟" : "What They Say About Us"}
          </h2>
          {/* Description */}
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            {isAr
              ? "نعتز بشراكتنا مع كبرى الشركات العالمية والمحلية. إليك نبذة من تقييمات شركاء النجاح وتجربتهم المميزة معنا."
              : "We take pride in our partnerships with top global and local companies. Here are some thoughts from our success partners about their experience."}
          </p>
        </div>

        {/* Testimonials Swiper Slider */}
        <div className="relative pb-10">
          <Swiper
            /* CRITICAL FIX: Changing the key forces Swiper to remount fully on language change, fixing all RTL/LTR broken layout issues */
            key={isAr ? "swiper-ar" : "swiper-en"}
            dir={isAr ? "rtl" : "ltr"}
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={1200}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper px-4 pb-20 pt-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="group relative bg-white rounded-4xl p-10 h-full flex flex-col border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-700 hover:-translate-y-3 overflow-hidden">
                  {/* Decorative Internal Glow */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-linear-to-br from-blue-50 to-blue-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Background Mesh (subtle) */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Quote Icon */}
                  <div
                    className={`absolute top-10 ${isAr ? "left-10" : "right-10"} opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500`}
                  >
                    <Quote
                      className="w-20 h-20 text-blue-600"
                      fill="currentColor"
                    />
                  </div>

                  {/* Brand Logo Replacement */}
                  <div className="mb-8 relative z-10 flex items-center">
                    <span className={testimonial.logoClass}>
                      {testimonial.company}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1.5 mb-8 relative z-10">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 text-amber-400 fill-amber-400 group-hover:scale-[1.15] transition-transform duration-500"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-600 leading-[1.8] text-lg mb-6 grow relative z-10 font-normal">
                    {isAr ? testimonial.text_ar : testimonial.text_en}
                  </p>

                  {/* Premium Border Highlight Effect */}
                  <div className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none border-2 border-transparent">
                    <div className="absolute inset-0 rounded-4xl bg-linear-to-b from-blue-400/0 to-blue-400/20 mix-blend-overlay" />
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-linear-to-r from-blue-400 to-blue-600 opacity-60 rounded-b-4xl" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

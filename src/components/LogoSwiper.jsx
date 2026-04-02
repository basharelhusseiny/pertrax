import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const LogoSwiper = () => {
  const logos = [
    "cola.png",
    "cor.png",
    "grand.png",
    "link.png",
    "mtn.png",
    "oka.png",
    "pepsi.png",
    "petro.png",
    "rotana.png",
    "zain.png",
  ];

  return (
    <div className="w-full bg-white py-8 overflow-hidden border-y border-(--primary-default)/20 shadow-lg relative z-10">
      <style jsx global>{`
        .swiper-logos-ticker {
          cursor: grab;
        }
        .swiper-logos-ticker.swiper-grabbing {
          cursor: grabbing;
        }
        .swiper-logos-ticker .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        speed={4000}
        allowTouchMove={true}
        className="swiper-logos-ticker"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={40}
      >
        {logos.concat(logos).map((logo, index) => (
          <SwiperSlide key={`${logo}-${index}`} style={{ width: "auto" }}>
            <div className="flex items-center justify-center px-6 md:px-8">
              <img
                src={`/logos/${logo}`}
                alt={logo.replace(".png", "")}
                className="h-20 md:h-24 object-contain filter drop-shadow-md hover:scale-110 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSwiper;

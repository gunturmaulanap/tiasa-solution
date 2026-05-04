"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// LOGO CLOUD ANIMATION: Subtle fade. Section ini supporting role,
// gak boleh nyolong attention dari hero atau services.
const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const clientLogos = [
  { name: "Azhar", src: "/images/cloud-logos/azhar.svg" },
  { name: "G Logo", src: "/images/cloud-logos/g-logo.svg" },
  { name: "Masjid", src: "/images/cloud-logos/masjid.svg" },
  { name: "Kudan", src: "/images/cloud-logos/kudan-logo.svg" },
];

export default function LogoCloud() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={logoVariants}
      className="bg-white py-12 border-y border-slate-50"
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase mb-8">
          Klien Kami
        </p>
        <div className="w-full" aria-label="Client logos">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={4}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: true,
            }}
            loop
            allowTouchMove={false}
            speed={5000}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 64 },
            }}
            className="w-full"
          >
            {clientLogos.map((logo) => (
              <SwiperSlide key={logo.name}>
                <div
                  className="flex items-center justify-center h-20 transition-all duration-300 hover:scale-110"
                  title={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={80}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}

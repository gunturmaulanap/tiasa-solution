"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// TESTIMONIALS ANIMATION: Blur-to-sharp dengan slight scale.
// Filter blur lebih premium daripada fade biasa, kasih sense of "focus".
const testimonialsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const swiperVariants = {
  hidden: { opacity: 0, scale: 0.97, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Ops Manager - Industrial",
    quote:
      "Sistem pelaporan HSE yang dibangun sangat presisi dan membantu monitoring K3 kami secara real-time.",
  },
  {
    name: "Sari Wijaya",
    role: "Owner - FnB Group",
    quote:
      "Manajemen stok di POS Tiasa sangat akurat. Sangat membantu efisiensi bisnis kami di semua cabang.",
  },
  {
    name: "Andi Pratama",
    role: "IT Director",
    quote:
      "Profesionalisme dalam pengerjaan backend dan arsitektur sistemnya luar biasa. Hasilnya sangat stabil.",
  },
  {
    name: "Rina Kusuma",
    role: "Kepala Sekolah",
    quote:
      "Digitalisasi administrasi sekolah kami menjadi jauh lebih rapi, cepat, dan transparan bagi semua pihak.",
  },
  {
    name: "Hendra Kurnia",
    role: "CEO Tech Startup",
    quote:
      "Eksekusi sistemnya sangat halus dan terstruktur. Partner yang hebat untuk solusi digital jangka panjang.",
  },
  {
    name: "Dewi Lestari",
    role: "Manager Logistik",
    quote:
      "Sistem pelacakan barang kami kini sudah terintegrasi penuh. Mengurangi kesalahan input data secara signifikan.",
  },
  {
    name: "Joko Anwar",
    role: "Pemilik UMKM",
    quote:
      "Tiasa membantu bisnis kami bertransformasi digital dengan cara yang sangat sederhana tapi sangat efektif.",
  },
  {
    name: "Linda Putri",
    role: "HR Manager",
    quote:
      "Aplikasi internal perusahaan sangat memudahkan pengelolaan absensi dan payroll karyawan kami setiap bulan.",
  },
  {
    name: "Agus Setiawan",
    role: "Kepala Produksi",
    quote:
      "Efisiensi di lantai pabrik meningkat tajam sejak kami menggunakan sistem manajemen produksi dari Tiasa.",
  },
  {
    name: "Maya Sofia",
    role: "Business Development",
    quote:
      "Konsultasi teknis yang diberikan sangat mendalam, memberikan perspektif baru bagi strategi digital kami.",
  },
  {
    name: "Doni Raharjo",
    role: "Resto Owner",
    quote:
      "Sistem kasirnya sangat intuitif. Staf kami bisa langsung mengoperasikannya tanpa perlu pelatihan lama.",
  },
  {
    name: "Eko Prasetyo",
    role: "Warehouse Head",
    quote:
      "Akurasi inventaris meningkat pesat. Kami bisa memantau keluar masuk barang tanpa ada selisih lagi.",
  },
];

const marqueeTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function TestimonialsSection() {
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setIsClientReady(true));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={testimonialsContainer}
      className="bg-[#F8FAFC] py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div variants={headerVariants} className="text-center mb-16">
          <span className="mb-[18px] inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[rgb(var(--marka-black))] mb-4">
            Dipercaya oleh Bisnis & Industri
          </h2>
          <p className="text-[rgb(var(--marka-gray-dark))] max-w-2xl mx-auto text-lg">
            Hasil kerja nyata yang memberikan dampak efisiensi bagi mitra kami
            di berbagai sektor.
          </p>
        </motion.div>

        <motion.div variants={swiperVariants} className="relative">
          <div className="absolute inset-y-0 left-0 w-32 hidden md:block z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-32 hidden md:block z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>

          {isClientReady && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                waitForTransition: false,
              }}
              loop={true}
              speed={5000}
              allowTouchMove={false}
              loopAdditionalSlides={8}
              watchSlidesProgress={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
              }}
              className="testimonial-swiper pointer-events-none"
            >
              {marqueeTestimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between">
                    <div className="quote-content relative">
                      <span className="text-5xl text-[rgb(var(--marka-blue))] absolute -top-4 -left-2 opacity-20 font-serif">
                        &ldquo;
                      </span>
                      <p className="text-[rgb(var(--marka-gray-dark))] italic leading-relaxed relative z-10 text-sm">
                        {item.quote}
                      </p>
                    </div>

                    <div className="client-info mt-8 pt-6 border-t border-zinc-200">
                      <h5 className="font-semibold text-[rgb(var(--marka-black))] text-sm tracking-wide uppercase">
                        {item.name}
                      </h5>
                      <p className="text-[rgb(var(--marka-blue))] text-[10px] font-bold tracking-widest uppercase mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

"use client";

import Link from "next/link";
import { Search, BarChart3, ShoppingCart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// SERVICES ANIMATION: 3D tilt-in dari samping. Card-nya kayak buku ke-flip terbuka.
// Distinctive — beda dari section lain yg cuma fade-up biasa.
const servicesContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, rotateY: -25, y: 40, transformPerspective: 1200 },
  visible: {
    opacity: 1,
    rotateY: 0,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const services = [
  {
    title: "Konsultasi & Strategi Digital",
    description:
      "Kami membantu Anda merancang blueprint teknologi yang tepat...",
    icon: <Search size={32} strokeWidth={2} />,
    link: "#contact",
  },
  {
    title: "Sistem POS & Manajemen Bisnis",
    description: "Solusi kasir pintar dan manajemen stok terintegrasi...",
    icon: <ShoppingCart size={32} strokeWidth={2} />,
    link: "#contact",
  },
  {
    title: "Sistem Monitoring & Operasional",
    description: "Digitalisasi pelaporan departemen dan pemantauan kinerja...",
    icon: <BarChart3 size={32} strokeWidth={2} />,
    link: "#contact",
  },
];

export default function ServicesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={servicesContainer}
      id="services"
      className="bg-white py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div variants={headerVariants} className="mb-16 text-center">
          <span className="mb-[18px] inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase">
            OUR EXPERTISE
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">
            Menyelesaikan Masalah dengan Solusi Terukur
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
            Kami menyediakan solusi teknologi kustom yang dirancang khusus untuk
            menjawab tantangan operasional dan mempercepat transformasi digital.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-[#0F172A]/20 hover:shadow-xl transition-shadow duration-300 group bg-white"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-slate-50 text-[rgb(var(--marka-blue))] group-hover:bg-[rgb(var(--marka-blue))] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                {service.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed mb-8 text-sm">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-[#0F172A] font-bold text-sm flex items-center gap-2 group/link"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight
                  size={18}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

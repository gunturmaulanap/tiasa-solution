"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import posImage from "./assets/portfolio/pos.png";
import azharImage from "./assets/portfolio/azhar.png";
import mosqueManagerImage from "./assets/portfolio/mosque-manager.png";
import gunturPortfolioImage from "./assets/portfolio/guntur-portfolio.png";

// PORTFOLIO ANIMATION: Clip-path mask reveal — image-nya muncul kayak garden curtain
// kebuka dari kiri ke kanan. Premium feel, beda dari fade biasa.
const portfolioContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
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

const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const imageMaskVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] as const },
  },
};

const projects = [
  {
    title: "Smart POS FnB",
    category: "Sistem Kasir Restoran & Kafe",
    description:
      "Sistem Point of Sale terintegrasi dengan manajemen stok, laporan penjualan real-time, dan multi-payment support untuk usaha FnB.",
    image: posImage,
    link: "#",
  },
  {
    title: "Azhar Profile",
    category: "Landing Page Personal",
    description:
      "Landing page profesional dengan desain modern untuk personal branding, lengkap dengan showcase portofolio dan contact form.",
    image: azharImage,
    link: "#",
  },
  {
    title: "Mosque Manager",
    category: "Sistem Manajemen Masjid",
    description:
      "Aplikasi manajemen masjid terintegrasi untuk pengelolaan jamaah, zakat, infaq, sedekah, dan jadwal kegiatan keagamaan.",
    image: mosqueManagerImage,
    link: "#",
  },
  {
    title: "Professional Profile",
    category: "Website Company Profile",
    description:
      "Website company profile corporate dengan desain elegan, informasi layanan lengkap, dan portfolio showcase untuk bisnis profesional.",
    image: gunturPortfolioImage,
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={portfolioContainer}
      className="bg-white py-24"
      id="portfolio"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div variants={headerVariants} className="text-center mb-16">
          <span className="inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl font-extrabold text-[#0F172A] mb-6">
            Karya Terpilih Kami
          </h2>
          <Link
            href="/portfolio"
            className="inline-block text-[#0F172A] font-bold border-b-2 border-[#0F172A] pb-1 hover:text-[rgb(var(--marka-blue))] hover:border-[rgb(var(--marka-blue))] transition-all"
          >
            Lihat Semua Proyek
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={projectCardVariants}
              className="group cursor-pointer"
            >
              <motion.div
                variants={imageMaskVariants}
                className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-video mb-5 shadow-md"
              >
                <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/50 transition-all duration-500 z-10 flex items-center justify-center">
                  <ArrowUpRight
                    className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 max-md:opacity-100 max-md:scale-100"
                    size={48}
                  />
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 max-md:group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[rgb(var(--marka-blue))] transition-colors max-md:text-xl">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-[#64748B] uppercase tracking-wide mb-3 max-md:text-xs">
                {project.category}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed max-md:text-xs">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

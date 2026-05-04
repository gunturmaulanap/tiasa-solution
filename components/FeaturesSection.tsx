"use client";

import {
  LayoutGrid,
  MessageSquare,
  BarChart3,
  Palette,
  ShieldCheck,
  FileCode2,
} from "lucide-react";
import { motion } from "framer-motion";

// FEATURES ANIMATION: Alternating slide — item ganjil masuk dari kiri,
// item genap masuk dari kanan. Bikin grid feel "interlocked", lebih dinamis.
const featuresContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const slideFromLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <LayoutGrid
          size={32}
          strokeWidth={1.5}
          className="text-[rgb(var(--marka-blue))]"
        />
      ),
      title: "Dashboard Monitoring",
      description:
        "Pantau performa bisnis dan analitik real-time melalui dashboard yang intuitif dan presisi.",
    },
    {
      icon: (
        <MessageSquare
          size={32}
          strokeWidth={1.5}
          className="text-[rgb(var(--marka-blue))]"
        />
      ),
      title: "Saluran Komunikasi Langsung",
      description:
        "Akses komunikasi cepat dengan tim pengembang kami untuk koordinasi proyek yang lancar.",
    },
    {
      icon: (
        <ShieldCheck
          size={32}
          strokeWidth={1.5}
          className="text-[rgb(var(--marka-blue))]"
        />
      ),
      title: "Keamanan Data",
      description:
        "Sistem dibangun dengan standar keamanan tinggi untuk melindungi data sensitif perusahaan Anda.",
    },
    {
      icon: (
        <Palette
          size={32}
          strokeWidth={1.5}
          className="text-[rgb(var(--marka-blue))]"
        />
      ),
      title: "Desain UI/UX Eksklusif",
      description:
        "Antarmuka aplikasi yang dirancang kustom untuk memberikan pengalaman pengguna yang optimal.",
    },
    {
      icon: (
        <FileCode2
          size={32}
          strokeWidth={1.5}
          className="text-[rgb(var(--marka-blue))]"
        />
      ),
      title: "Blueprint Teknologi",
      description:
        "Perencanaan arsitektur sistem yang skalabel dan pemilihan tech stack yang tepat guna.",
    },
    {
      icon: (
        <BarChart3
          size={32}
          strokeWidth={1.5}
          className="text-[rgb(var(--marka-blue))]"
        />
      ),
      title: "Laporan Pemeliharaan",
      description:
        "Laporan pemeliharaan berkala untuk memastikan sistem tetap berjalan pada performa terbaik.",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={featuresContainer}
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div variants={headerVariants} className="mb-16 text-center">
          <span className="mb-[18px] inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase">
            TIASA ECOSYSTEM
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#0F172A] lg:text-5xl tracking-tight">
            Standar Kerja yang Kami Berikan
          </h2>
          <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Lebih dari sekadar kode, kami memberikan ekosistem teknologi yang
            mendukung pertumbuhan dan efisiensi operasional bisnis Anda.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex gap-6 rounded-2xl p-8 transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100"
            >
              <div className="shrink-0 p-4 rounded-xl bg-slate-50 group-hover:bg-white group-hover:shadow-md transition-all self-start">
                {feature.icon}
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-[#0F172A] tracking-tight">
                  {feature.title}
                </h4>
                <p className="m-0 text-[#64748B] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

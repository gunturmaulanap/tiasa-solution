"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  { name: "Pondok Amal Sholeh", src: "/images/cloud-logos/pondok.svg" },
  { name: "Arjuna Wiwaha", src: "/images/cloud-logos/arjuna.svg" },
  { name: "QL Farm", src: "/images/cloud-logos/qlfarm.svg" },
];

const marqueeClientLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export default function LogoCloud() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={logoVariants}
      className="bg-[#F8FAFC] py-12 border-y border-zinc-50"
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase mb-8">
          Our Clients
        </p>
        <div
          className="relative w-full overflow-hidden"
          aria-label="Client logos"
        >
          <div className="logo-marquee-track flex items-center gap-8 md:gap-10 lg:gap-12">
            {marqueeClientLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-20 min-w-[140px] items-center justify-center transition-all duration-300 hover:scale-110"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

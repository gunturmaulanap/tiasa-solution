"use client";

import { useRef, useEffect, useMemo } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { Zap, ShieldCheck, Target } from "lucide-react";

// WHY CHOOSE US ANIMATION: Spring-based scale-in dengan slight rotate.
// Stats: counter trigger ONLY ONCE pas masuk viewport (bukan looping bug).
const sectionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const valueCardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 14,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
    },
  },
};

interface StatItem {
  label: string;
  value: string;
}

function AnimatedStat({
  label,
  value,
  shouldAnimate,
}: StatItem & { shouldAnimate: boolean }) {
  const valueRef = useRef<HTMLSpanElement>(null);

  const parseValue = (val: string) => {
    const match = val.match(/^([\d.]+)(.*)$/);
    if (match) {
      const [, numericPart, extractedSuffix] = match;
      const decimals = numericPart.includes(".")
        ? numericPart.split(".")[1].length
        : 0;
      return {
        number: parseFloat(numericPart),
        suffix: extractedSuffix,
        decimals,
      };
    }
    return { number: 0, suffix: val, decimals: 0 };
  };

  const {
    number: targetNumber,
    suffix,
    decimals,
  } = useMemo(() => parseValue(value), [value]);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 30,
    stiffness: 120,
    mass: 0.8,
  });

  useMotionValueEvent(spring, "change", (latest) => {
    if (!valueRef.current) return;
    const clampedValue = Math.min(latest, targetNumber);
    valueRef.current.textContent = `${clampedValue.toFixed(decimals)}${suffix}`;
  });

  // Trigger counter HANYA pas masuk viewport. Bukan looping, bukan auto.
  useEffect(() => {
    if (!shouldAnimate) return;
    motionValue.set(0);
    const controls = animate(motionValue, targetNumber, {
      duration: 2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [motionValue, targetNumber, shouldAnimate]);

  return (
    <motion.div
      variants={statCardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-8 text-center transition-shadow duration-300 hover:border-[#0F172A]/20 hover:shadow-lg"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[rgb(var(--marka-blue))]/20 group-hover:w-20 group-hover:bg-[rgb(var(--marka-blue))]/40 transition-all duration-300 rounded-full"></div>

      <div className="flex flex-col gap-3 pt-2">
        <span
          ref={valueRef}
          className="text-4xl lg:text-5xl font-black text-[#0F172A]"
        >
          {`0${suffix}`}
        </span>
        <span className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUsAndStatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const valueProps = [
    {
      icon: <Zap size={32} strokeWidth={2} />,
      title: "Solusi Tepat Guna",
      description:
        "Kami tidak sekadar membangun aplikasi, tapi merancang sistem yang benar-benar menjawab tantangan operasional bisnis Anda.",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={2} />,
      title: "Arsitektur Kokoh",
      description:
        "Menggunakan Clean Architecture dan tech stack modern untuk sistem yang stabil, aman, dan mudah dikembangkan secara berkelanjutan.",
    },
    {
      icon: <Target size={32} strokeWidth={2} />,
      title: "Fokus pada Efisiensi",
      description:
        "Setiap baris kode yang kami tulis bertujuan untuk meningkatkan produktivitas dan efisiensi biaya operasional perusahaan Anda.",
    },
  ];

  const stats: StatItem[] = [
    { label: "Proyek Selesai", value: "20+" },
    { label: "Sektor Industri", value: "5+" },
    { label: "Uptime Sistem", value: "99.9%" },
    { label: "Klien Puas", value: "100%" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionContainer}
      id="why-choose-us"
      className="bg-[#F8FAFC] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div
          variants={headerVariants}
          className="mb-10 md:mb-12 lg:mb-16 text-center"
        >
          <span className="mb-[18px] inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">
            Mengapa Memilih Tiasa Solution?
          </h2>
          <p className="text-[#64748B] max-w-2xl text-base md:text-lg mx-auto">
            Kami menggabungkan keahlian teknis mendalam dengan pemahaman bisnis
            untuk menghadirkan sistem digital yang presisi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-14 md:mb-18 lg:mb-24">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={valueCardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group rounded-2xl bg-white p-6 md:p-8 lg:p-10 text-center transition-shadow duration-300 hover:shadow-xl border border-slate-100"
            >
              <div className="mb-8 inline-block p-5 rounded-2xl bg-slate-50 text-[rgb(var(--marka-blue))] group-hover:bg-[rgb(var(--marka-blue))] group-hover:text-white transition-all duration-300">
                {prop.icon}
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-4 uppercase tracking-tight">
                {prop.title}
              </h4>
              <p className="text-[#64748B] leading-relaxed text-sm">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={headerVariants}
          className="mb-6 md:mb-8 text-center"
        >
          <span className="mb-[18px] inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase">
            OUR IMPACT
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">
            Bukti Nyata Kinerja Kami
          </h2>
        </motion.div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <AnimatedStat
              key={i}
              label={stat.label}
              value={stat.value}
              shouldAnimate={isStatsInView}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

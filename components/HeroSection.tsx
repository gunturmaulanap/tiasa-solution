"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import manRobotAnimation from "./assets/lottie-json/man-robot.json";
import { motion, AnimatePresence } from "framer-motion";

import { NextjsLogoLight } from "./ui/svgs/nextjsLogoLight";
import { ReactLight } from "./ui/svgs/reactLight";
import { Typescript } from "./ui/svgs/typescript";
import { Nodejs } from "./ui/svgs/nodejs";
import { Python } from "./ui/svgs/python";
import { Docker } from "./ui/svgs/docker";
import { Kubernetes } from "./ui/svgs/kubernetes";
import { Golang } from "./ui/svgs/golang";

// HERO ANIMATION: Cinematic stagger reveal w/ subtle 3D depth.
// Kenapa initial+animate static (bukan useInView)? Karena Hero ALWAYS above-the-fold.
// Pake whileInView atau useInView = race condition saat back-navigation = blank page.
const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const heroHeadline = {
  hidden: { opacity: 0, y: 60, scale: 0.95, rotateX: 20 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const techIcons = [
  {
    component: (
      <NextjsLogoLight className="h-auto w-[100px] max-h-[72px] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100" />
    ),
    name: "Next.js",
  },
  {
    component: (
      <ReactLight className="h-auto w-[100px] max-h-[72px] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100" />
    ),
    name: "React",
  },
  {
    component: (
      <Typescript className="h-auto w-[100px] max-h-[72px] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100" />
    ),
    name: "TypeScript",
  },
  {
    component: (
      <Nodejs className="h-auto w-[100px] max-h-[72px] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100" />
    ),
    name: "Node.js",
  },
  {
    component: (
      <Python className="h-auto w-[100px] max-h-[72px] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100" />
    ),
    name: "Python",
  },
  {
    component: (
      <Docker className="h-auto w-[100px] max-h-[72px] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100" />
    ),
    name: "Docker",
  },
  {
    component: (
      <Kubernetes className="h-auto w-[100px] max-h-[72px] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100" />
    ),
    name: "Kubernetes",
  },
  {
    component: (
      <Golang className="h-auto w-[100px] max-h-[72px] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100" />
    ),
    name: "Go",
  },
];

const rotatingWords = [
  "FnB",
  "Sistem POS",
  "Digitalisasi UMKM",
  "Aplikasi Mobile",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={heroContainer}
      id="hero"
      className="flex min-h-[calc(100dvh-84px)] items-center bg-white px-0 py-10 sm:py-12 lg:min-h-[calc(100dvh-132px)] lg:py-[60px] lg:pb-[72px]"
    >
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center px-6">
        <div className="grid w-full grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center gap-10 lg:gap-12 max-lg:grid-cols-1 max-lg:gap-8">
          <div className="max-lg:text-center">
            <motion.div
              variants={heroItem}
              className="mb-[18px] inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase"
            >
              Precision Digital Solutions
            </motion.div>

            <motion.h1
              variants={heroHeadline}
              style={{ perspective: "1000px" }}
              className="mb-5 text-[clamp(34px,5vw,56px)] font-bold leading-[1.15] text-[rgb(var(--marka-black))]"
            >
              <span>Solusi digital tepat guna untuk membangun </span>
              <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-[rgb(var(--marka-blue))]"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mb-10 max-w-[56ch] text-lg leading-relaxed text-[rgb(var(--marka-gray-dark))] max-lg:mx-auto max-md:text-[17px]"
            >
              Tiasa Solution adalah mitra transformasi digital di Yogyakarta
              yang fokus pada efisiensi operasional. Kami menggabungkan strategi
              bisnis dengan <strong>rekayasa sistem modern</strong> untuk
              membangun sistem yang kokoh dan tepat guna.
            </motion.p>

            <motion.div variants={heroItem}>
              <Link
                href="#contact"
                className="mb-8 inline-block rounded-full bg-[rgb(var(--marka-black))] px-9 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(var(--marka-blue))]"
              >
                Konsultasi Gratis Sekarang →
              </Link>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="mt-3.5 w-full"
              aria-label="Tech stack icons"
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  waitForTransition: true,
                }}
                loop
                allowTouchMove={false}
                speed={7000}
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 12 },
                  640: { slidesPerView: 3, spaceBetween: 16 },
                  768: { slidesPerView: 4, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
                className="w-full"
              >
                {techIcons.map((tech, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex h-24 items-center justify-center px-2 max-md:h-[84px] max-md:px-1.5">
                      {tech.component}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>

          <motion.div
            variants={heroItem}
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mt-3.5 w-full" aria-label="man robot animation">
              <Lottie
                animationData={manRobotAnimation}
                loop
                autoplay
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

"use client";

import { useState } from "react";
import { InstagramIcon, LinkedInIcon } from "./assets/social";
import { motion } from "framer-motion";

// CONTACT ANIMATION: Split panel — info kiri masuk dari kiri, form kanan dari kanan.
// Visual cue "meeting in the middle", cocok untuk section "connect with us".
const contactContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const leftPanelVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const rightPanelVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate dengan API endpoint Tiasa atau service kayak Resend / Formspree
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  const updateFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={contactContainer}
      id="contact"
      className="bg-[#F8FAFC] py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div variants={headerVariants} className="mb-[60px] text-center">
          <span className="mb-[18px] inline-block rounded-full bg-[rgb(var(--marka-blue)/0.1)] px-4 py-2 text-sm font-semibold tracking-[1px] text-[rgb(var(--marka-blue))] uppercase">
            CONNECT
          </span>
          <h2 className="m-0 mt-4 text-5xl font-semibold text-[rgb(var(--marka-black))] max-md:text-4xl">
            Mulai Konsultasi Proyek Anda
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-[60px] max-md:grid-cols-1 max-md:gap-10">
          <motion.div
            variants={leftPanelVariants}
            className="flex flex-col gap-8"
          >
            <div>
              <h5 className="mb-2 text-base font-semibold text-[rgb(var(--marka-black))]">
                Address
              </h5>
              <p className="m-0 leading-[1.6] text-[rgb(var(--marka-gray-dark))]">
                Yogyakarta, Indonesia
              </p>
            </div>

            <div>
              <h5 className="mb-2 text-base font-semibold text-[rgb(var(--marka-black))]">
                Email
              </h5>
              <p className="m-0 leading-[1.6] text-[rgb(var(--marka-gray-dark))]">
                hello@tiasasolution.com
              </p>
            </div>

            <div>
              <h5 className="mb-2 text-base font-semibold text-[rgb(var(--marka-black))]">
                Follow Us
              </h5>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/tiasa-solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-full bg-[rgb(var(--marka-blue))] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(var(--marka-black))]"
                >
                  <LinkedInIcon className="size-5" />
                </a>
                <a
                  href="https://instagram.com/tiasa.solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-full bg-[rgb(var(--marka-blue))] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(var(--marka-black))]"
                >
                  <InstagramIcon className="size-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={rightPanelVariants}
            className="w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={updateFormData}
              className="mb-4 w-full rounded-lg border border-[rgb(var(--input))] p-4 text-base transition-colors duration-300 focus:border-[rgb(var(--marka-blue))] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={updateFormData}
              className="mb-4 w-full rounded-lg border border-[rgb(var(--input))] p-4 text-base transition-colors duration-300 focus:border-[rgb(var(--marka-blue))] focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={updateFormData}
              className="mb-4 w-full rounded-lg border border-[rgb(var(--input))] p-4 text-base transition-colors duration-300 focus:border-[rgb(var(--marka-blue))] focus:outline-none"
            />
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="rounded-[45px] bg-[rgb(var(--marka-blue))] px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[rgb(var(--marka-black))]"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

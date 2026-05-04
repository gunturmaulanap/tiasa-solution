"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const lastScrollY = useRef(0);

  const waLink =
    "https://wa.me/6281392854911?text=Halo%20Tiasa%20Solution,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20IT%20bisnis%20saya.";

  // Smooth scroll handler untuk anchor links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Handle khusus untuk Beranda (/#) - scroll ke top
    if (href === "/#" || href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Close mobile menu after click
      setIsMenuOpen(false);
      setOpenMobileSubmenu(null);
      return;
    }

    // Handle untuk anchor links lainnya
    const targetId = href.replace(/\/#/, "#");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.getBoundingClientRect().height ?? 100;
      const offsetTop =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        (headerHeight + 12);

      // Close mobile menu first, then scroll after layout settles.
      setIsMenuOpen(false);
      setOpenMobileSubmenu(null);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        });
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Logika Hide on Scroll Down, Show on Scroll Up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsHeaderVisible(false);
        setIsMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "/#" },
    { name: "Tentang Kami", href: "/#why-choose-us" },
    {
      name: "Layanan",
      href: "/#services",
      submenu: [
        { name: "Sistem POS & FnB", href: "/#services" },
        { name: "Web & Mobile App", href: "/#services" },
        { name: "Custom Software", href: "/#services" },
      ],
    },
    { name: "Portofolio", href: "/#portfolio" },
    { name: "Fitur", href: "/#features" },
  ];

  return (
    <AnimatePresence mode="wait">
      {isHeaderVisible && (
        <motion.header
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-x-0 top-0 z-50"
        >
          {/* Top Bar - Desktop Only */}
          <div className="hidden lg:block bg-[#0F172A] py-3 border-b border-white/5">
            <div className="mx-auto max-w-[1200px] px-6">
              <div className="flex justify-end items-center gap-6">
                <Link
                  href={waLink}
                  target="_blank"
                  className="flex items-center gap-2 text-[11px] font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  <MessageCircle size={14} className="text-white" />
                  <span>Live Chat</span>
                </Link>
                <span className="text-white/10">|</span>
                <a
                  href="mailto:hello@tiasasolution.com"
                  className="flex items-center gap-2 text-[11px] font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  <Mail size={14} className="text-white" />
                  <span>Email kami</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <motion.nav
            initial={false}
            animate={{
              backgroundColor: isScrolled
                ? "rgba(255, 255, 255, 0.95)"
                : "rgba(255, 255, 255, 1)",
              paddingTop: isScrolled ? "0.75rem" : "1.25rem",
              paddingBottom: isScrolled ? "0.75rem" : "1.25rem",
              boxShadow: isScrolled
                ? "0 10px 40px -10px rgba(0,0,0,0.1)"
                : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-60 border-b border-slate-100 backdrop-blur-md"
          >
            <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6">
              <Link href="/" className="shrink-0">
                <Image
                  src="/images/logos/logo-landscape.svg"
                  alt="Tiasa Solution"
                  width={160}
                  height={60}
                  style={{ height: "46px", width: "auto" }}
                  priority
                />
              </Link>

              {/* Menu Desktop */}
              <ul className="hidden items-center gap-10 lg:flex">
                {menuItems.map((item) => (
                  <li key={item.name} className="relative group py-2">
                    {item.href.startsWith("/#") ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="flex items-center gap-1 text-[15px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors capitalize tracking-tight cursor-pointer"
                      >
                        {item.name}
                        {item.submenu && (
                          <ChevronDown
                            size={14}
                            className="group-hover:rotate-180 transition-transform duration-300"
                          />
                        )}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 text-[15px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors capitalize tracking-tight"
                      >
                        {item.name}
                        {item.submenu && (
                          <ChevronDown
                            size={14}
                            className="group-hover:rotate-180 transition-transform duration-300"
                          />
                        )}
                      </Link>
                    )}

                    {item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0"
                      >
                        <div className="py-3 px-2 flex flex-col gap-1">
                          {item.submenu.map((sub) =>
                            sub.href.startsWith("/#") ? (
                              <a
                                key={sub.name}
                                href={sub.href}
                                onClick={(e) => handleSmoothScroll(e, sub.href)}
                                className="px-4 py-2 text-[14px] text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                              >
                                {sub.name}
                              </a>
                            ) : (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="px-4 py-2 text-[14px] text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 rounded-lg transition-colors"
                              >
                                {sub.name}
                              </Link>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA Button Desktop - Style Diperbarui */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={waLink}
                  target="_blank"
                  className="hidden lg:inline-block rounded-full bg-[rgb(var(--marka-black))] px-9 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[rgb(var(--marka-blue))]"
                >
                  Mulai Konsultasi
                </Link>
              </motion.div>

              {/* Hamburger Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex flex-col gap-1.5 lg:hidden z-70 relative"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-[#0F172A]"
                ></motion.span>
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-[#0F172A]"
                ></motion.span>
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-[#0F172A]"
                ></motion.span>
              </motion.button>
            </div>
          </motion.nav>

          {/* Mobile Menu Slide-Down */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-0 w-full bg-white border-b border-slate-100 shadow-2xl z-50 overflow-hidden lg:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-slate-50 pb-2 last:border-0"
                  >
                    {item.submenu ? (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-3">
                          <a
                            href={item.href}
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                            className="text-lg font-bold text-[#0F172A] tracking-tight"
                          >
                            {item.name}
                          </a>
                          <motion.button
                            whileTap={{ scale: 0.98 }}
                            onClick={() =>
                              setOpenMobileSubmenu(
                                openMobileSubmenu === item.name
                                  ? null
                                  : item.name
                              )
                            }
                            className="flex items-center justify-center rounded-md p-1 text-[#0F172A]"
                            aria-label={`Toggle submenu ${item.name}`}
                          >
                            <motion.div
                              animate={{
                                rotate:
                                  openMobileSubmenu === item.name ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </motion.button>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{
                            height:
                              openMobileSubmenu === item.name ? "auto" : 0,
                            opacity: openMobileSubmenu === item.name ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-3 pl-4 overflow-hidden"
                        >
                          {item.submenu.map((sub) =>
                            sub.href.startsWith("/#") ? (
                              <a
                                key={sub.name}
                                href={sub.href}
                                onClick={(e) => handleSmoothScroll(e, sub.href)}
                                className="text-[15px] text-slate-500 font-medium cursor-pointer"
                              >
                                {sub.name}
                              </a>
                            ) : (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[15px] text-slate-500 font-medium"
                              >
                                {sub.name}
                              </Link>
                            )
                          )}
                        </motion.div>
                      </div>
                    ) : item.href.startsWith("/#") ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="text-lg font-bold text-[#0F172A] block tracking-tight cursor-pointer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-bold text-[#0F172A] block tracking-tight"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4 border-t border-slate-100"
              >
                <Link
                  href={waLink}
                  target="_blank"
                  className="w-full inline-block text-center rounded-full bg-[rgb(var(--marka-black))] px-9 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[rgb(var(--marka-blue))]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mulai Konsultasi →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

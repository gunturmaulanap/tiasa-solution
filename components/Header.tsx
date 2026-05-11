"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const lastScrollY = useRef(0);

  const waLink =
    "https://wa.me/6281217257112?text=Halo%20Tiasa%20Solution,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20IT%20bisnis%20saya.";

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
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
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
            className="relative z-60 border-b border-zinc-100 backdrop-blur-md"
          >
            <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6">
              <Link href="/" className="shrink-0">
                <Image
                  src="/images/logos/logo-landscape.svg"
                  alt="Tiasa Solution"
                  width={174}
                  height={90}
                  className="h-10 w-auto sm:h-11"
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
                        className="absolute top-full left-0 mt-2 w-56 bg-white border border-zinc-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0"
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
                                className="px-4 py-2 text-[14px] text-zinc-600 hover:text-[#0F172A] hover:bg-zinc-50 rounded-lg transition-colors"
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
            className="absolute left-0 w-full bg-white border-b border-zinc-100 shadow-2xl z-50 overflow-hidden lg:hidden"
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
                    className="border-b border-zinc-50 pb-2 last:border-0"
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
                                className="text-[15px] text-zinc-500 font-medium"
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
                className="pt-4 border-t border-zinc-100"
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

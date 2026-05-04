import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] px-0 py-20 pb-6 text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* Logo + Tagline */}
        <div className="mb-10">
          <Image
            src="/images/logos/logo-landscape-dark.svg"
            alt="Tiasa Solution"
            width={174}
            height={90}
            className="mb-4 h-10 w-auto"
            style={{ height: "60px", width: "auto" }}
          />
          <p className="max-w-[400px] text-base leading-[1.6] text-[#94A3B8]">
            Mitra transformasi digital yang berfokus pada presisi dan efisiensi
            melalui solusi teknologi tepat guna.
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="mb-10 grid grid-cols-4 gap-10 max-md:grid-cols-2 max-md:gap-8">
          {/* Services Column */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Layanan</h4>
            <ul className="m-0 list-none p-0">
              <li className="mb-3">
                <Link
                  href="/services/web-development/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Web & Mobile App
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/services/pos-system/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Sistem POS & FnB
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/services/custom-software/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Excellence Column */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Keunggulan</h4>
            <ul className="m-0 list-none p-0">
              <li className="mb-3">
                <Link
                  href="/features/clean-architecture/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Clean Architecture
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/features/scalability/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Scalable Systems
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/features/cloud-ready/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Cloud Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Sumber Daya</h4>
            <ul className="m-0 list-none p-0">
              <li className="mb-3">
                <Link
                  href="/blog/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Blog & Artikel
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/about/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/contact/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Column */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">Lokasi</h4>
            <ul className="m-0 list-none p-0">
              <li className="mb-3">
                <p className="text-[15px] text-[#94A3B8]">
                  Yogyakarta, Indonesia
                </p>
              </li>
              <li className="mb-3">
                <Link
                  href="mailto:hello@tiasasolution.com"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  hello@tiasasolution.com
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/careers/"
                  className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-[#38BDF8]"
                >
                  Karir
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1E293B] pt-6 max-md:flex-col max-md:items-start">
          <p className="m-0 text-sm text-[#64748B]">
            © 2026 Tiasa Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy/"
              className="text-sm text-[#64748B] transition-colors duration-300 hover:text-[#38BDF8]"
            >
              Privacy Policy
            </Link>
            <span className="text-[#1E293B]">•</span>
            <Link
              href="/terms/"
              className="text-sm text-[#64748B] transition-colors duration-300 hover:text-[#38BDF8]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

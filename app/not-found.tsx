import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 pt-40 pb-24 text-center">
        <div className="max-w-2xl w-full">
          <h1 className="text-[120px] md:text-[180px] font-black leading-none text-[#0066FF] tracking-tighter">
            404
          </h1>

          {/* Subheading - Mengikuti gaya visual gambar */}
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#0F172A]">
            Ini aneh...
          </h2>

          {/* Informasi & Kontak Dukungan */}
          <p className="mt-6 text-base md:text-lg leading-relaxed text-[#64748B] max-w-xl mx-auto">
            Halaman yang Anda cari tidak ada atau tidak tersedia untuk
            sementara. Silakan hubungi dukungan di{" "}
            <a
              href="mailto:hello@tiasasolution.com"
              className="font-bold text-[#0F172A] hover:text-[#0066FF] transition-colors"
            >
              hello@tiasasolution.com
            </a>{" "}
            jika menurut Anda hal ini tidak seharusnya terjadi.
          </p>

          {/* Search Bar UI - Sesuai dengan layout referensi */}
          <div className="mt-12 relative max-w-md mx-auto w-full">
            <input
              type="text"
              placeholder="Cari..."
              className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/10 focus:border-[#0066FF] transition-all shadow-sm"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
              <Search size={20} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

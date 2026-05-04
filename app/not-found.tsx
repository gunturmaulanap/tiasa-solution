import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="max-w-md">
        <p className="text-sm font-bold uppercase tracking-[2px] text-[rgb(var(--marka-blue))]">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[#0F172A] md:text-6xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-6 text-base leading-relaxed text-[#64748B]">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan
          kembali ke beranda untuk mengeksplorasi solusi kami.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-[#0F172A] px-9 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgb(var(--marka-blue))]"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}

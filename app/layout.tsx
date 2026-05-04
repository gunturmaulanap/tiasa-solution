import type { Metadata } from "next";
import { Inter, Public_Sans, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiasa Solution - Solusi Digital Tepat Guna & Presisi",
  description:
    "Mitra transformasi digital di Yogyakarta yang fokus pada efisiensi operasional bisnis melalui sistem POS, digitalisasi industri, dan pengembangan aplikasi kustom.",
  icons: {
    icon: [
      {
        url: "/darkicon.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/whiteicon.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/whiteicon.svg",
    apple: "/whiteicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${publicSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

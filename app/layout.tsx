// layout.tsx
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

const BASE_URL = "https://www.tiasasolution.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Tiasa Solution – Software House & Jasa Pembuatan Aplikasi Yogyakarta",
    template: "%s | Tiasa Solution",
  },
  description:
    "Tiasa Solution adalah software house di Yogyakarta spesialis pembuatan aplikasi web, mobile, sistem POS FnB, dan custom software. Solusi digital presisi untuk bisnis Anda.",
  keywords: [
    "Tiasa Solution",
    "Tiasa",
    "software house Yogyakarta",
    "jasa pembuatan aplikasi",
    "digital solution Indonesia",
    "sistem POS FnB",
    "custom software Yogyakarta",
  ],
  authors: [{ name: "Tiasa Solution", url: BASE_URL }],
  creator: "Tiasa Solution",
  publisher: "Tiasa Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "Tiasa Solution",
    title:
      "Tiasa Solution – Software House & Jasa Pembuatan Aplikasi Yogyakarta",
    description:
      "Software house Yogyakarta spesialis web, mobile, sistem POS FnB, dan custom software. Partner transformasi digital bisnis Anda.",
    images: [
      {
        url: "/og-image.png", // buat ini! 1200x630px, taruh di /public
        width: 1200,
        height: 630,
        alt: "Tiasa Solution – Digital Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiasa Solution – Software House Yogyakarta",
    description:
      "Software house Yogyakarta spesialis web, mobile, POS FnB, dan custom software.",
    images: ["/og-image.png"],
  },
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${publicSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

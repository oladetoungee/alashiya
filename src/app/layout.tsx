import type { Metadata } from "next";
import {
  Geist_Mono,
  Playfair_Display,
  Roboto_Slab,
  Work_Sans,
} from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

// Display font — per Figma. Real font, not a substitute.
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Hero title display serif — the real Rojenstone, supplied by the designer.
// Single weight (Regular) is the only one shipped.
const rojenstone = localFont({
  variable: "--font-rojenstone",
  src: "../../public/font/Rojenstone Regular/Rojenstone Regular.ttf",
  weight: "400",
  display: "swap",
});

// Cera Pro — paid Figma font for body + UI text. Weights mirror what the
// codebase actually uses: regular / medium / bold + italics.
const ceraPro = localFont({
  variable: "--font-cera-pro",
  display: "swap",
  src: [
    {
      path: "../../public/font/CeraPro/CeraPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/CeraPro/CeraPro-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/CeraPro/CeraPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/CeraPro/CeraPro-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/CeraPro/CeraPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/CeraPro/CeraPro-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Archaeological Museum · Pafos District",
  description:
    "Explore 10,000 years of Cypriot history at the Archaeological Museum of the Pafos District.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${robotoSlab.variable} ${rojenstone.variable} ${ceraPro.variable} ${workSans.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

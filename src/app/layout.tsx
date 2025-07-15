import type { Metadata } from "next";
import { Cardo, Open_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cardo = Cardo({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-cardo",
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Spotlight Realty",
  description: "Luxury real estate services powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cardo.variable} ${openSans.variable} ${ebGaramond.variable} font-sans`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

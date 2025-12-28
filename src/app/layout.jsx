import localFont from "next/font/local";
import fs from "fs";
import path from "path";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const metadata = {
  title: {
    default: "Hero Kidz - Toy Store",
    template: "%s | Hero Kidz",
  },
  description: "An online toy store for kids",
};

import HideSiteShell from "@/components/layouts/HideSiteShell";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {/* Client helper will hide header/footer on auth pages */}
        <HideSiteShell />

        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>
        <main className="py-2 md:w-11/12 min-h-[calc(100vh-302px)] mx-auto">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

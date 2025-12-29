import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-ebon.vercel.app"),

  title: {
    default: "Hero Kidz – Best Toys & Learning Games for Kids",
    template: "%s | Hero Kidz",
  },

  description:
    "Find the best toys, learning games, activity kits, and kids essentials — up to 15% off. Shop quality products designed to help your child learn, play, and grow!",

  keywords: [
    "kids toys",
    "learning games",
    "children products",
    "educational toys",
    "Hero Kidz",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Hero Kidz – Toys & Learning Games for Kids",
    description:
      "Explore top-quality toys, cards, education games & fun activities for your child with great discounts!",
    url: "https://hero-kidz-ebon.vercel.app",
    siteName: "Hero Kidz",
    type: "website",
    images: [
      {
        url: "https://hero-kidz-ebon.vercel.app/assets/og-main.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz – Best Kids Toys & Games",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz – Best Toys & Learning Games",
    description:
      "Shop children’s toys & educational game kits with best prices and quality. Find discounts up to 15%!",
    images: ["https://hero-kidz-ebon.vercel.app/assets/og-main.png"],
    creator: "@hero_kidz",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

// 🔹 themeColor এর সঠিক প্লেসমেন্ট
export const viewport = {
  themeColor: "#FF6F61",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
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

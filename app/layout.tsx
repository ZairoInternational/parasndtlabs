import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paras Inspection Service - Quality Testing & Inspection Services",
  description:
    "Professional quality testing and inspection services for products, factories, and compliance worldwide.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Contact />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

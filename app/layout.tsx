import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "GenZ Counter",
  description: "A counter application made for the next generation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

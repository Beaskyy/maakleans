import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const overpass = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maakleans Laundry Services",
  description: "A luandry service company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Maakleans — Premium Dry Cleaning & Laundry Services in Lagos",
    template: "%s | Maakleans",
  },
  description:
    "Lagos' first choice in premium dry cleaning, laundry, and garment care. Free pickup & delivery. VIP express service. Trusted for over 20 years.",
  keywords: [
    "dry cleaning Lagos",
    "laundry service Lagos",
    "premium dry cleaning",
    "Maakleans",
    "garment care",
    "pickup delivery laundry",
  ],
  openGraph: {
    title: "Maakleans — Premium Dry Cleaning & Laundry Services",
    description:
      "Lagos' first choice in premium dry cleaning, laundry, and garment care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

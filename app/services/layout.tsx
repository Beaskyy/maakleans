import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Maakleans' full range of garment care services — dry cleaning, laundry, wash & fold, ironing, stain removal, alterations, and free pickup & delivery across Lagos.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

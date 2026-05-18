import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Maakleans — Lagos' premier dry cleaning and laundry service with over 20 years of excellence, 5 locations, and 10,000+ happy customers.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

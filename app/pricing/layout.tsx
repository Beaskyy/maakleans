import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent and fair pricing for all Maakleans services. Pay per item or choose a plan — Basic, Premium, or VIP. No hidden fees.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

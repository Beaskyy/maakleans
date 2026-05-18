import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Maakleans. Schedule a free pickup, find our 5 Lagos locations, call, email, or WhatsApp us. We respond within 2 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

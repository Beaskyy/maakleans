"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { BsArrowRight, BsCheckCircle, BsStarFill } from "react-icons/bs";
import { FaCheck, FaCrown } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    desc: "For individuals with everyday laundry needs",
    price: "Pay per item",
    highlight: false,
    features: [
      "Wash & Fold service",
      "Standard ironing",
      "48-hour turnaround",
      "In-store drop-off",
      "Basic stain treatment",
      "Quality inspection",
    ],
    notIncluded: [
      "Free pickup & delivery",
      "Priority processing",
      "Dedicated advisor",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    desc: "For professionals who want convenience & quality",
    price: "Monthly Plan",
    highlight: true,
    badge: "Most Popular",
    features: [
      "All Basic features",
      "Dry cleaning included",
      "Free pickup & delivery",
      "24-hour express available",
      "Advanced stain removal",
      "Alterations (10% off)",
      "Garment insurance",
      "SMS/Email notifications",
    ],
    notIncluded: [
      "Dedicated advisor",
    ],
    cta: "Choose Premium",
  },
  {
    name: "VIP",
    desc: "The ultimate luxury garment care experience",
    price: "VIP Membership",
    highlight: false,
    badge: "Best Value",
    features: [
      "All Premium features",
      "Zero wait time at counter",
      "Same-day turnaround",
      "Dedicated personal advisor",
      "Priority phone support",
      "Free alterations",
      "Wardrobe consultation",
      "Exclusive member events",
      "Monthly garment audit",
    ],
    notIncluded: [],
    cta: "Go VIP",
  },
];

const priceList = [
  { category: "Everyday Items", items: [
    { name: "Shirt (Wash & Iron)", price: "₦800" },
    { name: "Trousers", price: "₦1,000" },
    { name: "T-Shirt", price: "₦600" },
    { name: "Jeans", price: "₦1,200" },
    { name: "Underwear / Socks (pair)", price: "₦300" },
  ]},
  { category: "Dry Cleaning", items: [
    { name: "2-Piece Suit", price: "₦3,500" },
    { name: "3-Piece Suit", price: "₦4,500" },
    { name: "Blazer / Jacket", price: "₦2,500" },
    { name: "Dress (Simple)", price: "₦2,000" },
    { name: "Dress (Evening / Formal)", price: "₦4,000" },
    { name: "Tie", price: "₦800" },
  ]},
  { category: "Specialty Items", items: [
    { name: "Wedding Dress", price: "₦15,000" },
    { name: "Agbada (Full Set)", price: "₦5,000" },
    { name: "Curtains (per panel)", price: "₦2,000" },
    { name: "Duvet / Comforter", price: "₦4,000" },
    { name: "Leather / Suede Jacket", price: "₦6,000" },
  ]},
  { category: "Bulk & Wash/Fold", items: [
    { name: "Wash & Fold (per kg)", price: "₦1,500" },
    { name: "Ironing Only (per piece)", price: "₦500" },
    { name: "Stain Removal (per garment)", price: "₦1,000" },
    { name: "Minor Alteration", price: "₦1,500" },
    { name: "Major Alteration", price: "₦3,000" },
  ]},
];

const faqs = [
  {
    q: "How does the free pickup & delivery work?",
    a: "Simply schedule a pickup through our website or by phone. Our driver will collect your garments at your preferred time and return them once cleaned. This service is available across Lagos for Premium and VIP members, and for orders above ₦5,000 for Basic customers."
  },
  {
    q: "What is your turnaround time?",
    a: "Standard turnaround is 48 hours for Basic, 24 hours for Premium, and same-day for VIP members. Express service (24-hour) is available for all customers at an additional 50% charge."
  },
  {
    q: "Do you offer a satisfaction guarantee?",
    a: "Absolutely! We offer a 100% satisfaction guarantee. If you're not happy with the quality of our cleaning, we will re-clean the garment free of charge within 7 days."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, bank transfer, debit/credit cards, and mobile payments (including OPay, PalmPay). VIP members can also use their monthly billing account."
  },
  {
    q: "How do I become a VIP member?",
    a: "Contact us via phone or visit any Maakleans location to sign up for our VIP program. There's a one-time registration fee, and you'll immediately enjoy all VIP benefits including a dedicated personal advisor."
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="hero-glow w-[400px] h-[400px] bg-accent-500/15 top-0 right-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-primary-400 bg-primary-500/10 px-4 py-1.5 rounded-full mb-4 border border-primary-500/20">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Transparent &{" "}
            <span className="gradient-text">Fair Pricing</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose a plan that fits your lifestyle
            or pay per item — the choice is yours.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    plan.highlight
                      ? "bg-dark text-white border-2 border-primary-500 shadow-xl shadow-primary-500/20 scale-[1.02]"
                      : "bg-white border border-slate-200 card-hover"
                  }`}
                >
                  {plan.badge && (
                    <span
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${
                        plan.highlight
                          ? "gradient-bg text-white"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-dark"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.desc}
                    </p>
                  </div>
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className={`text-sm font-semibold ${plan.highlight ? "text-primary-400" : "text-primary-500"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <BsCheckCircle
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${
                            plan.highlight ? "text-primary-400" : "text-primary-500"
                          }`}
                        />
                        <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 opacity-40">
                        <BsCheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                        <span className={`text-sm line-through ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "btn-primary !w-full !justify-center"
                        : "btn-outline !w-full !justify-center"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Price List
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                Detailed <span className="gradient-text">Price Guide</span>
              </h2>
              <p className="text-slate-500">
                Individual item pricing for all our services. Prices may vary for specialty items.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {priceList.map((cat, i) => (
              <ScrollReveal key={cat.category} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-full">
                  <h3 className="text-lg font-bold text-dark mb-4 pb-3 border-b border-slate-100">
                    {cat.category}
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">{item.name}</span>
                        <span className="text-sm font-bold text-dark">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-sm text-slate-400 mt-8">
              * Prices are subject to change. Special items may require custom quotes.
              Contact us for bulk pricing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-dark pr-4">{faq.q}</span>
                    <span
                      className={`text-primary-500 transform transition-transform duration-300 flex-shrink-0 text-xl ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <p className="p-5 pt-0 text-sm text-slate-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="gradient-bg rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-dots opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  First-time customers enjoy 20% off their first order.
                  Schedule your free pickup today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-white/90 transition-all"
                  >
                    Schedule Pickup
                    <BsArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:+2341234567890"
                    className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
                  >
                    <FiPhone size={18} />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

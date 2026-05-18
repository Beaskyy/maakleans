"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  PiShirtFolded, PiDropHalf,
} from "react-icons/pi";
import {
  GiWashingMachine, GiSewingMachine,
} from "react-icons/gi";
import {
  MdOutlineIron, MdLocalLaundryService,
} from "react-icons/md";
import {
  RiShirtLine, RiTShirtAirLine, RiSparklingLine,
} from "react-icons/ri";
import {
  BsArrowRight, BsTruck, BsStarFill, BsCheckCircle,
} from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

const allServices = [
  {
    icon: <PiShirtFolded size={32} />,
    title: "Dry Cleaning",
    desc: "Our expert dry cleaning service uses advanced eco-friendly solvents to remove stains and refresh fabrics without water damage. Ideal for suits, dresses, silk, cashmere, and other delicate garments that require special care.",
    features: ["Eco-friendly solvents", "Garment inspection", "Hand-finished pressing", "Protective packaging"],
  },
  {
    icon: <RiTShirtAirLine size={32} />,
    title: "Wet Cleaning",
    desc: "Professional water-based cleaning using computer-controlled machines that precisely manage temperature, moisture, and mechanical action. A greener alternative to traditional dry cleaning for many fabric types.",
    features: ["Gentle on fabrics", "Environmentally safe", "No chemical odor", "Color preservation"],
  },
  {
    icon: <GiWashingMachine size={32} />,
    title: "Laundry Service",
    desc: "Full-service laundry including wash, dry, and fold for your everyday clothing. We use premium detergents and fabric softeners, with separate handling for whites, colors, and delicates.",
    features: ["Sorted by color/fabric", "Premium detergents", "Fabric softener included", "Same-day available"],
  },
  {
    icon: <MdOutlineIron size={32} />,
    title: "Ironing & Pressing",
    desc: "Professional steam pressing and hand ironing that delivers crisp, wrinkle-free results every time. Our experienced pressers handle everything from dress shirts to intricate formal wear.",
    features: ["Steam pressing", "Hand finishing", "Crease perfection", "Hanger or folded"],
  },
  {
    icon: <RiShirtLine size={32} />,
    title: "Wash & Fold",
    desc: "Our most convenient service — simply drop off your laundry and we handle the rest. Clothes are washed, dried, neatly folded, and packaged for easy storage at home.",
    features: ["Weighed & priced per kg", "Quick turnaround", "Neatly packaged", "Budget friendly"],
  },
  {
    icon: <RiSparklingLine size={32} />,
    title: "Stain Removal",
    desc: "Stubborn stains meet their match with our advanced stain removal treatments. Our specialists assess each stain and apply targeted solutions to restore your garments to their original condition.",
    features: ["Expert assessment", "Targeted treatment", "Safe for fabrics", "Success guarantee"],
  },
  {
    icon: <GiSewingMachine size={32} />,
    title: "Alterations & Repairs",
    desc: "From hemming trousers to letting out seams, our skilled tailors provide precise alterations and repairs. We ensure every piece fits perfectly and looks its best.",
    features: ["Expert tailoring", "Zipper replacement", "Button repair", "Hemming & sizing"],
  },
  {
    icon: <BsTruck size={32} />,
    title: "Pickup & Delivery",
    desc: "Enjoy the ultimate convenience with our free pickup and delivery service across Lagos. Schedule online or by phone, and we will collect and return your garments to your doorstep.",
    features: ["Free across Lagos", "Flexible scheduling", "Real-time tracking", "Insured transport"],
  },
];

const process = [
  { step: "01", title: "Inspection", desc: "Every garment is carefully inspected for stains, damage, and special care requirements." },
  { step: "02", title: "Pre-Treatment", desc: "Stains and problem areas are pre-treated with specialized solutions for optimal results." },
  { step: "03", title: "Cleaning", desc: "Garments are cleaned using the most appropriate method — dry clean, wet clean, or wash." },
  { step: "04", title: "Finishing", desc: "Expert pressing, steaming, and hand-finishing ensure a crisp, professional look." },
  { step: "05", title: "Quality Check", desc: "A final quality inspection ensures every item meets our exacting standards." },
  { step: "06", title: "Packaging", desc: "Garments are carefully packaged on hangers or folded, ready for pickup or delivery." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="hero-glow w-[400px] h-[400px] bg-primary-500/15 top-0 left-0" />
        <div className="hero-glow w-[300px] h-[300px] bg-accent-500/10 bottom-0 right-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-primary-400 bg-primary-500/10 px-4 py-1.5 rounded-full mb-4 border border-primary-500/20">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Comprehensive{" "}
            <span className="gradient-text">Garment Care</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From everyday laundry to premium dry cleaning and expert alterations,
            we deliver exceptional results with every service.
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {allServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 50}>
                <div className="group bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 card-hover hover:border-primary-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-1">
                      <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="lg:col-span-4">
                      <div className="bg-slate-50 rounded-xl p-5">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">What&apos;s Included</p>
                        <ul className="space-y-2">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                              <BsCheckCircle size={14} className="text-primary-500 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                The Maakleans{" "}
                <span className="gradient-text">6-Step Process</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Every garment goes through our rigorous quality process to ensure perfect results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 card-hover h-full">
                  <span className="text-3xl font-extrabold gradient-text">{p.step}</span>
                  <h3 className="text-lg font-bold text-dark mt-3 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                  Our Promise
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
                  100% Satisfaction{" "}
                  <span className="gradient-text">Guaranteed</span>
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  We stand behind the quality of our work. If you&apos;re not completely satisfied
                  with any service, we will re-clean your garment free of charge — no questions asked.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Re-clean guarantee on all services",
                    "Full garment insurance coverage",
                    "Transparent pricing with no hidden fees",
                    "Dedicated customer support team",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                        <FaCheck size={10} className="text-white" />
                      </span>
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">
                    Schedule Pickup
                    <BsArrowRight size={16} />
                  </Link>
                  <Link href="/pricing" className="btn-outline">
                    View Pricing
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/vip.jpg"
                    alt="Quality garment care"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[400px]"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
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
                  Need a Service Not Listed?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  We handle special requests too. Contact us to discuss your specific
                  garment care needs and get a custom quote.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-white/90 transition-all"
                  >
                    Contact Us
                    <BsArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:+2341234567890"
                    className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
                  >
                    <FiPhone size={18} />
                    Call Now
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

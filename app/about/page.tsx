"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  BsArrowRight,
  BsStarFill,
  BsShieldCheck,
  BsAward,
  BsHeart,
  BsGlobe,
} from "react-icons/bs";
import { FaLeaf, FaCheck } from "react-icons/fa6";
import { MdLocalLaundryService } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

/* Counter Hook */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);
  return { count, ref };
}

const values = [
  {
    icon: <BsShieldCheck size={28} />,
    title: "Quality First",
    desc: "Every garment is inspected before and after cleaning. We hold ourselves to the highest standards of garment care in the industry.",
  },
  {
    icon: <FaLeaf size={28} />,
    title: "Sustainability",
    desc: "We use eco-friendly solvents, energy-efficient machines, and biodegradable packaging to reduce our environmental footprint.",
  },
  {
    icon: <BsHeart size={28} />,
    title: "Customer Love",
    desc: "Your satisfaction is our obsession. From our 100% quality guarantee to our responsive support, you always come first.",
  },
  {
    icon: <BsGlobe size={28} />,
    title: "Community Impact",
    desc: "We employ over 200 Lagosians and actively support community development through training and local partnerships.",
  },
];

const milestones = [
  { year: "2004", event: "Founded our first location in Lekki, Lagos" },
  { year: "2009", event: "Expanded to 3 locations across Lagos Island" },
  { year: "2014", event: "Launched eco-friendly cleaning technology" },
  { year: "2018", event: "Introduced free pickup & delivery service" },
  { year: "2022", event: "Reached 10,000+ active customers milestone" },
  { year: "2025", event: "Opened 5th location, launched VIP program" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="hero-glow w-[400px] h-[400px] bg-primary-500/15 top-0 right-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-primary-400 bg-primary-500/10 px-4 py-1.5 rounded-full mb-4 border border-primary-500/20">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            The Story Behind{" "}
            <span className="gradient-text">Maakleans</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            For over two decades, we&apos;ve been committed to transforming the way Lagos
            experiences garment care — one perfectly cleaned piece at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/launder.jpg"
                    alt="Maakleans laundry facility"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[450px]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary-100/50 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
                  Built on a Promise of{" "}
                  <span className="gradient-text">Excellence</span>
                </h2>
                <div className="space-y-4 text-slate-500 leading-relaxed">
                  <p>
                    Maakleans was founded in 2004 with a simple mission: to provide Lagos
                    with garment care services that rival the best in the world. What started
                    as a single shop in Lekki has grown into a trusted network serving
                    thousands of customers across the city.
                  </p>
                  <p>
                    Our founder saw a gap in the market — busy professionals and families
                    deserved better than inconsistent, unreliable laundry services. We set out
                    to build a company that treats every garment with the care and attention
                    it deserves, using state-of-the-art equipment and eco-friendly processes.
                  </p>
                  <p>
                    Today, Maakleans is Lagos&apos; most trusted name in dry cleaning and laundry.
                    With five locations, a fleet of delivery vehicles, and a team of over 200
                    skilled professionals, we continue to raise the bar for garment care in
                    Nigeria.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 20, suffix: "+", label: "Years in Business" },
              { end: 200, suffix: "+", label: "Team Members" },
              { end: 5, suffix: "", label: "Locations" },
              { end: 10, suffix: "K+", label: "Happy Customers" },
            ].map((stat) => {
              const { count, ref } = useCounter(stat.end);
              return (
                <div key={stat.label} ref={ref} className="text-center">
                  <p className="text-4xl font-extrabold gradient-text mb-1">
                    {count}{stat.suffix}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                What Drives <span className="gradient-text">Us Forward</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Our core values shape every decision we make and every garment we clean.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="flex items-start gap-5 p-6 rounded-2xl border border-slate-100 card-hover h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">
                Key <span className="gradient-text">Milestones</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 80}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-white shadow-md z-10 mt-1" />
                    <div className="ml-12 md:ml-0 md:w-1/2">
                      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                        <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">
                          {m.year}
                        </span>
                        <p className="text-sm text-slate-600 mt-1">{m.event}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="gradient-bg rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-dots opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                  Want to Be Part of Our Story?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  Join thousands of satisfied customers or explore career opportunities
                  with Lagos&apos; leading garment care company.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-white/90 transition-all"
                  >
                    Get Started
                    <BsArrowRight size={18} />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

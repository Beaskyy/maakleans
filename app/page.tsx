"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useState, useRef } from "react";
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
  IoLocationOutline,
} from "react-icons/io5";
import {
  BsPinMapFill, BsStarFill, BsArrowRight, BsShieldCheck, BsClock, BsTruck, BsAward,
} from "react-icons/bs";
import {
  FaCheck, FaQuoteLeft, FaLeaf,
} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

/* ——— Animated Counter Hook ——— */
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
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
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

/* ——— SERVICES DATA ——— */
const services = [
  { icon: <PiShirtFolded size={28} />, title: "Dry Cleaning", desc: "Expert care for your delicate garments using eco-friendly solvents." },
  { icon: <RiTShirtAirLine size={28} />, title: "Wet Cleaning", desc: "Gentle water-based cleaning for sensitive fabrics and materials." },
  { icon: <GiWashingMachine size={28} />, title: "Laundry", desc: "Professional wash, dry, and fold services for everyday clothes." },
  { icon: <MdOutlineIron size={28} />, title: "Ironing & Pressing", desc: "Crisp, wrinkle-free results with precision steam pressing." },
  { icon: <RiShirtLine size={28} />, title: "Wash & Fold", desc: "Convenient drop-off service with same-day turnaround available." },
  { icon: <GiSewingMachine size={28} />, title: "Alterations", desc: "Expert tailoring and repair services to perfect your fit." },
  { icon: <RiSparklingLine size={28} />, title: "Stain Removal", desc: "Advanced stain treatment for even the most stubborn marks." },
  { icon: <BsTruck size={28} />, title: "Free Pickup & Delivery", desc: "Doorstep pickup and delivery across Lagos at no extra cost." },
];

/* ——— STEPS DATA ——— */
const steps = [
  { num: "01", title: "Schedule a Pickup", desc: "Book online or call us. Choose a time slot that works for you.", icon: <BsClock size={24} /> },
  { num: "02", title: "We Collect & Clean", desc: "Our team picks up your garments and cares for them with precision.", icon: <MdLocalLaundryService size={24} /> },
  { num: "03", title: "Fresh Delivery", desc: "Your clothes are returned fresh, crisp, and ready to wear.", icon: <BsTruck size={24} /> },
];

/* ——— TESTIMONIALS DATA ——— */
const testimonials = [
  { name: "Adebayo Olumide", role: "Business Executive", text: "Maakleans transformed my wardrobe experience. Their attention to detail on my suits is unmatched. The VIP pickup service saves me hours every week.", rating: 5 },
  { name: "Chidinma Okafor", role: "Fashion Designer", text: "As a designer, I trust only Maakleans with my delicate fabrics. Their eco-friendly cleaning process preserves the integrity of every piece perfectly.", rating: 5 },
  { name: "Emeka Nwachukwu", role: "Hotel Manager", text: "We've partnered with Maakleans for our hotel's linen services. Consistent quality, reliable delivery, and excellent customer service every single time.", rating: 5 },
];

/* ——— WHY CHOOSE US DATA ——— */
const whyUs = [
  { icon: <BsShieldCheck size={24} />, title: "Quality Guaranteed", desc: "100% satisfaction guarantee on every garment we handle." },
  { icon: <FaLeaf size={24} />, title: "Eco-Friendly", desc: "Green solvents and sustainable practices that protect the environment." },
  { icon: <BsClock size={24} />, title: "24hr Turnaround", desc: "Express service available for those urgent, time-sensitive needs." },
  { icon: <BsAward size={24} />, title: "20+ Years Expert", desc: "Two decades of trusted expertise in premium garment care." },
];

export default function Home() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
        {/* Decorative Glows */}
        <div className="hero-glow w-[500px] h-[500px] bg-primary-500/20 top-[-100px] right-[-100px] animate-float" />
        <div className="hero-glow w-[400px] h-[400px] bg-accent-500/15 bottom-[-50px] left-[-80px] animate-float-delayed" />
        <div className="hero-glow w-[200px] h-[200px] bg-primary-500/10 top-1/2 left-1/3 animate-float-slow" />

        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dots opacity-40" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-slate-300 font-medium">
                  Serving Lagos for 20+ years
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                Premium{" "}
                <span className="gradient-text">Dry Cleaning</span>
                <br />
                & Laundry Services
              </h1>
              <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
                Experience Lagos&apos; finest garment care with free pickup &amp; delivery.
                Unsurpassed quality, eco-friendly processes, and a commitment
                to excellence that spans two decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary !py-4 !px-8 !text-base">
                  Schedule Free Pickup
                  <BsArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn-secondary !py-4 !px-8 !text-base">
                  Explore Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-dark flex items-center justify-center text-[10px] font-bold text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <BsStarFill key={i} size={12} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400">
                    Trusted by <span className="text-white font-semibold">10,000+</span> customers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10">
                <Image
                  src="/images/launder.jpg"
                  alt="Premium dry cleaning and laundry services"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[600px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl p-5 shadow-xl animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <BsTruck className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark">Free Pickup</p>
                    <p className="text-xs text-slate-500">Anywhere in Lagos</p>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl p-4 shadow-xl animate-bounce-gentle">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <BsStarFill key={i} size={11} className="text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-dark">4.9</span>
                </div>
              </div>
              {/* Decorative Ring */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary-500/10 animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <section className="relative z-10 -mt-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="gradient-bg rounded-2xl py-8 px-6 lg:px-12 shadow-xl shadow-primary-500/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { end: 20, suffix: "+", label: "Years Experience" },
                { end: 10, suffix: "K+", label: "Happy Customers" },
                { end: 5, suffix: "", label: "Lagos Locations" },
                { end: 500, suffix: "K+", label: "Items Cleaned" },
              ].map((stat) => {
                const { count, ref } = useCounter(stat.end);
                return (
                  <div key={stat.label} ref={ref} className="text-center">
                    <p className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
                      {count}{stat.suffix}
                    </p>
                    <p className="text-sm text-white/70 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="section-padding bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-4">
                Everything Your{" "}
                <span className="gradient-text">Wardrobe Needs</span>
              </h2>
              <p className="text-slate-500 text-lg">
                From everyday laundry to premium garment care, we offer comprehensive
                cleaning solutions tailored to your lifestyle.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="group relative bg-white rounded-2xl p-6 border border-slate-100 card-hover hover:border-primary-200 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mb-5 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-outline">
                View All Services
                <BsArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section className="section-padding bg-slate-50" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-4">
                How It <span className="gradient-text">Works</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Getting your clothes cleaned has never been this easy. Three simple steps to fresh garments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 150}>
                <div className="relative text-center">
                  {/* Connector line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary-200 to-primary-100" />
                  )}
                  <div className="relative z-10 w-24 h-24 rounded-3xl gradient-bg mx-auto mb-6 flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <span className="text-white">{step.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                    Step {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY CHOOSE US ══════════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/launder.jpg"
                    alt="Professional dry cleaning process"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[450px]"
                  />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <p className="text-4xl font-extrabold gradient-text">20+</p>
                    <p className="text-sm font-semibold text-slate-600">Years of<br/>Excellence</p>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary-100/50 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                  Why Maakleans
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
                  Laundry is Easier with{" "}
                  <span className="gradient-text">Maakleans</span>
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  We combine cutting-edge cleaning technology with old-fashioned attention
                  to detail. Every garment is treated as if it were our own.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  {whyUs.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                  <BsArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ VIP SECTION ══════════════ */}
      <section className="relative section-padding bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="hero-glow w-[300px] h-[300px] bg-accent-500/15 top-0 right-0" />
        <div className="hero-glow w-[250px] h-[250px] bg-primary-500/15 bottom-0 left-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold text-primary-400 bg-primary-500/10 px-4 py-1.5 rounded-full mb-4 border border-primary-500/20">
                  VIP Program
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                  Get the{" "}
                  <span className="gradient-text">VIP Treatment</span>
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Our VIP Express Service is a comprehensive laundry solution tailored
                  for busy professionals and families. Skip the wait, enjoy priority
                  service, and experience luxury garment care.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Priority counter service — zero wait time",
                    "Automatic billing & account management",
                    "24-hour express turnaround",
                    "Free pickup & delivery anywhere in Lagos",
                    "Dedicated personal garment advisor",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                        <FaCheck size={10} className="text-white" />
                      </span>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="btn-primary">
                  Become a VIP
                  <BsArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary-500/10">
                  <Image
                    src="/images/vip.jpg"
                    alt="VIP dry cleaning service"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl border border-primary-500/20 -z-10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl border border-accent-500/20 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-4">
                What Our <span className="gradient-text">Customers Say</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Don&apos;t just take our word for it — hear from thousands of satisfied customers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 card-hover border border-slate-100 h-full flex flex-col">
                  <FaQuoteLeft size={24} className="text-primary-200 mb-4" />
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <BsStarFill key={j} size={14} className="text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-11 h-11 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA SECTION ══════════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative gradient-bg rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-dots opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                  Ready for Fresh, Clean Clothes?
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                  Schedule your free pickup today and experience the Maakleans difference.
                  First-time customers get 20% off.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-white/90 hover:shadow-lg transition-all"
                  >
                    Schedule Free Pickup
                    <BsArrowRight size={18} />
                  </Link>
                  <a
                    href="tel:+2341234567890"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all"
                  >
                    <FiPhone size={18} />
                    Call Us Now
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

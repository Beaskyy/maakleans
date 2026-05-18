"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { BsArrowRight, BsClock, BsTelephone, BsGeoAlt, BsEnvelope } from "react-icons/bs";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: <FiPhone size={24} />,
    title: "Call Us",
    desc: "Speak directly with our team",
    details: ["+234 123 456 7890", "+234 098 765 4321"],
    action: { label: "Call Now", href: "tel:+2341234567890" },
  },
  {
    icon: <FiMail size={24} />,
    title: "Email Us",
    desc: "We respond within 2 hours",
    details: ["hello@maakleans.com", "support@maakleans.com"],
    action: { label: "Send Email", href: "mailto:hello@maakleans.com" },
  },
  {
    icon: <FaWhatsapp size={24} />,
    title: "WhatsApp",
    desc: "Chat with us instantly",
    details: ["+234 123 456 7890"],
    action: { label: "Start Chat", href: "https://wa.me/2341234567890" },
  },
  {
    icon: <FiClock size={24} />,
    title: "Working Hours",
    desc: "Visit us anytime during",
    details: ["Mon–Fri: 7:00 AM – 8:00 PM", "Sat: 8:00 AM – 6:00 PM", "Sun: 10:00 AM – 4:00 PM"],
    action: null,
  },
];

const locations = [
  {
    name: "Lekki Phase 1 (HQ)",
    address: "15 Admiralty Way, Lekki Phase 1, Lagos",
    phone: "+234 123 456 7890",
    hours: "Mon–Sat: 7AM – 8PM, Sun: 10AM – 4PM",
  },
  {
    name: "Victoria Island",
    address: "28 Adeola Odeku Street, Victoria Island, Lagos",
    phone: "+234 123 456 7891",
    hours: "Mon–Sat: 7AM – 8PM, Sun: Closed",
  },
  {
    name: "Ikeja GRA",
    address: "5 Joel Ogunnaike Street, Ikeja GRA, Lagos",
    phone: "+234 123 456 7892",
    hours: "Mon–Sat: 7AM – 7PM, Sun: 10AM – 3PM",
  },
  {
    name: "Ikoyi",
    address: "42 Awolowo Road, Ikoyi, Lagos",
    phone: "+234 123 456 7893",
    hours: "Mon–Sat: 7AM – 8PM, Sun: 10AM – 4PM",
  },
  {
    name: "Surulere",
    address: "10 Adeniran Ogunsanya Street, Surulere, Lagos",
    phone: "+234 123 456 7894",
    hours: "Mon–Sat: 7AM – 7PM, Sun: Closed",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="hero-glow w-[350px] h-[350px] bg-primary-500/15 bottom-0 left-0" />
        <div className="hero-glow w-[250px] h-[250px] bg-accent-500/10 top-0 right-[20%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-primary-400 bg-primary-500/10 px-4 py-1.5 rounded-full mb-4 border border-primary-500/20">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Let&apos;s{" "}
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a question, need a quote, or want to schedule a pickup?
            We&apos;re here to help. Reach out through any channel below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 card-hover h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mb-5">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-1">{info.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{info.desc}</p>
                  <div className="space-y-1 mb-5 flex-1">
                    {info.details.map((d) => (
                      <p key={d} className="text-sm text-slate-600 font-medium">{d}</p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action.href}
                      className="btn-outline !py-2.5 !text-xs !px-4 w-fit"
                    >
                      {info.action.label}
                      <BsArrowRight size={14} />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                  Send a Message
                </span>
                <h2 className="text-3xl font-extrabold text-dark mb-2">
                  Schedule a <span className="gradient-text">Free Pickup</span>
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within 2 hours.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                    ✓ Thank you! We&apos;ll be in touch within 2 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="dry-cleaning">Dry Cleaning</option>
                        <option value="laundry">Laundry</option>
                        <option value="wash-fold">Wash & Fold</option>
                        <option value="ironing">Ironing & Pressing</option>
                        <option value="alterations">Alterations</option>
                        <option value="stain-removal">Stain Removal</option>
                        <option value="pickup">Schedule Pickup</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your laundry needs, preferred pickup time, or any special instructions..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary !py-3.5 w-full sm:w-auto">
                    <FiSend size={16} />
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-dark rounded-3xl p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Why Choose Maakleans?</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Join over 10,000 satisfied customers who trust us with their garments every day.
                  </p>
                  <div className="space-y-6">
                    {[
                      { title: "Free Pickup & Delivery", desc: "Available across all Lagos locations" },
                      { title: "100% Quality Guarantee", desc: "Not satisfied? We re-clean for free" },
                      { title: "Same-Day Service", desc: "VIP express turnaround available" },
                      { title: "Eco-Friendly Process", desc: "Green solvents & sustainable practices" },
                      { title: "20+ Years Experience", desc: "Lagos' most trusted name since 2004" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs text-slate-500 mb-3">Prefer a quick call?</p>
                  <a
                    href="tel:+2341234567890"
                    className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm hover:text-primary-300 transition-colors"
                  >
                    <FiPhone size={16} />
                    +234 123 456 7890
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-sm font-semibold text-primary-500 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Our Locations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
                Find Us Across <span className="gradient-text">Lagos</span>
              </h2>
              <p className="text-slate-500">
                Visit any of our 5 convenient locations for drop-off and pickup.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.name} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-4">
                    <FiMapPin size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-1">{loc.name}</h3>
                  <p className="text-sm text-slate-500 mb-3">{loc.address}</p>
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <p className="flex items-center gap-2 text-sm text-slate-600">
                      <FiPhone size={14} className="text-primary-500" />
                      {loc.phone}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-slate-600">
                      <FiClock size={14} className="text-primary-500" />
                      {loc.hours}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

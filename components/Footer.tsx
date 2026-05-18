import Link from "next/link";
import { BsInstagram, BsTwitterX, BsTiktok } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <span className="text-xl font-bold">Maakleans</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              A tradition of unsurpassed customer service and unwavering
              commitment to high quality dry cleaning and laundry service for
              over 20 years in Lagos.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <FaFacebookF size={15} />, label: "Facebook" },
                { icon: <BsInstagram size={15} />, label: "Instagram" },
                { icon: <BsTwitterX size={14} />, label: "Twitter" },
                { icon: <BsTiktok size={15} />, label: "TikTok" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {["Dry Cleaning", "Laundry", "Wash & Fold", "Ironing & Pressing", "Stain Removal", "Alterations"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/services"
                      className="text-slate-400 text-sm hover:text-primary-400 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "/contact" },
                { label: "Blog", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+2341234567890"
                className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <span className="mt-0.5 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 transition-colors flex-shrink-0">
                  <FiPhone size={16} className="text-primary-400" />
                </span>
                <span className="text-sm leading-relaxed">
                  +234 123 456 7890
                  <br />
                  +234 098 765 4321
                </span>
              </a>
              <a
                href="mailto:hello@maakleans.com"
                className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <span className="mt-0.5 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 transition-colors flex-shrink-0">
                  <FiMail size={16} className="text-primary-400" />
                </span>
                <span className="text-sm leading-relaxed">hello@maakleans.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <span className="mt-0.5 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <FiMapPin size={16} className="text-primary-400" />
                </span>
                <span className="text-sm leading-relaxed">
                  15 Admiralty Way, Lekki Phase 1,
                  <br />
                  Lagos, Nigeria
                </span>
              </div>
            </div>

            {/* Newsletter mini */}
            <div className="mt-8">
              <p className="text-sm text-slate-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button className="btn-primary !py-2.5 !px-4 !text-sm !rounded-lg">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500" suppressHydrationWarning>
              © {new Date().getFullYear()} Maakleans Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

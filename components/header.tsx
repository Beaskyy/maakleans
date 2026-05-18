"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenSidebar(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = openSidebar ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openSidebar]);

  const headerBg = isScrolled
    ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5"
    : isHome
    ? "bg-transparent"
    : "bg-dark";

  const textColor = isScrolled ? "text-slate-700" : "text-white";
  const logoColor = isScrolled ? "text-dark" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-105 transition-transform">
                M
              </div>
              <span className={`text-xl font-bold ${logoColor} transition-colors duration-300`}>
                Maakleans
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${isActive
                        ? "text-primary-500"
                        : `${textColor} hover:text-primary-500`
                      }
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 gradient-bg rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+2341234567890"
                className={`flex items-center gap-2 text-sm font-medium ${textColor} transition-colors hover:text-primary-500`}
              >
                <FiPhone size={16} />
                <span className="hidden xl:inline">+234 123 456 7890</span>
              </a>
              <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
                Schedule Pickup
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpenSidebar(!openSidebar)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${textColor} hover:bg-white/10`}
              aria-label="Toggle menu"
            >
              {openSidebar ? (
                <IoCloseOutline size={28} />
              ) : (
                <HiOutlineMenuAlt3 size={28} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          openSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenSidebar(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 lg:hidden transform transition-transform duration-400 ease-out ${
          openSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-slate-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpenSidebar(false)}>
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-base">
                M
              </div>
              <span className="text-lg font-bold text-dark">Maakleans</span>
            </Link>
            <button
              onClick={() => setOpenSidebar(false)}
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
              aria-label="Close menu"
            >
              <IoCloseOutline size={24} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpenSidebar(false)}
                  className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 mb-1
                    ${isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-6 border-t border-slate-100 space-y-3">
            <a
              href="tel:+2341234567890"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              <FiPhone size={16} />
              +234 123 456 7890
            </a>
            <Link
              href="/contact"
              onClick={() => setOpenSidebar(false)}
              className="btn-primary w-full !justify-center"
            >
              Schedule Pickup
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;

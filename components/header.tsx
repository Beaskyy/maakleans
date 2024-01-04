"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`hidden fixed lg:flex justify-between items-center p-4 w-full lg:px-20 gap-8 z-50 bg-sky-100 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <div>
          <Link href="/">
            <p className="text-2xl font-bold">Maakleans</p>
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-start lg:items-center gap-8">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Service</Link>
            </li>
            <li>
              <Link href="/">Find Location</Link>
            </li>
            <li>
              <Link href="/">My Account</Link>
            </li>
          </ul>
        </div>
        <div>
          <button>Get Started</button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed lg:hidden w-full p-4 bg-sky-100 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <p className="text-2xl font-bold">Maakleans</p>
            </Link>
          </div>
          <div
            className="text-primary"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            {openSidebar ? (
              <IoCloseOutline size={30} />
            ) : (
              <FaBarsStaggered size={30} />
            )}
          </div>
        </div>
        <div
          className={`absolute min-h-screen right-0 transition-all duration-200 bg-white z-50 ${
            openSidebar ? "w-4/5" : "w-0"
          }`}
        >
          <div className="p-10">
            <ul className="flex flex-col justify-center items-start gap-8">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Service</Link>
              </li>
              <li>
                <Link href="/">Find Location</Link>
              </li>
              <li>
                <Link href="/">My Account</Link>
              </li>
            </ul>
            <div className="mt-8">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

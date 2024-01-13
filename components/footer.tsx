import Link from "next/link";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-4 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h3 className="text-xl text-primary mb-4">Maakleans</h3>
          <p className="max-w-sm text-sm leading-6">
            A tradition of unsurpassed customer service and unwavering
            commitment to high quality dry cleaning and laundry service for over
            20 years
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  Dry Cleaning
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  laundry
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  VIP Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick links</h4>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  Dry Cleaning
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  laundry
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  VIP Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  Dry Cleaning
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  laundry
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  VIP Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-sm font-normal">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-12" />
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mt-8">
        <p className="text-sm text-gray-500">
          © Maakleans Limited 2024. All rights reserved.
        </p>
        <div className="flex justify-end items-center gap-x-4">
          <div className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 hover:text-primary cursor-pointer bg-rose">
            <FaFacebook size={16} />
          </div>
          <div className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 hover:text-primary cursor-pointer bg-rose">
            <BsInstagram size={16} />
          </div>
          <div className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 hover:text-primary cursor-pointer bg-rose">
            <BsTwitter size={16} />
          </div>
          <div className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-slate-200 text-slate-500 hover:text-primary cursor-pointer bg-rose">
            <BsLinkedin size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { PiShirtFolded } from "react-icons/pi";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineIron } from "react-icons/md";
import { RiShirtLine, RiTShirtAirLine } from "react-icons/ri";
import { GiSewingMachine } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { BsPinMapFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-sky-100 p-12 pb-24">
        <div className="flex flex-col justify-center items-center bg-white p-16 pt-10 rounded-xl shadow-2xl">
          <h2 className="text-3xl p-8 font-bold">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-20">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-sky-100 rounded-full group hover:bg-tertiary cursor-pointer">
                <PiShirtFolded
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">
                Dry Cleaning
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-sky-100 rounded-full group hover:bg-tertiary cursor-pointer">
                <RiTShirtAirLine
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">
                Wet Cleaning
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-sky-100 rounded-full group hover:bg-tertiary cursor-pointer">
                <GiWashingMachine
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">Laundry</h5>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-sky-100 rounded-full group hover:bg-tertiary cursor-pointer">
                <MdOutlineIron
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">
                Iron Clothes
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-sky-100 rounded-full group hover:bg-tertiary cursor-pointer">
                <RiShirtLine
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">
                Wash &amp; Fold
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-sky-100 rounded-full group hover:bg-tertiary cursor-pointer">
                <GiSewingMachine
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">
                Cloth Sewing
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-sky-100 rounded-full group hover:bg-tertiary cursor-pointer">
                <IoLocationOutline
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">Free Pickup</h5>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 bg-sky-100 rounded-full group hover:bg-tertiary cursor-pointer">
                <BsPinMapFill
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">
                Free Delivery
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-20 gap-20">
            <img src="/images/launder.jpg" alt="services" className="lg:w-[500px] lg:h-[500px] w-40 h-40 rounded-full object-cover" />
          <div className="flex flex-col items-start justify-center max-w-96">
            <h2 className="text-4xl font-extrabold mb-2">
              Laundry is Easier with Dependable Cleaners
            </h2>
            <p className="flex justify-start items-center gap-3">
              <FaCheck className="text-primary" /> <span>Free Pickup Delivery</span>
            </p>
            <p className="flex justify-start items-center gap-3">
              <FaCheck className="text-primary" /> <span>Mobile App</span>
            </p>
            <p className="flex justify-start items-center gap-3">
              <FaCheck className="text-primary" /> <span>VIP Express Services</span>
            </p>
            <p className="flex justify-start items-center gap-3">
              <FaCheck className="text-primary" /> <span>One Day Dry Cleaning</span>
            </p>
            <p className="flex justify-start items-center gap-3">
              <FaCheck className="text-primary" /> <span>24-Hour Kiosks</span>
            </p>

            <button className="mt-5">Make your Free Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

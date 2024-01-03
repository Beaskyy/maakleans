import { PiShirtFolded } from "react-icons/pi";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineIron } from "react-icons/md";
import { RiShirtLine, RiTShirtAirLine } from "react-icons/ri";
import { GiSewingMachine } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { BsPinMapFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="relative bg-white">
      <div className="absolute w-3/4 m-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center bg-white w-full rounded-lg shadow-2xl p-12">
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
      <div className="w-full absolute top-72">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-20">
          <div>left</div>
          <div className="max-w-96">
            <h2 className="text-4xl font-extrabold mb-2">
              Laundry is Easier with Dependable Cleaners
            </h2>
            <p className="flex justify-start items-center gap-3">
              <FaCheck /> <span>Lorem, ipsum dolor.</span>
            </p>
            <p className="flex justify-start items-center gap-3">
              <FaCheck /> <span>Lorem, ipsum dolor.</span>
            </p>
            <p className="flex justify-start items-center gap-3">
              <FaCheck /> <span>Lorem, ipsum dolor.</span>
            </p>
            <p className="flex justify-start items-center gap-3">
              <FaCheck /> <span>Lorem, ipsum dolor.</span>
            </p>
            <p className="flex justify-start items-center gap-3">
              <FaCheck /> <span>Lorem, ipsum dolor.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

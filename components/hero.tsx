import Image from "next/image";
import { PiShirtFolded } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="bg-sky-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-20">
        <div className="mt-20">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4">
            Lagos <br /> First Choice in Dry Cleaning
          </h1>
          <p className="max-w-md font-normal">
            A tradition of unsurpassed customer service and unwavering
            commitment to high quality dry cleaning and laundry service for over
            20 years
          </p>
          <button className="mt-8">Sign up for free pickup and delivery</button>
        </div>
        <div className="mt-20">
          <Image
            src="/images/launder.jpg"
            className="rounded-2xl"
            alt="hero-img"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="m-4 lg:m-20">
        <div className="flex flex-col justify-center items-center bg-white w-full rounded-lg shadow-2xl">
          <h2 className="text-3xl p-8 font-bold">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-36">
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
                <PiShirtFolded
                  size={30}
                  className="text-cool group-hover:text-white"
                />
              </div>
              <h5 className="text-center font-semibold text-lg">
                Dry Cleaning
              </h5>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

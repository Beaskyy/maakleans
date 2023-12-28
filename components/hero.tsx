import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-20">
      <div className="mt-20">
        <h1 className="text-7xl font-bold mb-4">Lagos <br /> First Choice in Dry Cleaning</h1>
        <p className="max-w-md font-normal">A tradition of unsurpassed customer service and unwavering commitment to high quality dry cleaning and laundry service for over 20 years</p>
        <button className="mt-8">Sign up for free pickup and delivery</button>
      </div>
      <div className="mt-20">
        <Image src="/images/launder.jpg" className="rounded-2xl" alt="hero-img" width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;

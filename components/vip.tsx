import Image from "next/image";
import React from "react";

const Vip = () => {
  return (
    <div className="flex justify-center items-center pt-72 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        <div>
          <Image src="/images/vip.jpg" alt="vip" width={350} height={430} className="rounded-lg" />
        </div>
        <div className="max-w-md my-5">
          <h1 className="text-4xl font-extrabold mb-5">
            Get the VIP treatment
          </h1>
          <p className="font-normal">
            VIP Express Service is a comprehensice laundry solution tailored for
            every families. Not only will never wait at our counters, this free
            service ensures quick and efficient check-out, automatic billing and
            24-hour access to our services.
            <br />
            Sign Up today.
          </p>
          <button className="mt-5 bg-transparent border border-primary text-primary hover:bg-tertiary hover:text-white hover:border-none shadow-lg">
            Become a VIP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vip;

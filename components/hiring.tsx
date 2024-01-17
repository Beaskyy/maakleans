import Image from "next/image";
import React from "react";

const Hiring = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 pb-20">
        <div>
          <Image src="/images/vip.jpg" alt="vip" width={350} height={430} className="rounded-lg" />
        </div>
        <div className="max-w-md p-4 lg:p-0">
          <h1 className="text-4xl font-extrabold mt-10 mb-5">
            We are hiring
          </h1>
          <p className="font-normal">
            VIP Express Service is a comprehensice laundry solution tailored for
            every families. Not only will never wait at our counters, this free
            service ensures quick and efficient check-out, automatic billing and
            24-hour access to our services.
            <br />
            Sign Up today.
          </p>
          <button className="mt-5 border hover:text-white hover:border-none shadow-lg">
            Become a VIP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hiring;

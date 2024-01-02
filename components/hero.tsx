import Image from "next/image";


const Hero = () => {
  return (
    <div className="bg-sky-100 pb-72">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-20">
        <div className="pt-20">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-4">
            Lagos <br /> First Choice in Dry Cleaning
          </h1>
          <p className="max-w-md font-normal">
            A tradition of unsurpassed customer service and unwavering
            commitment to high quality dry cleaning and laundry service for over
            20 years
          </p>
          <button className="mt-8">Sign up for free pickup and delivery</button>
        </div>
        <div className="pt-20">
          <Image
            src="/images/launder.jpg"
            className="rounded-2xl"
            alt="hero-img"
            width={600}
            height={600}
          />
        </div>
      </div>

      
    </div>
  );
};

export default Hero;

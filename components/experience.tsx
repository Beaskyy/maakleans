import { FaCheck } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className="relative bg-image h-[500px] w-full bg-no-repeat bg-cover bg-scroll">
      <div className="absolute bg-white top-40 lg:left-64 max-w-[1000px] p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold max-w-lg">
          EasyDry's Premier Laundry Experience
        </h2>
        <p className="max-w-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut culpa
          amet molestiae totam hic consectetur, corporis laboriosam odit, quas
          doloribus repellat earum quae nihil assumenda! Et commodi tempora
          doloremque dignissimos?
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-8">
          <div className="col-span-3">
            <div className="flex justify-between items-center mb-5">
              <p className="flex justify-start items-center gap-3">
                <FaCheck className="text-primary" />{" "}
                <span>Free Pickup Delivery</span>
              </p>
              <p className="flex justify-start items-center gap-3">
                <FaCheck className="text-primary" /> <span>Mobile App</span>
              </p>
            </div>
            <div className="flex justify-between items-center mb-5">
              <p className="flex justify-start items-center gap-3">
                <FaCheck className="text-primary" />{" "}
                <span>VIP Express Services</span>
              </p>
              <p className="flex justify-start items-center gap-3">
                <FaCheck className="text-primary" />{" "}
                <span>One Day Dry Cleaning</span>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="flex justify-start items-center gap-3">
                <FaCheck className="text-primary" />{" "}
                <span>24-Hour Kiosks</span>
              </p>
            </div>
            <button className="mt-8">Start Saving Time</button>
          </div>
          <div className="col-span-2">
            <img
              src="https://img.freepik.com/free-vector/realistic-washing-machine-composition-with-isolated-view-laundry-flying-out-machine-door-basin-vector-illustration_1284-83894.jpg?w=740&t=st=1704487867~exp=1704488467~hmac=c4ea362bb0a22a188167481b70a69b119947be604d2f9fc0cbf012283f682500"
              alt="washing machine"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

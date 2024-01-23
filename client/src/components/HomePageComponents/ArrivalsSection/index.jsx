import React from "react";

const ArrivalsSection = () => {
  return (
    <section className=" section py-24">
      <div>
        <h2 className=" text-5xl font-bold pb-16">New Arrivals</h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
        <div className=" text-center">
          <div className=" overflow-hidden">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
              className=" hover:scale-105  cursor-pointer  duration-300  w-full"
              alt=""
            />
          </div>
          <div className=" py-5 space-y-3">
            <h3 className=" cursor-pointer  text-gray-600  font-semibold text-2xl ">
              Thermo Ball Etip Gloves
            </h3>

            <p className=" text-red-600  text-lg font-medium">$ 45,743</p>
          </div>
        </div>

        <div className=" text-center">
          <div className=" overflow-hidden">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
              className="hover:scale-105  cursor-pointer  duration-300  w-full"
              alt=""
            />
          </div>
          <div className=" py-5 space-y-3">
            <h3 className=" cursor-pointer  text-gray-600  font-semibold text-2xl ">
              Thermo Ball Etip Gloves
            </h3>

            <p className=" text-red-600  text-lg font-medium">$ 45,743</p>
          </div>
        </div>

        <div className=" text-center">
          <div className=" overflow-hidden">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png"
              className="hover:scale-105  cursor-pointer  duration-300  w-full"
              alt=""
            />
          </div>
          <div className=" py-5 space-y-3">
            <h3 className=" cursor-pointer  text-gray-600  font-semibold text-2xl ">
              Thermo Ball Etip Gloves
            </h3>

            <p className=" text-red-600  text-lg font-medium">$ 45,743</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArrivalsSection;

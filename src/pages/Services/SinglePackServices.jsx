import React from "react";
import { BiSolidAlarmAdd } from "react-icons/bi";
import { singlePackServices } from "../../data/Services/singlePackServices";
import { Link } from "react-router-dom";

const SingleServiceCard = ({ id, title, description, image, path }) => {
  return (
    <div className="mt-10 rounded-lg shadow-xl w-[350px] flex flex-col items-center bg-[#FCFCFC] p-5">
      <div className="relative bg-[#D1D1D1] px-5 py-2 rounded-md h-[220px]">
        <img
          src={image}
          alt={title}
          className=" w-full rounded-lg "
        />
      </div>

      <div>
        <h3 className="text-[20px] font-bold my-2">{title}</h3>
        <p className="text-[14px] font-[400] mb-4 text-[#5e5e5e]">
          {description}
        </p>
        <Link to={`/services/${path}`}>
          <button className="w-full py-2 text-lg font-medium text-white duration-300 rounded-lg bg-btn-primary hover:bg-btn-hover">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

const SinglePackServices = () => {
  return (
    <>
      <div className="flex items-center justify-between !mt-[100px]">
        <h2 className="w-1/2 text-[35px] lg:text-[40px] text-primary-1  font-bold ">
          Single Pack Services
        </h2>
        <div className="flex flex-col items-center justify-center w-1/2 md:flex-row">
          <button className="bg-[#C71D1C] p-3 mb-3 md:mb-0 rounded-md text-white">
            10% Discount Available
          </button>
          <button className="flex items-center justify-center ml-5 bg-[#FACC3B] p-3 rounded-md">
            <BiSolidAlarmAdd size={25} className="mr-2" />
            72H 35M 10S
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-3 lg:grid-cols-2 mt-[100px]">
        {singlePackServices.map((service) => (
          <SingleServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            path={service.path}
            className="mt-4"
          />
        ))}
      </div>
    </>
  );
};

export default SinglePackServices;

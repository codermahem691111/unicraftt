import React from "react";
import { Link } from "react-router-dom";

const Card = ({ path, buttonTitle, title, details }) => {
  return (
    <div className="w-full max-w-sm col-span-1 overflow-hidden bg-white border border-gray-200 rounded-lg shadow group ">
      <div className="relative overflow-hidden">
        <div>
          <img
            className="overflow-hidden transition-all duration-700 ease-in-out bg-red-500 group-hover:scale-110"
            src="/images/home/digitalProduct/mobileApp/3.png"
            alt="product image"
          />
          <div className="absolute top-0 z-10 invisible w-full h-full ease-in-out group-hover:duration-700 group-hover:transition-colors group-hover:visible group-hover:absolute group-hover:bg-slate-900 opacity-60"></div>
        </div>
      </div>

      <div className="px-5 pb-5 space-y-5 text-white bg-slate-900">
        <div>
          <h5 className="pt-2 mb-2 text-base font-semibold tracking-tight md:text-lg lg:text-xl line-clamp-1">
            {title}
          </h5>
          <p className="text-xs line-clamp-2">{details}</p>
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={path}
            className="text-white font-semibold bg-btn-primary hover:bg-btn-hover  focus:ring-4 focus:outline-none focus:ring-primary-2  rounded-lg  px-5 py-2.5 text-center   w-full hover:scale-105 transition-all duration-700 ease-in-out"
          >
            {buttonTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

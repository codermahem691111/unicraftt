import { Link, NavLink } from "react-router-dom";
import { navData } from "../../data/navdata";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FCFCFC] shadow-lg shadow-gray-400/30">
      <div className="relative w-full  px-10 max-w-[1440px] mx-auto">
        <div className="flex h-[100px] items-center justify-between   xl:px-0 ">
          <Link to={"/"}>
            <img src="/Unicraft-IT-LTD-Logo.svg" alt="" className="w-[152px]" />
          </Link>

          <div className="lg:flex gap-[30px]  items-center text-[24px]">
            <div className="space-x-[30px] flex items-center  ">
              {navData.map((data) => (
                <NavLink
                  to={data?.path}
                  key={data?.title}
                  className={({ isActive }) =>
                    isActive ? "text-secondary-2" : ""
                  }
                >
                  {data?.title}
                </NavLink>
              ))}
              <button className="p-2 px-5 text-white rounded-lg bg-primary-2">
                <Link to={"/contact"}>Contact</Link>
              </button>
            </div>

            {/* button */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const PartnershipCard = ({
  service,
  imgClass,
  divClass,
  h5Class,
  pClass,
  btnClass,
  sectionClass,
}) => {
  const { title, description, image, btnName, link } = service;
  return (
    <section
      className={twMerge(
        " p-6 border border-neutral-1/50 rounded-[10px] shadow-xl w-[440px]",
        sectionClass
      )}
    >
      <div
        className={twMerge(
          "flex justify-center mb-6 rounded-lg h-[245px]",
          divClass
        )}
      >
        <img
          src={image}
          alt={title}
          className={twMerge("object-cover w-full rounded-lg", imgClass)}
        />
      </div>
      <h5 className={twMerge("text-2xl font-bold", h5Class)}>{title}</h5>
      <p className={twMerge("mt-3 mb-4 text-sm text-typo-1", pClass)}>
        {description}
      </p>
      <Link to={link}>
        <button
          className={twMerge(
            "w-full py-3 text-lg font-medium text-white duration-300 rounded-lg bg-btn-primary hover:bg-btn-hover",
            btnClass
          )}
        >
          {btnName}
        </button>
      </Link>
    </section>
  );
};

export default PartnershipCard;

import React from "react";

const SectionTitle = ({ title, subTitle, textCenter }) => {
  return (
    <div className={` ${textCenter ? "text-center" : ""}`}>
      <div
        className={`flex items-center w-full ${
          textCenter ? "justify-center" : ""
        }`}
      >
        <h2 className="text-primary-1 text-[56px] font-bold ">{title}</h2>
        {!textCenter && (
          <hr className="flex-grow text-secondary-1 h-[2px]  ml-4" />
        )}
      </div>

      <p className="mt-[46px] text-[28px] text-typo-1">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;

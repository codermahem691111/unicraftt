import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import video from "../../assets/Services/Video Details/Group 163240.png";
import { FaCircle } from "react-icons/fa6";

import adobeAe from "../../assets/Services/Video Details/adobeAe.png";
import davinci from "../../assets/Services/Video Details/icons8-davinci-resolve-144 1.png";
import avid from "../../assets/Services/Video Details/Avid-MC-logo_2020-10-28-032549 1.png";
import adobePro from "../../assets/Services/Video Details/icons8-adobe-premiere-pro-144 1.png";

import {
  videoEditingCategory,
  videoEditingPortfolio,
} from "../../data/Services/videoDetails";

const VideoDetailsPage = () => {
  return (
    <section className="container">
      <Link to="/services">
        <div className="text-[#5E5E5E] font-[400] text-[16px] my-10 flex items-center cursor-pointer">
          <IoIosArrowRoundBack
            size={30}
            className="m-2 border border-[##49617E] rounded-[5px] "
          />
          Back
        </div>
      </Link>
      <div className="w-full my-[10px] lg:my-[60px] h-[300px] md:h-[500px]">
        <img src={video} alt="dataEntry" />
      </div>
      <h3 className="mt-0 md:mt-10 mb-5 text-[40px] font-bold">
        Video Editing
      </h3>
      <p className="text-[16px] md:text-[28px] text-[#0A090B] text-justify">
        Video editing is the process of manipulating and arranging video
        footage, audio clips, and visual effects to create a coherent and
        engaging video narrative. It involves various technical and creative
        aspects to produce a final video that aligns with the intended message
        or story.Selecting the best video clips and arranging them in a sequence
        that aligns with the storyline or purpose of the video.Adjusting audio
        levels, adding background music, incorporating sound effects, and
        synchronizing audio with video footage to create a seamless audio-visual
        experience.Enhancing the visual quality of the video by adjusting
        colors, contrast, brightness, and saturation.
      </p>
      <Link to="/thanks">
        <button className="px-12 py-2 my-10 text-sm font-medium text-white duration-300 rounded-md md:text-lg bg-btn-primary hover:bg-btn-hover">
          Get Service
        </button>
      </Link>
      <h3 className="mt-10 mb-5 text-[40px] font-bold">
        Video Editing Category
      </h3>
      <div className="mb-10">
        {videoEditingCategory.map((item, index) => (
          <div key={index} className="flex items-center my-8">
            <FaCircle color="#5D5D5D" />
            <p className="text-[#0A090B] font-[400] text-[20px] md:text-[32px] ml-5 leading-6">
              {item}
            </p>
          </div>
        ))}
      </div>
      <h3 className="mt-[100px] mb-10 text-[40px] font-bold">
        Video Editing Tools
      </h3>
      <div className="flex items-center w-full">
        <div className="flex items-center justify-center p-2 mx-3 shadow md:p-4 ">
          <img src={adobePro} alt="adobePro" className="w-[75px] h-[75px]" />
        </div>
        <div className="flex items-center justify-center p-4 mx-3 shadow md:p-6 ">
          <img src={adobeAe} alt="adobe" className="w-[55px] h-[55px]" />
        </div>
        <div className="flex items-center justify-center p-2 mx-3 shadow md:p-4 ">
          <img src={avid} alt="avid" className="w-[75px] h-[75px]" />
        </div>
        <div className="flex items-center justify-center p-2 mx-3 shadow md:p-4">
          <img src={davinci} alt="davinci" className="w-[75px] h-[75px]" />
        </div>
      </div>

      <h3 className="mt-[100px] mb-10 text-[30px] md:text-[40px] font-bold">
        Video Editing Portfolio
      </h3>
      <div className="">
        {videoEditingPortfolio.map((item) => (
          <div
            key={item.id}
            className="flex my-4 text-[16px] md:text-[35px] font-[500]"
          >
            <p className="mr-3">{item.title}</p>
            <Link
              to={item.link}
              className="text-[#00A9CE] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoDetailsPage;

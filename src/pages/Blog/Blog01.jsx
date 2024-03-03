import React from "react";
import BlogImg01 from "../../assets/Blogs/blog01.png";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const Blog01 = () => {
  return (
    <>
      <section className="px-10">
        <Link to='/blogs' className=" flex flex-row mb-4">
        <BsArrowLeft size={35} className="border-[1px] border-gray-300 rounded-[10px] p-2"/><span className="pt-2 pl-2 text-md text-gray-500">Back</span>
        </Link>
        <div className=" text-[56px] leading-[70px] font-[700] font-Groteskt">
          What is Artificial Intelligence ?
        </div>
        <div className="flex flex-col justify-between items-center gap-10 md:flex-row">
   
          <img
            className="object-cover"
            src={BlogImg01}
            alt="Sunset in the mountains"
          />
          <p className="text-[24px] font-[400] leading-[40px] text-justify font-Groteskt">
            Artificial intelligence or "artificial intelligence" is one version
            of computer system. An integral part of current technology is
            artificial intelligence.We have been using computers for a long time
            and have been doing important work with its help, but the question
            is whether the computer can do any work by itself, the answer is
            no!! A computer can process data at a thousand times faster than the
            human brain, but it cannot do any work by itself. Output is enabled
            when input or command is received by us.So scientists are constantly
            trying to make computers work like our brains. For this, scientists
            have designed such programs or software, which in many cases can
            work on their own or take decisions like us. In one word, it is
            called artificial intelligence or artificial intelligence.
          </p>
        </div>
        <div className=" text-[48px] leading-[60px] font-[700] font-Groteskt pt-10">
          Most used AI tools 2024
        </div>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt py-3">
          How We Use Your Information
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          We use your personal information to provide and improve our services,
          communicate with you, and send you important updates.We may use
          aggregated and anonymized data for statistical analysis and to enhance
          the performance and functionality of our services.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt py-3">
          Information Sharing
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt py-3">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as described in this
          Privacy Policy.We may share your information with trusted third-party
          service providers who assist us in delivering our services.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk  py-3">
          Observe AI
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          This platform helps businesses analyze calls, generate speech. The
          platform is capable of commands in both English and Spanish.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt  py-3">
          Infosys Nia
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          This platform simplifies machine learning tasks, deep learning, data
          management, etc.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt  py-3">
          Jupiter Notebook
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          This is a very powerful medium. This platform is very helpful for
          writing and running computer code. The term Jupitar refers to the
          three programming languages ​​Julia, Python and R.
        </p>

        <textarea
          className="resize-none w-full  h-[100px] rounded-md border-gray-1 border-[1px] px-4 py-2 md:w-[50%]"
          placeholder="Leave a comment....."
        ></textarea>
        <div className=" text-left pt-4">
          <button class=" bg-btn-primary hover:bg-btn-hover  py-2 px-10 rounded-[10px] text-[16px] text-[#FFF] font-[500] leading-normal font-Groteskt">
            Comment
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog01;

import React from "react";
import { Link } from "react-router-dom";
import BlogImg02 from "../../assets/Blogs/blog02.png";
import { BsArrowLeft } from "react-icons/bs";
const Blog02 = () => {
  return (
    <>
      <section className="px-10">
        <Link to="/blogs" className=" flex flex-row mb-4">
          <BsArrowLeft
            size={35}
            className="border-[1px] border-gray-300 rounded-[10px] p-2"
          />
          <span className="pt-2 pl-2 text-md text-gray-500">Back</span>
        </Link>
        <div className=" text-[56px] leading-[70px] font-[700] font-Groteskt">
          What is Robotics ?
        </div>
        <div className="flex flex-col justify-between items-center gap-8 md:flex-row">
          <img
            class=" object-cover"
            src={BlogImg02}
            alt="Sunset in the mountains"
          />
          <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt">
            In this digital age, where technological advancements are reshaping
            industries and transforming the way we live and work, the robotic
            revolution has emerged as a significant force. From automated
            manufacturing processes to humanoid robots that can perform complex
            tasks with precision, robotics is revolutionizing various sectors.
            <br />
            <br />
            With the rapid development of artificial intelligence (AI), robots
            are becoming increasingly intelligent and capable of performing
            tasks that were once exclusive to humans. This has led to a paradigm
            shift in how we perceive automation and its impact on society.
            <br />
            <br />
            In this blog series, we will delve into the fascinating world of
            robotics and explore its potential implications for different
            industries. We will discuss the latest advancements in AI-powered
            robots and examine how they are reshaping sectors such as
            healthcare, manufacturing, logistics, and more. Additionally, we
            will explore the concept of human-robot collaboration and how it can
            lead to increased productivity and efficiency.
          </p>
        </div>
        <div className=" text-[48px] leading-[60px] font-[700] font-Groteskt pt-10">
          Top 6 things about robotics in the world 2024
        </div>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt py-3">
          The Rise of Robotics
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          Explore the historical roots of robotics and how it has evolved from
          simple automatons to sophisticated machines, playing pivotal roles in
          diverse industries.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt py-3">
          Applications Across Industries
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt py-3">
          Discover how robotics is transforming sectors like manufacturing,
          healthcare, agriculture, and more. Explore the tangible benefits and
          efficiencies these robotic applications bring to various fields.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk  py-3">
          Ethical Considerations
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          Delve into the ethical dilemmas surrounding robotics, including issues
          of job displacement, privacy concerns, and the impact of autonomous
          systems on society. Explore the ongoing debates and proposed
          solutions.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt  py-3">
          Human-Robot Collaboration
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          Uncover the exciting realm of human-robot collaboration, where
          machines and humans work hand in hand to achieve unprecedented levels
          of productivity and efficiency.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt  py-3">
          Challenges and Solutions
        </h3>
        <p className=" text-[24px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          Examine the challenges facing the robotics industry, from technical
          hurdles to societal acceptance. Discover how researchers and engineers
          are addressing these challenges to ensure a responsible and beneficial
          integration of robotics into our lives.
          <br />
          <br />
          Whether you're an industry professional or simply curious about
          emerging technologies, this blog aims to provide valuable insights
          into the robotic revolution that is shaping our world today and
          tomorrow. So buckle up and get ready for an exciting journey into the
          future of robotics!
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

export default Blog02;

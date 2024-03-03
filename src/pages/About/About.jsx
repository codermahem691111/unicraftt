import React from "react";
import AboutImg from "../../assets/Footer/about.png";
const About = () => {
  return (
    <>
      <section className="px-10">
        <div className="flex justify-center pb-20">
        <img
            className=" bg-cover"
            src={AboutImg}
            alt="About Logo"
          />
        </div>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Groteskt py-3">
          Company Bio
        </h3>
        <p className=" text-[32px] font-[500] leading-[50px] text-justify font-Groteskt  py-3">
          We develop solutions from innovative ideas that will change people's
          future lives.We develop digital products from innovative ideas and
          provide 9 digital services to the clients of all over the world.
        </p>
        <h3 className="text-[32px] font-[700] leading-[40px] font-Grotesk  py-3">
          About Us
        </h3>
        <p className=" text-[28px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          We are a full-service digital solutions provider that helps businesses
          achieve their online goals. We offer a wide range of services
          including software development, website development, app development,
          UI/UX design, graphic design, digital marketing, video editing, data
          entry and content writing.
        </p>
        <p className=" text-[28px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          We believe in the power of technology to transform businesses and we
          are passionate about helping our clients succeed. We are a team of
          experienced professionals who are dedicated to providing our clients
          with the highest quality services and support
        </p>
        <p className=" text-[28px] font-[400] leading-[40px] text-justify font-Groteskt  py-3">
          We believe that our services and products can make a real difference
          in the lives of our clients. We are proud to be a part of their
          success stories
        </p>
      </section>
    </>
  );
};

export default About;

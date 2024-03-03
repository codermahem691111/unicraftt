import React from "react";
import TestimonialsImg from "../../assets/Footer/testimonial.png";
const data = [
  {
    name: "Sariot Hossain",
    position: "Software Engineer",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    content:
      "Review Description is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: "Monir Hossain",
    position: "Software Engineer",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    content:
      "Review Description is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: "Sakawat Hossain",
    position: "Software Engineer",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    content:
      "Review Description is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="px-10">
      <div className="flex justify-center pb-20">
        <img
            className=" bg-cover"
            src={TestimonialsImg}
            alt="Testimonials Logo"
          />
        </div>
        <div className=" text-right">
        <button class=" bg-btn-primary hover:bg-btn-hover  py-2 px-10 rounded-[10px] text-[16px] text-[#FFF] font-[500] leading-normal font-Groteskt">
        Add Review
        </button>
        </div>
        <div className=" flex flex-col ">
          {data.map((item, index) => (
            <div
              key={index}
              className="row  flex flex-col gap-10 p-14  mt-10 rounded-[10px] bg-neutral-3 text-center shadow-2xl md:flex-row md:text-left items-center "
            >
              <img
                className="h-[194px] w-[194px] rounded-full object-cover"
                src={item.img}
              ></img>{" "}
              <div className="flex flex-col ml-5">
                <h3 className="text-[34px] text-[#000] font-[700] leading-[80px] font-Groteskt ">
                  {item.name}
                </h3>

                <div className=" text-[20px] text-[#000] font-[700]  leading-[24px] font-Groteskt ">
                  {item.position}
                </div>
                <p className="text-[20px] text-[#000] font-[400]  leading-[24px] font-Groteskt pt-5 text-justify ">
                  {"“"}
                  {item.content} {"”"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Testimonials;

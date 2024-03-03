import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  digitalProductMobileAppImages,
  digitalProductWebsitesImages,
} from "../../../data/Home/digitalProudctData";

const DigitalProduct = () => {
  return (
    <section className="mt-[171px] lg:container">
      <SectionTitle
        title="Our Digital Products "

        subTitle={
          "Digital products offer high accessibility and convenience. Users can access them instantly from various devices such as computers, mobile, and tablets.They are often available 24/7, allowing users to consume or interact with them at their convenience."
        }
      />

      <div className="mt-20">
        <div className="flex items-center md:gap-[91px] gap-10">
          <div className="flex items-center justify-center h-[386px] w-[120px] rounded bg-secondary-3 ">
            <h3 className="text-[50px] font-bold text-white -rotate-90">
              Websites
            </h3>
          </div>
          <div className="max-w-[1000px] sm:max-w-[600px] lg:max-w-[980px] ">
            <Swiper
              slidesPerView={2.5}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
              }}
            >
              {digitalProductWebsitesImages.map((image, i) => (
                <SwiperSlide key={i}>
                  <div className=" flex items-center rounded-lg w-[386px] h-[386px] mb-4 shadow-xl shadow-gray-400/60">
                    <img
                      className="mx-auto object-cover "
                      src={image}
                      alt="website image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex items-center md:gap-[91px] gap-10 mt-[48px]">
          <div className="flex items-center justify-center h-[386px] w-[120px] rounded bg-secondary-3 ">
            <h3 className="text-[50px] font-bold text-white -rotate-90 whitespace-nowrap">
              Mobile App
            </h3>
          </div>
          <div className="max-w-[1000px] sm:max-w-[600px] lg:max-w-[980px] ">
            <Swiper
              slidesPerView={2.5}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                  },
                },
              }}
            >
              {digitalProductMobileAppImages.map((image, i) => (
                <SwiperSlide key={i}>
                  <div className="flex items-center rounded-lg w-[386px] h-[386px] mb-4 shadow-xl shadow-gray-400/60">
                    <img
                      className="mx-auto object-cover w-full"
                      src={image}
                      alt="website image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProduct;

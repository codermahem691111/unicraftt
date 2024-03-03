import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      comment:
        "Exceptional service,highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!!",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Alice Johnson",
      client_designation: "CEO",
    },
    {
      id: 2,
      rating: 4,
      comment:
        "Exceptional service,highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!!",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Bob Smith",
      client_designation: "Marketing Manager",
    },
    {
      id: 3,
      rating: 3,
      comment:
        "Exceptional service,highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!!",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Charlie Brown",
      client_designation: "Operations Coordinator",
    },
    {
      id: 4,
      rating: 5,
      comment:
        "Exceptional service,highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!!",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Diana Miller",
      client_designation: "IT Director",
    },
    {
      id: 5,
      rating: 2,
      comment:
        "Exceptional service,highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!!",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Edward Davis",
      client_designation: "Finance Analyst",
    },
    {
      id: 6,
      rating: 4,
      comment:
        "Exceptional service,highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!!",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Fiona White",
      client_designation: "HR Manager",
    },
    {
      id: 7,
      rating: 3,
      comment:
        "Exceptional service,highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!Exceptional service, highly recommended!!",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "George Wilson",
      client_designation: "Customer Support Specialist",
    },
    {
      id: 8,
      rating: 5,
      comment: "Outstanding products, exceeded expectations.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Helen Taylor",
      client_designation: "Product Manager",
    },
    {
      id: 9,
      rating: 4,
      comment: "Great value for money, will buy again.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Ian Turner",
      client_designation: "Sales Representative",
    },
    {
      id: 10,
      rating: 2,
      comment: "Unpleasant experience, late delivery and damaged item.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Jessica Clark",
      client_designation: "Logistics Coordinator",
    },
    {
      id: 11,
      rating: 5,
      comment: "Top-notch quality, swift shipping.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Kevin Brown",
      client_designation: "CTO",
    },
    {
      id: 12,
      rating: 3,
      comment: "Decent service, but some issues with communication.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Linda Green",
      client_designation: "Communication Specialist",
    },
    {
      id: 13,
      rating: 4,
      comment: "Impressed with the variety of products.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Mark Turner",
      client_designation: "Product Analyst",
    },
    {
      id: 14,
      rating: 5,
      comment: "Superb customer service, prompt resolution.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Nancy White",
      client_designation: "Customer Experience Manager",
    },
    {
      id: 15,
      rating: 2,
      comment: "Product didn't meet expectations, not satisfied.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Oliver Smith",
      client_designation: "Quality Assurance Specialist",
    },
    {
      id: 16,
      rating: 4,
      comment: "Efficient delivery and excellent product quality.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Pamela Davis",
      client_designation: "Supply Chain Manager",
    },
    {
      id: 17,
      rating: 3,
      comment: "Fair experience, could be more user-friendly.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Quincy Turner",
      client_designation: "UX/UI Designer",
    },
    {
      id: 18,
      rating: 5,
      comment: "Incredible products, worth every penny!",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Rachel Miller",
      client_designation: "Creative Director",
    },
    {
      id: 19,
      rating: 4,
      comment: "Timely delivery, good communication from the seller.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Steve Turner",
      client_designation: "Customer Relations Manager",
    },
    {
      id: 20,
      rating: 3,
      comment: "Average service, needs improvement in packaging.",
      client_image: "https://i.ibb.co/x33gpND/brandonpatrickgeorge-sq.jpg",
      client_name: "Tina Davis",
      client_designation: "Packaging Specialist",
    },
  ];

  console.log(reviews);

  return (
    <div className="mt-[183px] bg-gradient-to-r from-[#0061A8] to-[#2D96FF] pb-[100px] relative">
      <div className="absolute top-0 left-0 right-0 w-full h-full bg-[url('/images/home/utils/bg-layer.png')] bg-contain"></div>
      <h2 className="text-center text-[#FFF] text-[64px] font-bold pb-[111px] pt-[163px]">
        What Our Clients Say <br />
        About Us{" "}
      </h2>
      <Swiper slidesPerView={3} spaceBetween={30}>
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="bg-white p-[24px] rounded-2xl">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div>
                    <img
                      className="h-[48px] w-[48px] rounded-full"
                      src={review.client_image}
                      alt=""
                    />
                  </div>
                  <div className="ms-[8px] text-left">
                    <p className="text-[16px] font-extrabold">
                      {review.client_name}
                    </p>
                    <p className="text-[14px] font-light text-[#7C7C7C]">
                      {review.client_designation}
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    <FaQuoteRight className="h-[32px] w-[32px]"></FaQuoteRight>
                  </p>
                </div>
              </div>
              <div className="mt-[16px]">
                <p className="text-[16px] text-[#7C7C7C] font-semibold">
                  {review.comment}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default ClientReview;

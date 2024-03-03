import React from "react";
import { Link } from "react-router-dom";
import BlogImg from "../../assets/Footer/blogs.png";
import BlogImg01 from "../../assets/Blogs/blog01.png";
import BlogImg02 from "../../assets/Blogs/blog02.png";
import BlogImg03 from "../../assets/Blogs/blog03.png";
const Blogs = () => {

  // const data = [
  //   {
  //     name:"Sariot Hossain",
  //     position:"Sariot Hossain",
  //     date:"Sariot Hossain",
  //     photo:"Sariot Hossain",
  //   }
  // ]
  return (
    <>
      <section className="px-10">
        <div className="flex justify-center pb-20">
          <img className=" bg-cover object-fill" src={BlogImg} alt="Blog Logo" />
        </div>
        <div className=" grid grid-cols-1 justify-center items-center gap-10 lg:grid-cols-3 md:grid-cols-2">
          <div className=" max-w-sm rounded-[10px] overflow-hidden shadow-2xl">
            <Link to="/blogs/blog01">
              <img
                className="w-full h-[256px] bg-cover object-cover"
                src={BlogImg01}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  What is Artificial Intelligence and Use of AI tools 2024
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span>2 February 2024</span>
              </div>
            </Link>
          </div>
          <div className=" rounded-[10px] overflow-hidden shadow-2xl">
            <Link to="/blogs/blog02">
              <img
                className="w-full h-[256px] bg-cover object-cover"
                src={BlogImg02}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  What is Artificial Intelligence and Use of AI tools 2024
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span>2 February 2024</span>
              </div>
            </Link>
          </div>
          <div className="max-w-sm  rounded-[10px] overflow-hidden shadow-2xl">
            <Link to="/blogs/blog03">
              <img
                  className="w-full h-[256px] bg-cover object-cover"
                src={BlogImg03}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  What is Artificial Intelligence and Use of AI tools 2024
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span>2 February 2024</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

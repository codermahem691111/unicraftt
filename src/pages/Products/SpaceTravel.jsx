import webPic1 from "/images/home/digitalProduct/websites/1.png";

const SpaceTravel = () => {
    const features = [
        'Destination Guides',
        'Astronomical Data and Resources',
        'Space Mission Coverage',
        'Space Exploration News',
        'Space Merchandise Store',
      ];
    const languages = [
        'HTML',
        'Tailwind CSS',
        'React.js',
        'Node.js',
        'Mongo DB',
      ];
    return (
        <section className="container  ">
            {/* banner section  */}
            <section className="lg:flex justify-between w-full">
                {/* section text  */}
                <div className="space-y-7 lg:w-[610px]">
                    <h1 className="text-5xl font-bold	">Space Travel Website</h1>
                    <p className="font-normal 	text-base leading-10	">
                        Welcome to our space travel website, where we invite you to embark on an extraordinary journey beyond our planet and into the vast expanse of the cosmos.
                    </p>
                    <p className="font-normal 	text-base leading-10 	">
                        Whether you're a seasoned astronaut or an aspiring
                        stargazer, our website is your ultimate resource for
                        all things space travel. Here, you'll find a wealth of
                        information, inspiration, and practical tips to fuel
                        your passion for the stars.
                    </p>
                </div>
                {/* section image  */}
                <div>
                    <img className="w-[505px]" src={webPic1} alt="" />
                </div>
            </section>

            {/* features */}
          

<section className="">
  <h2 className="text-[32px] font-bold">Features</h2>
  <div className="flex flex-wrap  ">
    {features.map((feature, index) => (
      <div key={index} className="flex justify-center items-center mr-5 my-4">
        <div className="border-2 rounded-[10px] ">
          <h3 className=" px-[19px] py-[10px]  ">{feature}</h3>
        </div>
      </div>
    ))}
  </div>
</section>
            {/* language used */}
          
            <section className="">
  <h2 className="text-[32px] font-bold ">Language Used </h2>
  <div className="flex flex-wrap  ">
    {languages.map((language, index) => (
      <div key={index} className="flex justify-center items-center mr-5 my-4">
        <div className="border-2 rounded-[10px] ">
          <h3 className=" px-[19px] py-[10px]  ">{language}</h3>
        </div>
      </div>
    ))}
  </div>
</section>

            
        </section>
    );
};

export default SpaceTravel;
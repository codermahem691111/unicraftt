import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  ourTechnologyData,
  tabListData,
} from "../../../data/Home/ourTechnologyData";

const OurTechnology = () => {
  return (
    <section className="mt-[171px] lg:container">
      <SectionTitle
        title="Our Technology"
        subTitle="We are highly knowledgeable and experienced in recent technologies. We have comprehensive understanding of various technological domains, trends, and innovations."
        textCenter
      />

      <div className="mt-[82px]">
        <Tabs>
          <div className="flex justify-center border rounded shadow-xl shadow-gray-400/60 border-black/25 ">
            <div>
              <TabList className="flex items-center flex-wrap justify-center w-full gap-5 duration-500 tabs text-neutral-1 py-7">
                {tabListData.map((tab, i) => (
                  <Tab
                    key={i}
                    className=" text-lg lg:text-xl font-medium border rounded-lg outline-none cursor-pointer border-primary-2 w-[140px] lg:w-[160px] lg:h-[60px] h-[50px] flex justify-center items-center"
                    selectedClassName="text-white bg-primary-2 duration-300"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>

          <div className="border border-black/25 rounded p-10 mt-14  shadow-xl shadow-gray-400/60">
            {tabListData.map((tab, i) => (
              <TabPanel key={i}>
                <div className="flex flex-wrap justify-center gap-4">
                  {ourTechnologyData[tab] ? (
                    ourTechnologyData[tab].map((technology, techIndex) => (
                      <div
                        className="flex flex-col items-center justify-center p-5 rounded-lg border border-[#0093FF]/50 h-[164px] w-[200px] "
                        key={techIndex}
                      >
                        <img
                          className="h-14"
                          src={technology.image}
                          alt={technology.title}
                        />
                        <h6 className="mt-5 text-2xl font-bold text-center">
                          {technology.title}
                        </h6>
                      </div>
                    ))
                  ) : (
                    <p>No data available for {tab}</p>
                  )}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default OurTechnology;

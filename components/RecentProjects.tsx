/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import ClientPinComponent from "./ClientPinComponent";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Some of my
        <span className="text-orange-400"> recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <ClientPinComponent title={link} href={link}>
              <div className="relative flex items-center justify-center overflow-hidden sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="./bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="border border-white/0.2 lg:w-10 lg:h-10 w-8 h-8 justify-center items-center"
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-orange-400">
                    View live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#fb923c" />
                </div>
              </div>
            </ClientPinComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

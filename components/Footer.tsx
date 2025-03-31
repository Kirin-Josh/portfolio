import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-orange-400"> your</span> projects
          to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a href="mailto:kemougnegapingjoshua@gmail.com">
          <MagicButton
            tittle="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex items-center justify-center gap-4">
        {socialMedia.map((icon) => (
          <div
            key={icon.id}
            className="w-10 h-10 mt-10 cursor-pointer flex justify-center items-center backdrop-filter border border-black-300 rounded-lg backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200"
          >
            <Image src={icon.img} alt={icon.img} width={20} height={20} />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

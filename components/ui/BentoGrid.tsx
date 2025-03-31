"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradienbg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { FaCopy } from "react-icons/fa6";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[12rem] grid-cols-1 md:grid-cols-6 lg:grid-cols-5  md:grid-row-7 lg:gap-8 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  spareImg,
  id,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  }) => {
  
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('kemougnegapingjoshua@gmail.com');

    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(232,110,34,1) 35%, rgba(0,212,255,1) 100%)'
      }}
    >

      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="absolute w-full h-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            /> 
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover, object-center w-full h-full`}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, 'relative group-hover/bento:translate-x-2 transition duration-300 min-h-40 md:h-full flex flex-col px-5 p-5 lg:p-10')}>
        <div className="font-sans font-extralight text-[#c1c2c3] lg:text-base z-10 text-sm md:text-xs">
          {description}
        </div>
        <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className='flex flex-col gap-3 lg:gap-4'>
              {['Next.js', 'React.js', 'TypeScript'].map((item) => (
                <span key={item} className='bg-[#10132E] py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-md'>
                  {item}
                </span>
              ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e"/>
            </div>
              <div className='flex flex-col gap-3 lg:gap-4'>
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e"/>
              {['Flutter', 'React-Native'].map((item) => (
                <span key={item} className='bg-[#10132E] py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-md'>
                  {item}
                </span>
              ))}
            </div>
          </div>
          )}
          {id === 6 && (
             <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} />
              </div>
              <MagicButton 
                tittle={copied ? 'Email copied' : 'Copy my email'}
                icon={<FaCopy />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
      </div>
    </div>
    </div>
  );
};

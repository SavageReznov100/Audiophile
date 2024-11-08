import React from "react";
import ImgDesktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import ImgTablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import ImgMobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import { UseScreenDetector } from "../UseScreenDetector";

const Add2 = () => {
  const { isMobile, isTablet, isDesktop } = UseScreenDetector();
  return (
    <div className="container pt-5">
      <div className="relative w-full">
        <div>
          {isDesktop && (
            <img
              src={ImgDesktop}
              alt="Background Image"
              className="h-full w-full rounded-lg object-cover object-center"
            />
          )}
          {isTablet && (
            <img
              src={ImgTablet}
              alt="Background Image"
              className="h-full w-full rounded-lg object-cover object-center"
            />
          )}
          {isMobile && (
            <img
              src={ImgMobile}
              alt="Background Image"
              className="h-full w-full rounded-lg object-cover object-center"
            />
          )}
        </div>

        <div className="absolute left-8 top-1/3 flex flex-col gap-8 md:left-16 lg:left-32">
          <h1 className="font-manrope text-[28px] font-bold uppercase tracking-widest text-black">
            zx7 speaker
          </h1>
          <button className="border border-black px-7 py-4 font-manrope font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white">
            see product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add2;

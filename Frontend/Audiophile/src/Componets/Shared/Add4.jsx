import React from "react";
import { UseScreenDetector } from "../UseScreenDetector";
import ImgDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import ImgTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import ImgMobile from "../../assets/shared/mobile/image-best-gear.jpg";

const Add4 = () => {
  const { isMobile, isDesktop, isTablet } = UseScreenDetector();
  return (
    <div className="container pb-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-last flex flex-col justify-center gap-8 lg:order-first">
          <p className="text-center font-manrope text-[40px] font-bold uppercase leading-10 tracking-widest lg:text-left">
            Bringing you the <span className="text-orange">best</span> audio
            gear
          </p>
          <p className="text-pretty text-center text-base leading-6 opacity-50 lg:text-left">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="flex items-center justify-center">
          {isDesktop && <img src={ImgDesktop} className="rounded-lg" />}
          {isTablet && <img src={ImgTablet} className="rounded-lg" />}
          {isMobile && <img src={ImgMobile} className="rounded-lg" />}
        </div>
      </div>
    </div>
  );
};

export default Add4;

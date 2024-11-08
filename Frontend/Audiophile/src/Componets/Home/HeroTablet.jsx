import React from "react";

import Navbar from "../..//Componets/Navbar/Navbar";
import Button from "../../Componets/Buttons/Button";
import HeroImgT from "../../assets/home/tablet/image-header.jpg";
const HeroTablet = () => {
  return (
    <div>
      <div className="relative mx-auto">
        <div>
          <img src={HeroImgT} />
          <div className="absolute inset-0 z-10">
            <Navbar />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-6 text-center">
            <p className="font-manrope text-base tracking-[10px] text-white opacity-50">
              NEW PRODUCT
            </p>
            <p className="pt-6 font-manrope text-4xl font-bold uppercase leading-[58px] tracking-[2px] text-white md:text-[56px]">
              XX99 Mark II <br /> HeadphoneS
            </p>
            <p className="pb-10 pt-6 font-manrope text-base leading-6 text-white opacity-75">
              Experience natural, lifelike audio and exceptional
              <br />
              build quality made for the passionate music
              <br />
              enthusiast.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTablet;

import React from "react";
import HeroImgM from "../../assets/home/mobile/image-header.jpg";
import Navbar from "../../Componets/Navbar/Navbar";
import Button from "../../Componets/Buttons/Button";
const HeroMobile = () => {
  return (
    <div>
      <div className="relative mx-auto">
        <img src={HeroImgM} />
        <div className="absolute inset-0 z-10">
          <Navbar />
        </div>
        <div className="absolute inset-x-0 top-1/3 flex flex-col items-center justify-center text-center">
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
  );
};

export default HeroMobile;

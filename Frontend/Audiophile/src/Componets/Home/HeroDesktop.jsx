import React from "react";
import HeroImg from "../../assets/home/desktop/image-hero.jpg";
import Navbar from "../../Componets/Navbar/Navbar";
import Button from "../../Componets/Buttons/Button";

const HeroDesktop = () => {
  return (
    <div>
      <div className="realative mx-auto">
        <img src={HeroImg} />
        <div className="absolute inset-0">
          <Navbar />
        </div>
        <div className="absolute left-[15%] top-1/4">
          <p className="font-manrope text-base tracking-[10px] text-white opacity-50">
            NEW PRODUCT
          </p>
          <p className="pt-6 font-manrope text-4xl font-bold uppercase leading-[58px] tracking-[2px] text-white md:text-[56px]">
            XX99 Mark II <br /> HeadphoneS
          </p>
          <p className="py-6 font-manrope text-base leading-6 text-white opacity-75">
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

export default HeroDesktop;

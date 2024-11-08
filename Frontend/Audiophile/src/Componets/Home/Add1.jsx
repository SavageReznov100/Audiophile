import React from "react";
import { UseScreenDetector } from "../../Componets/UseScreenDetector";
import ImgDesktop from "../../assets/home/desktop/image-speaker-zx9.png";
import ImgTablet from "../../assets/home/tablet/image-speaker-zx9.png";
import ImgMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import Button2 from "../Buttons/Button2";
import { Link } from "react-router-dom";

const Add1 = () => {
  const { isMobile, isTablet, isDesktop } = UseScreenDetector();
  return (
    <div className="container">
      <div className="rounded-lg bg-orange">
        <div className="grid grid-cols-1 pt-12 md:pt-24 lg:grid-cols-3">
          <div className="col-span-2 items-center justify-self-center">
            {isDesktop && (
              <img
                src={ImgDesktop}
                className="max-h-[493px] max-w-[410px] object-cover"
              />
            )}
            {isTablet && (
              <img
                src={ImgTablet}
                className="max-h-[237px] max-w-[197px] shrink-0 object-cover"
              />
            )}
            {isMobile && (
              <img
                src={ImgMobile}
                className="max-h-[207px] max-w-[172px] object-cover"
              />
            )}
          </div>
          <div className="text-center font-manrope text-white lg:text-left">
            <p className="pt-16 text-4xl font-bold uppercase leading-10 tracking-widest md:text-[56px] md:leading-[58px]">
              ZX9 <br />
              SPEAKER
            </p>
            <p className="text-pretty pt-6 text-base leading-6 opacity-75">
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable sound.
            </p>
            <div className="pb-16 pt-6 lg:pt-10">
              <Link to="/product">
                <Button2 />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add1;

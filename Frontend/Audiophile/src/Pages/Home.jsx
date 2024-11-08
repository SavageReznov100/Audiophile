import React from "react";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { UseScreenDetector } from "../Componets/UseScreenDetector";
import HeroMobile from "../Componets/Home/HeroMobile";
import HeroDesktop from "../Componets/Home/HeroDesktop";
import HeroTablet from "../Componets/Home/HeroTablet";
import Add1 from "../Componets/Home/Add1";
import Add2 from "../Componets/Home/Add2";
import Add3 from "../Componets/Home/Add3";
import Add4 from "../Componets/Shared/Add4";
import Product from "../Componets/Shared/Product";
import Transition from "../Transition/Transition";

const Home = () => {
  const { isMobile, isTablet, isDesktop } = UseScreenDetector();
  const { products } = useContext(ProductContext);
  return (
    <div>
      <div>
        {isMobile && <HeroMobile />}
        {isTablet && <HeroTablet />}
        {isDesktop && <HeroDesktop />}
      </div>
      <Product /> <Add1 />
      <Add2 />
      <Add3 />
      <Add4 />
    </div>
  );
};

export default Transition(Home);

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import Navbar from "../Componets/Navbar/Navbar";
import { UseScreenDetector } from "../Componets/UseScreenDetector";
import Product from "../Componets/Shared/Product";
import Add4 from "../Componets/Shared/Add4";
import Transition from "../Transition/Transition";

const ProductDetails = () => {
  const { isMobile, isTablet, isDesktop } = UseScreenDetector();
  const { name } = useParams();
  const { products } = useContext(ProductContext);
  console.log(name);
  if (!Array.isArray(products)) {
    console.log("Products data is not an array");
  }
  const details = products.find((item) => {
    return item.name === name;
  });
  const { description, price, features, includes, image, category, gallery } =
    details;
  console.log(details);
  return (
    <>
      <Navbar bgcolor={"#000"} />
      <div className="container">
        <Link to={`/${category}`}>
          <p className="font-manrope opacity-50">Go Back</p>
        </Link>
        <div className="grid grid-cols-1 place-items-start gap-8 pb-40 md:grid-cols-2 md:place-items-center md:gap-28">
          <div>
            {isDesktop && <img src={image[0].desktop} />}
            {isTablet && <img src={image[0].tablet} />}
            {isMobile && <img src={image[0].mobile} />}
          </div>
          <div className="font-manrope">
            <p className="pb-4 text-base uppercase tracking-[10px] text-orange">
              new product
            </p>
            <p className="max-w-[445px] pb-8 text-[28px] font-bold uppercase leading-10 tracking-widest md:text-[40px]">
              {name}
            </p>
            <p className="max-w-[327px] text-pretty pb-8 text-base leading-6 opacity-50 md:max-w-[445px]">
              {description}
            </p>
            <p className="pb-11 text-[18px] font-bold uppercase tracking-widest">
              $ {price}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-28 lg:grid-cols-3 lg:gap-0">
          <div className="col-span-2 flex max-w-[327px] flex-col gap-8 font-manrope md:max-w-[635px]">
            <p className="text-2xl font-bold uppercase leading-9 tracking-widest md:text-[32px]">
              features
            </p>
            <p className="whitespace-break-spaces text-balance leading-6 opacity-50">
              {features}
            </p>
          </div>
          <div className="">
            <p className="pb-6 font-manrope text-2xl font-bold uppercase leading-9 tracking-widest md:pb-8 md:text-[32px]">
              in the box
            </p>
            {includes.map((data) => (
              <ul className="flex gap-6 pb-2 font-manrope text-base tracking-widest">
                <li className="font-bold text-orange">{data.quantity}x</li>
                <li className="opacity-50">{data.item}</li>
              </ul>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-lg md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="">
              {isDesktop && (
                <img
                  className="h-full w-full rounded-lg object-cover object-center"
                  src={gallery.first.desktop}
                />
              )}
              {isTablet && (
                <img
                  className="h-full w-full rounded-lg object-cover object-center"
                  src={gallery.first.tablet}
                />
              )}
              {isMobile && (
                <img
                  className="h-full w-full rounded-lg object-cover object-center"
                  src={gallery.first.mobile}
                />
              )}
            </div>
            <div className="">
              {isDesktop && (
                <img
                  className="h-full w-full rounded-lg object-cover object-center"
                  src={gallery.second.desktop}
                />
              )}
              {isTablet && (
                <img
                  className="h-full w-full rounded-lg object-cover object-center"
                  src={gallery.second.tablet}
                />
              )}
              {isMobile && (
                <img
                  className="h-full w-full rounded-lg object-cover object-center"
                  src={gallery.second.mobile}
                />
              )}
            </div>
          </div>

          <div className="">
            {isDesktop && (
              <img
                className="h-full w-full rounded-lg object-cover object-center"
                src={gallery.third.desktop}
              />
            )}
            {isTablet && (
              <img
                className="h-full w-full rounded-lg object-cover object-center"
                src={gallery.third.tablet}
              />
            )}
            {isMobile && (
              <img
                className="h-full w-full rounded-lg object-cover object-center"
                src={gallery.third.mobile}
              />
            )}
          </div>
        </div>
        <Product />
        <Add4 />
      </div>
    </>
  );
};

export default Transition(ProductDetails);

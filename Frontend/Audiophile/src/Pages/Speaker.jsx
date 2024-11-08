import React from "react";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Componets/Shared/Product";
import Add4 from "../Componets/Shared/Add4";
import Button from "../Componets/Buttons/Button";
import Navbar from "../Componets/Navbar/Navbar";
import { Link } from "react-router-dom";
import Transition from "../Transition/Transition";

const Speaker = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return item.category === "speakers";
  });
  console.log(filteredProducts);
  return (
    <>
      <div className="bg-[#000]">
        <div className="container relative min-h-[192px] w-full md:min-h-[336px]">
          <div className="absolute inset-0 z-10">
            <Navbar />
          </div>
          <div className="absolute inset-x-0 top-2/3 text-center font-manrope text-2xl font-bold uppercase tracking-widest text-white md:top-1/2 md:text-[40px]">
            <p>Speakers</p>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-32 py-40 lg:gap-40">
        {filteredProducts.map((data) => (
          <div
            key={data.id}
            className="grid grid-cols-1 place-items-center gap-20 lg:grid-cols-2"
          >
            <div>
              <img src={data.image[0].desktop} />
            </div>
            <div className="text-center font-manrope lg:text-left">
              <p className="pb-4 text-base uppercase tracking-[10px] text-orange">
                new product
              </p>
              <p className="min-w-[327px] text-wrap pb-8 text-[28px] font-bold uppercase leading-10 tracking-widest text-black md:text-[40px] lg:min-w-[400px]">
                {data.name}
              </p>
              <p className="min-w-[327px] text-pretty pb-10 text-base leading-6 opacity-50 lg:min-w-[400px]">
                {data.description}
              </p>
              <Link to={`/${data.name}`}>
                <Button />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Product />
      <Add4 />
    </>
  );
};

export default Transition(Speaker);

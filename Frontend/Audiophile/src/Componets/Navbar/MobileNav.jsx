import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";

const MobileLinks = [
  {
    id: "1",
    name: "headphones",
    link: "/headphones",
    image: headphones,
  },
  {
    id: "2",
    name: "speakers",
    link: "/speakers",
    image: speakers,
  },
  {
    id: "3",
    name: "earphones",
    link: "/earphones",
    image: earphones,
  },
];
const MobileNav = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="z-50 bg-white">
      <div className="grid-col-1 container grid h-full w-full gap-16 pb-16 pt-20 md:grid-cols-3 md:gap-2">
        {MobileLinks.map((data) => (
          <Link to={data.link} key={data.id}>
            <div className="relative mx-auto w-full">
              <div className="overflow-hidden rounded-lg bg-lightgrey">
                <div className="absolute -mt-14 flex w-full justify-center">
                  <div className="h-24 w-24">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <div className="text-center font-manrope font-bold uppercase tracking-wider">
                    <p className="text-base">{data.name}</p>
                    <div className="flex items-center justify-center gap-2 pb-7 pt-4">
                      <p className="z-10 text-[13px] opacity-50 hover:text-orange hover:opacity-100">
                        shop
                      </p>
                      <img
                        className="h-[10px] w-[5px]"
                        src={products[6].Shared.imgarrowright}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;

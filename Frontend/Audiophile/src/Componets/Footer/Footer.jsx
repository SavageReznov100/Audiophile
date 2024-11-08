import React from "react";
import Logo from "../../assets/shared/desktop/Logo";
import IconFacebook from "../../assets/shared/desktop/IconFacebook";
import IconTwitter from "../../assets/shared/desktop/IconTwitter";
import IconInstagram from "../../assets/shared/desktop/IconInstagram";
import { ProductContext } from "../../Context/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/",
  },
  {
    id: "2",
    name: "HEADPHONES",
    link: "headphones",
  },
  {
    id: "3",
    name: "SPEAKERS",
    link: "speakers",
  },
  {
    id: "4",
    name: "EARPHONES",
    link: "earphones",
  },
];
const Footer = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="bg-[#0E0E0E]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 py-12 lg:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            {/* <img src={products[6].Shared.audiophilelogo} /> */}
          </div>
          <div>
            <ul className="grid justify-items-center gap-8 font-manrope text-xs font-bold leading-6 tracking-widest text-white md:flex lg:justify-between">
              {NavLinks.map((data) => (
                <Link to={data.link} key={data.id}>
                  <li>
                    <a className="hover:text-orange">{data.name}</a>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid-col-1 grid text-balance text-center font-manrope text-base leading-6 md:text-left lg:grid-cols-2">
          <div>
            <p className="text-white opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="py-10 text-white opacity-50">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex justify-center gap-4 pb-10 lg:justify-end">
            <IconFacebook />
            <IconTwitter />
            <IconInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

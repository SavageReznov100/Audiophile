import React from "react";
import CartIcon from "../../assets/shared/desktop/CartIcon";
import IconHamburger from "../../assets/shared/tablet/IconHamburger";
import { ProductContext } from "../../Context/ProductContext";
import { useContext, useState } from "react";
import Product from "../Shared/Product";
import MobileNav from "./MobileNav";
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
    link: "/headphones",
  },
  {
    id: "3",
    name: "SPEAKERS",
    link: "/speakers",
  },
  {
    id: "4",
    name: "EARPHONES",
    link: "/earphones",
  },
];

const Navbar = ({ bgcolor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { products } = useContext(ProductContext);

  return (
    <>
      <div className={`bg-[${bgcolor}]`}>
        <div className="container">
          <div className="flex justify-between py-8 text-white">
            <div className="flex items-center gap-10">
              <span className="cursor-pointer lg:hidden" onClick={toggleMenu}>
                <IconHamburger />
              </span>
              <span className="hidden md:block">
                {/* <img src={products[6].shared.audiophilelogo} /> */}
              </span>
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-8 font-manrope text-xs font-bold leading-6 tracking-widest">
                {NavLinks.map((data) => (
                  <li key={data.id}>
                    <Link to={data.link}>
                      <a className="hover:text-orange">{data.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:hidden">
              {/* <img src={products[6].shared.audiophilelogo} /> */}
            </div>
            <div>
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen ? <MobileNav /> : null}
    </>
  );
};

export default Navbar;

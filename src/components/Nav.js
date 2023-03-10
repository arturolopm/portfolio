import React from "react";

// icons

import { BiHomeAlt, BiUser, BiImages } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

//link

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className=" w-72 md:w-80 lg:w-[460px] translate-x-[-50%] left-[50%] fixed bottom-2 lg:bottom-8 mx-auto overflow-hidden z-50">
      <div className="container mx-auto">
        {/* Nav */}
        <div className=" w-full bg-black/20 h-20 lg:h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link
            to="images"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" hidden lg:flex cursor-pointer w-[60px] h-[60px] items-center justify-center">
            <BiImages />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className=" cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

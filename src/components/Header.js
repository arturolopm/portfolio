import React from "react";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="  flex justify-between items-center">
          <a
            className=" flex text-gradient btn-link text-2xl"
            href="https://www.linkedin.com/in/arturo-lopez-martinez/">
            <div className=" text-white"> Arturo </div>
            <div className=" ml-1"> Lopez</div>
          </a>
          <Link
            to="contact"
            smooth={true}>
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

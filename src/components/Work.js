import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-imgage1.png";
import Img2 from "../assets/portfolio-image2.png";
import Img3 from "../assets/displayImg.png";

const Work = () => {
  return (
    <section
      className="section lg:mb-10"
      id="work">
      <div className="container mx-auto py-16">
        <div className=" flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}

            <div>
              <h2 className=" h2 leading-tight text-accent">
                My latest <br />
                Work
              </h2>
              <p className=" max-w-sm mb-8">
                I'm always interested in hearing about new projects, so if you'd
                like to chat please contact me.
              </p>
              <a href="https://github.com/arturolopm">
                <button className=" btn btn-sm">View projects on github</button>
              </a>
            </div>
            {/* image */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* tittle */}
              <div className="  absolute -bottom-full left-12 group-hover:bottom-32 lg:group-hover:bottom-48 transition-all duration-500 z-40">
                <span className=" text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-12 lg:group-hover:bottom-16 transition-all duration-700 z-40">
                <span className=" text-base md:text-xl font-bold text-white">
                  E-Commerce
                </span>
                <p className=" text-xs md:text-base text-white">
                  React and Tailwind Application to register, log in,search and
                  look for products, all fetching to an API, and allows users to
                  finish the purchase through Paypal API on NA and through
                  MercadoPago API on Latam{" "}
                </p>
              </div>
              <div className=" text-sm md:text-lg flex gap-x-10 absolute -bottom-full left-12 group-hover:bottom-2 lg:group-hover:bottom-6 transition-all duration-900 z-40">
                <a href="https://www.sunquwan.com/">
                  <button className=" px-2 btn">View live</button>
                </a>
                <a href="https://github.com/arturolopm/ReactEcommerce">
                  <button className=" px-2 btn">Source Code</button>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-10">
            {/* image */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* tittle */}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-32 lg:group-hover:bottom-48 transition-all duration-500 z-40">
                <span className=" text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-12 lg:group-hover:bottom-16 transition-all duration-700 z-40">
                <span className=" text-base font-bold md:text-xl text-white">
                  Not your artist
                </span>
                <p className=" text-xs md:text-base text-white">
                  React and Tailwind Application to discover new artist and
                  music, it takes a base artist of your preference and returns a
                  set of songs that you definetly should hear from other 15
                  artist, all fetching Spotify's API
                </p>
              </div>
              <div className=" text-sm md:text-lg flex gap-x-10 absolute -bottom-full left-12 group-hover:bottom-2 lg:group-hover:bottom-6 transition-all duration-900 z-40">
                <a href="https://arturolopm.github.io/not-your-artist/">
                  <button className=" px-2 btn">View live</button>
                </a>
                <a href="https://github.com/arturolopm/not-your-artist">
                  <button className=" px-2 btn">Source Code</button>
                </a>
              </div>
            </div>
            {/* image */}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* tittle */}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-32 lg:group-hover:bottom-48 transition-all duration-500 z-40">
                <span className=" text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-12 lg:group-hover:bottom-16 transition-all duration-700 z-40">
                <span className=" text-base font-bold md:text-xl text-white">
                  MyJou
                </span>
                <p className=" text-xs md:text-base text-white">
                  MERN application that will help you achieve goals by measuring
                  your progress and pairing you with people just like you to
                  give and receive valuable feedback
                </p>
              </div>
              <div className=" text-sm md:text-lg flex gap-x-10 absolute -bottom-full left-12 group-hover:bottom-2 lg:group-hover:bottom-6 transition-all duration-900 z-40">
                <a href="https://myjou.tech/">
                  <button className=" px-2 btn">View live</button>
                </a>
                {/* <a href="https://github.com/arturolopm/portfolio">
                  <button className=" px-2 btn">Source Code</button>
                </a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

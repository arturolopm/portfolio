import React from "react";

//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";

//animatons
import { TypeAnimation } from "react-type-animation";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants.js";

//link

import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className=" min-h-[85vh] lg:min-h-[78vh] lg:mb-96 flex items-center"
      id="home">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className=" flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Arturo <span>Lopez</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6  text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "React dev",
                  2000,
                  "Node dev",
                  2000,
                  "DSA lover",
                  2000,
                ]}
                speed={50}
                className=" text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-8 max-w-lg mx-auto lg:mx-0">
              I can help you build a website, product or implement new features.
              Take a look of some of my work and experience. If you like what
              you see feel free to get in touch with me.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link
                to="contact"
                smooth={true}>
                <button className=" btn btn-lg"> Contact me</button>
              </Link>
              <Link
                to="work"
                smooth={true}
                className=" text-gradient btn-link">
                My Portfolio
              </Link>
            </motion.div>
            {/* Social Media */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex text-[40px] gap-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/arturolopm">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/arturo-lopez-martinez/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          {/* <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img
              src={Image}
              alt=""
            />
          </motion.div> */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="   relative max-w-[320px] lg:max-w-[482px] hidden justify-center lg:flex flex-1 mb-6  text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
            <GiPlainCircle className="absolute text-gradient btn  mx-8 translate-x-[0%] -top-28  text-[320px] lg:text-[482px]" />
            <TypeAnimation
              sequence={["I turn coffee into code"]}
              speed={2}
              className="  text-white z-10 top-2 max-w-[180px] h-80  "
              wrapper="span"
              repeat={0}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

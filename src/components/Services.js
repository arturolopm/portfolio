import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { Link } from "react-scroll";

// data
const services = [
  {
    name: "UI/UX Design",
    description:
      "Experience with Front-end projects with design and development of user's interface, mainly using react and tailwind",
    link: "links",
  },
  {
    name: "Development",
    description:
      "Experience with front-end and back-end projects with MERN stack.",
    link: "links",
  },
  {
    name: "Product tool",
    description:
      "Experience with deployment of React projects and node servers on linux VPS.",
    link: "links",
  },
];

const Services = () => {
  return (
    <section
      className="section "
      id="services">
      <div className="container mx-auto py-1">
        <div className=" flex flex-col lg:flex-row">
          {/* text  and images*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              My favorite technology stack is the MERN (MongoDB, Express, React,
              Node) stack, with React being my top favorite skill.
            </h3>
            <Link
              to="work"
              smooth={true}
              spy={true}>
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 ">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className=" border-b border-white/20 h-[146px] mb-[38px] flex "
                    key={index}>
                    <div className=" max-w-[467px]">
                      <h4 className=" text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className=" font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div
                      className=" flex flex-col flex1
                     items-end">
                      <Link
                        to="work"
                        smooth={true}
                        spy={true}
                        className=" btn w-9 h-9 mb-[42px] flex justify-center
                        items-center">
                        <BsArrowUpRight />
                      </Link>
                      <Link
                        to="work"
                        smooth={true}
                        spy={true}
                        className=" text-gradient text-sm">
                        {link}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

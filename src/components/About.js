import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      className="section "
      id="about"
      ref={ref}>
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" hidden lg:flex flex-1 bg-about1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>

          {/* description */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1">
            <h2 className=" h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">I am a Software Developer</h3>
            <p className=" mb-6">
              I like to work with technology and experiment a lot with better
              ways of make the things, I love to code solutions and I am a DSA
              enthusiast. Please look trough some of my my work below and tell
              me if you would like to work together.
            </p>

            {/* tech */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[20px] h-32 lg:h-24 font-tertiary text-gradient mb-2 gap-6">
                  {InView && (
                    <>
                      <CountUp
                        start={0}
                        end={12}
                        duration={4}
                      />
                      <TypeAnimation
                        sequence={[
                          " - HTML",
                          307,
                          " - HTML CSS3",
                          307,
                          " - HTML CSS3 REACT",
                          307,
                          " - HTML CSS3 REACT TAILWIND",
                          307,
                          " - HTML CSS3 REACT TAILWIND NODE",
                          307,
                          " - HTML CSS3 REACT TAILWIND NODE EXPRESS",
                          307,
                          " - HTML CSS3 REACT TAILWIND NODE EXPRESS MONGODB",
                          307,
                          " - HTML CSS3 REACT TAILWIND NODE EXPRESS MONGODB GIT",
                          307,
                          " - HTML CSS3 REACT TAILWIND NODE EXPRESS MONGODB GIT GITHUB",
                          307,
                          " - HTML CSS3 REACT TAILWIND NODE EXPRESS MONGODB GIT GITHUB GITHUB-PAGES",
                          307,
                          " - HTML CSS3 REACT TAILWIND NODE EXPRESS MONGODB GIT GITHUB GITHUB-PAGES LINUX",
                          307,
                          " - HTML CSS3 REACT TAILWIND NODE EXPRESS MONGODB GIT GITHUB GITHUB-PAGES LINUX HOSTINGER",
                          307,
                        ]}
                        speed={90}
                        className=" text-accent"
                        wrapper="span"
                        repeat={0}
                      />
                    </>
                  )}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Technologies stack
                </div>
              </div>
            </div>
            <div className=" flex gap-x-8 items-center">
              <a
                href="https://docs.google.com/document/d/1R9Hth0lbxBh0WXAjOXR7shTbt2GulknR/edit?usp=sharing&ouid=116267984285797015531&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer">
                <button className=" btn btn-lg">Get My Resume</button>
              </a>
              <Link
                to="work"
                smooth={true}
                spy={true}
                className=" cursor-pointer text-gradient btn-link">
                My portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

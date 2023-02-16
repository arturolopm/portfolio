import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkopvda");

  return (
    <section
      className=" py-16 lg:section"
      id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex justify-start items-center">
            <div>
              <h4 className=" text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className=" text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleSubmit}
            className=" flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              id="email"
              type="email"
              name="email"
              className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className=" btn btn-lg">
              Send message
            </button>
            {state.succeeded && (
              <h4 className=" text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Thank you for your submit!
              </h4>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

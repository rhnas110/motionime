import { useContext } from "react";

import { motion } from "../../utils/motion";
import { transition } from "../../config/transition.config";
import { CursorContext } from "../../context/CursorContext";

import Img from "../../assets/img/contact/woman.png";

export const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      className="section bg-white"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left pt-36">
          <motion.div
            className="hidden lg:flex bg-accent absolute bottom-0 left-0 right-0 top-72 -z-10"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition}
          ></motion.div>
          <div
            className="lg:flex;1 lg:pt-32 px-4"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">Let's connected</p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  placeholder="U'r name"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-grey"
                />
                <input
                  type="text"
                  placeholder="U'r email"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-grey"
                />
              </div>
              <input
                type="text"
                placeholder="U'r message"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-grey"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send
              </button>
            </form>
          </div>
          <motion.div
            className="lg:flex-1"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition, duration: 1.5 }}
          >
            <img src={Img} alt="Img" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

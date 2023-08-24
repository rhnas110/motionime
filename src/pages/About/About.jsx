import { useContext } from "react";
import { Link } from "react-router-dom";

import { motion } from "../../utils/motion";
import { transition } from "../../config/transition.config";
import { CursorContext } from "../../context/CursorContext";

import Img from "../../assets/img/about/woman.png";

export const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={Img} alt="Img" />
          </div>
          <motion.div
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              hic quae <b> laudantium animi </b> distinctio atque laboriosam
              dicta similique eveniet alias.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio temporibus quasi vitae sint quam iusto blanditiis!
              Laborum, fugit. Dolorem, necessitatibus!
            </p>
            <Link className="btn" to={""}>
              Here
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

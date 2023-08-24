import { Link } from "react-router-dom";
import { useContext } from "react";

import { motion } from "../../utils/motion";
import { transition } from "../../config/transition.config";
import { CursorContext } from "../../context/CursorContext";

import Img1 from "../../assets/img/portfolio/1.png";
import Img2 from "../../assets/img/portfolio/2.png";
import Img3 from "../../assets/img/portfolio/3.png";
import Img4 from "../../assets/img/portfolio/4.png";

const portfolioImg = [
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img4 },
];

export const Portfolio = () => {
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
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            className="flex flex-col lg:items-start"
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <h1 className="h1">Porfolio</h1>
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
            <Link className="btn mb-[30px] mx-auto lg:mx-0" to={""}>
              Here
            </Link>
          </motion.div>
          <div className="grid lg:grid-cols-2 lg:gap-2">
            {portfolioImg.map((item, index) => {
              return (
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                  <img
                    src={item.img}
                    alt={index}
                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

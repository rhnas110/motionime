import "./About.css";
import { transition } from "../../../config/transition.config";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { motion } from "../../../utils/motion";
import { getWidth } from "../../../utils/screen";
import { CursorContext } from "../../../context/CursorContext";
import { aboutCard } from "../../../data";

import { Team } from "../../Fragments/Team/Team";

import { AboutHero } from "./AboutHero";
import { AboutCarousel } from "./AboutCarousel";
import { MotionStory } from "./MotionStory";
import { MotionJoin } from "./MotionJoin";
import { AboutDetail } from "./AboutDetail";
import { MemberContext } from "../../../context/MemberContext";

export const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const width = getWidth();
  const { total } = useContext(MemberContext);

  return (
    <motion.div
      // 1024 === lg
      initial={{ opacity: 0, y: `${width > 1024 ? "100%" : ""}` }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <AboutHero />
      <section className="mb-32">
        <div className="max-w-[1280px] mx-auto w-full h-full text-white">
          <div className="text-[#865dff] md:pt-16 pt-8 w-full flex flex-col gap-24">
            <AboutDetail total={total} />

            <div data-aos="fade-up" data-aos-delay="500">
              <div
                className="text-center mb-8 px-2"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <div className="max-w-sm mx-auto font-semibold flex flex-col gap-4 mb-8">
                  <h1 className="sm:text-2xl text-1xl">
                    What <span className="font-motion_ime">Motion</span> Do
                  </h1>
                  <p className="text-grey sm:text-3xl text-2xl">
                    We Played And Grew Into The Bocil of Death
                  </p>
                </div>
                <p className="max-w-4xl mx-auto text-black">
                  At{" "}
                  <Link className="font-motion_ime text-[#865dff]" to={"/"}>
                    Motion ime
                  </Link>
                  , we introduce imaginative solutions through imaginative
                  technology. Not simply that, we also provide an online
                  community that is unrivaled through the Discord platform, with
                  over {total || "..."} members making it the largest and most
                  active community in Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-[1400px] mx-auto px-2"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <AboutCarousel data={aboutCard} />
        </div>
      </section>
      <MotionStory />
      <Team />
      <MotionJoin />
    </motion.div>
  );
};

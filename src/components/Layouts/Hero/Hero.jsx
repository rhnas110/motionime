import { useContext } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { ButtonJoinNow } from "../../Elements/Button";

import { CursorContext } from "../../../context/CursorContext";
import { motion } from "../../../utils/motion";
import { transition } from "../../../config/transition.config";

import heroVid from "../../../assets/img/hero/hero.mp4";
import { MemberContext } from "../../../context/MemberContext";

const motionWords = [
  "Game",
  "Music",
  "Friend",
  "Hobbies",
  "Sport",
  "Creator",
  "Cosplay",
  "Idol",
  "Anime",
  "Movie",
  "Manga",
  "Drakor",
  "Hoyoverse",
  "Rhythm",
  "Fashion",
  "TCG",
  "etc.",
];

export const Hero = () => {
  const [text] = useTypewriter({
    words: motionWords,
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 140,
  });
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const { total } = useContext(MemberContext);
  const heroVideo = document.getElementById("heroVideo");

  function playVid() {
    heroVideo.play();
  }

  function pauseVid() {
    heroVideo.pause();
  }

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      {/* hero background */}
      <div className="w-screen h-screen overflow-hidden absolute -z-10 bg-neutral-950">
        <video
          id="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={heroVid} />
        </video>
      </div>
      {/* end of hero background */}
      {/* content hero */}
      <div className="max-w-[1280px] mx-auto w-full h-full pt-24 flex text-white">
        <div className="w-full flex justify-center items-center">
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition}
            className="text-center"
          >
            <p className="text-[#865DFF] font-bold mb-6 text-xl">
              Welcome Bocil Kematian
            </p>

            <h1 className="lg:text-6xl md:text-[2.75rem] px-2 text-4xl font-bold">
              Let's play and grow with{" "}
              <span className="font-motion_ime">motion ime!</span>
            </h1>
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-4">
              Find your{" "}
              <span>
                {text}
                <span className="text-[#865DFF]">
                  <Cursor />
                </span>
              </span>{" "}
              interest!
            </p>

            <p className="lg:text-2xl text-lg font-bold text-gray-400 lg:w-[65%] md:w-[80%] w-[95%] mx-auto mb-10 px-1">
              <span className="font-motion_ime">Motion ime</span> is a discord
              community with over {total || "..."} members. Let's join to become
              the bocil of death.
            </p>
            <ButtonJoinNow
              where="hero"
              onMouseEnter={pauseVid}
              onMouseLeave={playVid}
            />
          </motion.div>
        </div>
      </div>
      {/* end of content hero */}
    </motion.section>
  );
};

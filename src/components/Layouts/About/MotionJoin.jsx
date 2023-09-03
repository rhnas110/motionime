import { useContext } from "react";

import { ButtonJoinNow } from "../../Elements/Button";
import { CursorContext } from "../../../context/CursorContext";

import mockup_motion from "../../../assets/img/about/mockup-motion.png";

export const MotionJoin = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section
      className="w-screen lg:h-[90vh] from-[#e6d7ff] to-[#caadff] bg-gradient-to-br overflow-auto"
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <div className="max-w-5xl mx-auto px-2 w-full h-full lg:py-24 md:py-16 py-8">
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-8">
          <div
            className="w-full h-full flex justify-center lg:col-span-2 rounded"
            data-aos="zoom-in-up"
            data-aos-delay="1000"
          >
            <img
              src={mockup_motion}
              alt="mockup_motion"
              className="lg:w-full lg:h-[550px] md:w-[300px] md:h-[500px] w-[200px] h-[350px] object-cover object-center hover:-rotate-3 hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div
            className="flex flex-col justify-center lg:col-span-4 py-4"
            data-aos="zoom-in-down"
            data-aos-delay="1000"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <p className="text-[#865dff] font-bold">Halo, Motion Imers.</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Did you already join
              <span className="font-motion_ime"> motion ime</span>?
            </h1>
            <p className="mb-8">
              Join <span className="font-motion_ime">Motion Ime</span> now and
              be part of something greater than the digital realm. Unleash your
              excitement, exchange insights, and journey alongside individuals
              who celebrate your every triumph. Here, passions unite, and dreams
              take flight. Elevate your online presence – fight to become
              Guardian's - your adventure begins with{" "}
              <span className="font-motion_ime">Motion Ime!</span>
            </p>

            <ButtonJoinNow
              className={"w-[200px] text-center mx-auto sm:mx-0"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

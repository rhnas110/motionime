import "./About.css";
import { transition } from "../../../config/transition.config";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { motion } from "../../../utils/motion";
import { CursorContext } from "../../../context/CursorContext";

import stackedBG from "../../../assets/img/about/stacked.svg";
import { aboutDetail, aboutCard, founder } from "../../../data";
import { AboutCarousel } from "./AboutCarousel";
import { getWidth } from "../../../utils/screen";
import { TeamCard } from "./TeamCard";

const width = getWidth();

export const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div className="">
      <section className="w-screen h-[120vh] relative">
        {/* bg */}
        <div className="w-screen h-[120vh] overflow-hidden absolute -z-10 bg-primary">
          <img
            src={stackedBG}
            alt="stackedBG"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* end of bg */}

        <div className="max-w-[1280px] mx-auto w-full h-full text-white flex">
          <div
            className="lg:w-[40%] sm:w-[60%] w-[90%] px-2 sm:mt-72 mt-36"
            data-aos="fade-up-right"
          >
            <h1 className="lg:text-4xl md:text-[2.75rem] text-3xl font-bold mb-4">
              The First Provider of 3D Imaging Technology Merchandise in
              Indonesia
            </h1>
            <p>
              Established in 2023,{" "}
              <Link className="font-motion_ime text-grey" to={"/"}>
                Motion ime
              </Link>{" "}
              is the first provider of 3D imaging technology merchandise,
              starting from posters, stickers, keychains. 3D Posters are a
              popular and unique choice for Home Decor, as they can add
              excitement to any room and are a brilliant way to showcase your
              favorite photos or artwork.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="max-w-[1280px] mx-auto w-full h-full text-white">
          <div className="text-[#865dff] md:pt-16 pt-8 w-full flex flex-col gap-24">
            <div
              className="grid md:grid-cols-4 grid-cols-2 gap-4 text-center font-bold px-2 place-items-center"
              data-aos="fade-up"
            >
              {aboutDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="sm:text-5xl text-4xl">{item.text}</p>
                    <span className="text-grey text-lg">{item.title}</span>
                  </div>
                );
              })}
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <div className="text-center mb-8 px-2">
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
                  over 450k members making it the largest and most active
                  community in Indonesia.
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

      <section
        className="w-screen h-[80vh] motion-story overflow-auto"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="max-w-[1280px] mx-auto w-full h-full text-white sm:pt-24 pt-12 px-2">
          <div className="max-w-[960px] mx-auto">
            <h1 className="sm:text-5xl text-3xl font-semibold mb-10">
              Motion Story
            </h1>
            <div className="flex flex-col sm:gap-y-6 gap-y-4">
              <p>
                In the year 2023, Motion ime was born from the extraordinary
                imagination of two talented young men: Windah Basudara and Rio
                Djaja. A project that started as a fun idea, with strong
                determination, Motion ime embarked on a challenging journey,
                directing their focus on merchandise products based on unique 3D
                imaging technology.
              </p>
              <p>
                From 3D posters that bring images to life to 3D stickers that
                bring new dimensions, as well as 3D keychains that give a
                magical touch to every key used. Each Motion ime product tells a
                story of imaginative technology that pushes the boundaries of
                the visual world.
              </p>
              <p className={`${width < 919 ? "hidden" : ""}`}>
                Di tahun 2023, Motion ime lahir dari imajinasi luar biasa dua
                pemuda berbakat: Windah Basudara dan Rio Djaja. Sebuah proyek
                yang berawal dari ide iseng, Dengan tekad yang kuat, Motion ime
                memulai perjalanan yang menantang, mengarahkan fokus mereka pada
                produk merchandise berbasis teknologi pencitraan 3D yang unik.
                <br /> <br />
                Dari poster 3D yang menghidupkan gambar hingga stiker 3D yang
                menghadirkan dimensi baru, serta gantungan kunci 3D yang memberi
                sentuhan magis pada setiap kunci yang digunakan. Setiap produk
                Motion ime menceritakan kisah tentang teknologi imajinatif yang
                mendorong batasan-batasan dunia visual.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen lg:h-screen">
        <div
          className="max-w-[1280px] mx-auto w-full h-full pt-32 pb-16"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="px-2 mb-12">
            <h1 className="sm:text-4xl text-2xl text-[#865dff] text-center font-semibold">
              <span className="font-motion_ime">Motion</span> Team
            </h1>
          </div>
          <div className="max-w-5xl mx-auto px-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center">
              {founder?.map((item, index) => {
                return <TeamCard data={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen h-[80vh] bg-[#caadff]">
        <div className="max-w-[1280px] mx-auto w-full h-full py-16">
          <div className="max-w-5xl mx-auto px-2 border-2">test</div>
        </div>
      </section>
    </div>
  );
};

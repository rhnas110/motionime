import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { Drawer } from "./Drawer";
import { Socials } from "./Socials";

import { CursorContext } from "../../../context/CursorContext";
import { motion } from "../../../utils/motion";
import { navbarMenu } from "../../../data";

export const Navbar = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const location = useLocation();

  let lastScrollTop;
  window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 555) {
      navbar.classList.remove("top-0");
      navbar.classList.add("top-[-80px]");
    } else {
      navbar.classList.remove("top-[-80px]");
      navbar.classList.add("top-0");
    }
    lastScrollTop = scrollTop;
    if (location.pathname === "/about") {
      // 700 - 1900 section what motion do
      if (scrollTop > 700 && scrollTop < 1900) {
        navbar.classList.remove("text-white");
        navbar.classList.add("text-primary");
      } else {
        navbar.classList.remove("text-primary");
        navbar.classList.add("text-white");
      }
    }
  });
  return (
    <header
      className="fixed w-full z-30 h-24 flex items-center justify-center px-2 xl:px-1 text-white transition-all duration-700"
      id="navbar"
    >
      <motion.div
        // perlu konfigurasi biar smooth
        initial={{ opacity: 0, y: "-10%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        className="flex items-center justify-between w-full max-w-[1300px] backdrop-blur-xl lg:bg-transparent rounded-full lg:py-3 lg:px-5 px-3 py-2 border-b border-[rgba(234,234,234,34)] lg:border-none"
      >
        <Link
          to={"/"}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="font-motion_ime text-3xl"
        >
          Motion Ime
        </Link>

        <nav
          className="hidden lg:flex gap-x-12"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {navbarMenu.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                className="font-bold transition underline-on-hover"
              >
                {item.text}
              </Link>
            );
          })}
        </nav>

        {/* drawer for mobile navigation */}
        <Drawer />
        {/* end of drawer for mobile navigation */}
        <div className="hidden lg:flex ml-24">
          <Socials />
        </div>
      </motion.div>
    </header>
  );
};

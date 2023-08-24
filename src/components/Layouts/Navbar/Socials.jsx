import { ImInstagram } from "react-icons/im";
import { HiShoppingBag } from "react-icons/hi";
import { IoLogoTiktok } from "react-icons/io5";
import { useContext } from "react";

import { CursorContext } from "../../../context/CursorContext";

const socialsMenu = [
  { icon: <ImInstagram />, path: "https://www.instagram.com/motion.ime/" },
  { icon: <HiShoppingBag />, path: "https://www.tokopedia.com/motionime" },
  { icon: <IoLogoTiktok />, path: "https://www.tiktok.com/@motionime" },
];

export const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className="hidden lg:flex ml-24">
      <ul className="flex gap-x-4 text-lg">
        {socialsMenu.map((item, index) => {
          return (
            <li
              key={index}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

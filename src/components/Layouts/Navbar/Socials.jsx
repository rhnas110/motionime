import { useContext } from "react";

import { CursorContext } from "../../../context/CursorContext";
import { socialsMenu } from "../../../data";

export const Socials = ({ className = "text-lg" }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const c = className;
  return (
    <ul className={`flex gap-x-4 ${c}`}>
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
  );
};

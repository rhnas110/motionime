import { useContext } from "react";
import { MemberContext } from "../../../context/MemberContext";

export const AboutDetail = () => {
  const { total } = useContext(MemberContext);
  const data = [
    {
      title: "The Bocil's of Death",
      text: total || "...",
    },
    {
      title: "Forum's",
      text: "50+",
    },
    {
      title: "Guardian's",
      text: "40+",
    },
    {
      title: "Event's",
      text: "5+",
    },
  ];
  return (
    <div
      className="grid md:grid-cols-4 grid-cols-2 gap-4 text-center font-bold px-2 place-items-center"
      data-aos="fade-up"
    >
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <p className="sm:text-5xl text-4xl">{item.text}</p>
            <span className="text-grey text-lg">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

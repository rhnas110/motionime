import { founder } from "../../../data";
import { TeamCard } from "./TeamCard";

export const Team = ({ aos = "fade-up", aos_delay = "500" }) => {
  return (
    <section className="w-screen lg:h-screen mb-16">
      <div
        className="max-w-[1280px] mx-auto w-full h-full pt-24"
        data-aos={aos}
        data-aos-delay={aos_delay}
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
  );
};

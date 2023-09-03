import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

export const TeamCard = ({ data }) => {
  const social = data?.social;

  return (
    <div className="w-48 rounded-lg group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-60 w-48">
        <img
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={data?.picture}
          alt={data?.name}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="text-l font-bold text-white">{data?.name}</h1>
        <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {data?.title}
        </p>
        <div className="flex text-white text-2xl gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link target="_blank" to={social?.youtube}>
            <AiFillYoutube className={`${!social?.youtube && "hidden"}`} />
          </Link>
          <Link target="_blank" to={social?.ig}>
            <AiFillInstagram className={`${!social?.ig && "hidden"}`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

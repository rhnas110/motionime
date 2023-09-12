import { rupiah } from "../../../utils/currency";
import { minimizeString } from "../../../utils/string";

export const Card = ({ item }) => {
  return (
    <div className="w-[240px] h-[360px] inline-block relative p-2">
      <div className="w-full h-full rounded p-1 shadow-md">
        <div className="w-full h-[60%] rounded overflow-hidden">
          <img
            className="w-full h-full aspect-square bg-primary hover:scale-110"
            src={item?.image}
            alt={item?.title}
            loading="lazy"
          />
        </div>
        <div className="w-full h-[40%] p-0.5 flex flex-col relative">
          <div className="whitespace-break-spaces">
            <p>{minimizeString(item?.title, 44)}</p>
          </div>
          <p className="font-bold my-2">{rupiah(item?.price)}</p>
          <div className="w-full absolute bottom-0 left-0">
            <a
              href={item?.link}
              rel="noopener noreferrer"
              target="_blank"
              className="w-full inline-flex items-center justify-center px-4 py-2 text-base font-semibold whitespace-nowrap leading-6 bg-white border border-[#865dff] text-[#865dff] rounded shadow-sm hover:bg-[#865dff] hover:text-white focus:outline-none focus:shadow-none"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

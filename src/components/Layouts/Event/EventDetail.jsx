import "./EventDetail.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { MI_API_BASE_URL } from "../../../config/motionime-api.config";
import { EventTitleContext } from "../../../context/EventTitleContext";
import { minimizeString } from "../../../utils/string";

import { ButtonWatchNow } from "../../Elements/Button";

export const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const { handleTitle } = useContext(EventTitleContext);

  const getEventById = useCallback(async () => {
    try {
      const { results } = await (
        await axios.get(`${MI_API_BASE_URL}/event.json`)
      ).data;

      const event = results?.filter((item) => item.id === id);
      setEvent(event);

      const episodes = event[0]?.episodes;
      setEpisodes(episodes);

      handleTitle(event[0]?.title);
    } catch (error) {}
  }, [id, handleTitle]);

  useEffect(() => {
    getEventById();
  }, [getEventById]);
  return (
    <div>
      <section className="section">
        {event?.length ? (
          <div className="w-full h-full relative">
            <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
            <img
              className="w-full h-full object-cover object-center bg-primary"
              src={event[0]?.banner}
              alt={event[0]?.title}
              loading="lazy"
            />
            <div className="absolute w-full top-[20%] p-4 md:p-8 lg:py-16 lg:px-24">
              <Link to={"/event"}>&#8592; Back to Event</Link>
              <h1 className="text-3xl md:text-5xl font-bold my-4">
                {event[0]?.title}
              </h1>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                {minimizeString(event[0]?.desc, 300)}
              </p>
              <div className="flex gap-x-4 my-4">
                <p>Genre :</p>
                <p>{event[0]?.genre}</p>
              </div>
              <div className="flex gap-x-4 text-[#865dff] font-semibold mb-2">
                <p>Time :</p>
                <p>{event[0]?.schedule}</p>
              </div>
              <div>
                <ButtonWatchNow />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full animate-spin
          border-4 border-dashed border-[#865dff] border-t-transparent"
            ></div>
          </div>
        )}
      </section>

      <section className="w-screen py-16 px-2">
        <div className="max-w-4xl mx-auto py-10 shadow-lg shadow-slate-100/50 rounded card">
          {event?.length ? (
            <>
              {episodes?.length ? (
                <>
                  <div className="bg-[#865dff] p-2">
                    {event[0]?.title} Episode List
                  </div>
                  {episodes?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`p-2 cursor-pointer hover:underline ${
                          index % 2 === 0 ? "bg-primary" : "rgba(22,22,22,1)"
                        }`}
                      >
                        <a
                          href={item?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event[0]?.title} {item?.title}
                        </a>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="text-center">
                  <p>Check on discord</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <p>Event Not Found</p>
              <Link
                to={"/event"}
                className="text-[#865dff] font-semibold text-lg"
              >
                &#8592; Back
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

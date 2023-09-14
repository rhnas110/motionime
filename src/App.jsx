import "./assets/styles/global.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";
import axios from "axios";

import { AnimatePresence } from "./utils/motion";
import { MemberContext } from "./context/MemberContext";
import { MI_API_BASE_URL } from "./config/motionime-api.config";

import {
  AboutPage,
  CatalogPage,
  ComingSoonPage,
  EventDetailPage,
  EventPage,
  HomePage,
  NotFoundPage,
  SupportPage,
} from "./pages";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const location = useLocation();
  const { handleTotal } = useContext(MemberContext);

  const getTotalMember = useCallback(async () => {
    try {
      if (location?.pathname === "/" || location?.pathname === "/about") {
        const response = await (
          await axios.get(`${MI_API_BASE_URL}/member.json`)
        ).data;
        handleTotal(response?.results?.byline);
      } else return 0;
    } catch (error) {}
  }, [handleTotal, location]);

  useEffect(() => {
    getTotalMember();
  }, [getTotalMember]);

  useEffect(() => {
    // console.log(process.env.REACT_APP_MOTIONIME);
  }, []);
  return (
    <>
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/support" element={<SupportPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

import "./assets/styles/global.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { AnimatePresence } from "./utils/motion";

import { Cursor } from "./components/Elements/Cursor";

import {
  AboutPage,
  ComingSoonPage,
  EventDetailPage,
  EventPage,
  HomePage,
  NotFoundPage,
} from "./pages";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const location = useLocation();

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
          <Route path="/catalog" element={<ComingSoonPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>

      {/* cursor */}
      <Cursor />
    </>
  );
}

export default App;

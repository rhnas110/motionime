import "./assets/styles/global.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { AnimatePresence } from "./utils/motion";

import { Cursor } from "./components/Elements/Cursor";

import { ComingSoonPage, HomePage, NotFoundPage } from "./pages";
// perlu di rapihin
import { About } from "./pages/About/About";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Contact } from "./pages/Contact/Contact";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(process.env.REACT_APP_MOTIONIME);
  }, []);
  return (
    <>
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ComingSoonPage />} />
          <Route path="/contact" element={<ComingSoonPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>

      {/* cursor */}
      <Cursor />
    </>
  );
}

export default App;

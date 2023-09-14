import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import App from "./App";
import { CursorProvider } from "./context/CursorContext";
import { EventTitleProvider } from "./context/EventTitleContext";
import { MemberProvider } from "./context/MemberContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CursorProvider>
      <EventTitleProvider>
        <MemberProvider>
          <App />
          <ToastContainer draggable />
        </MemberProvider>
      </EventTitleProvider>
    </CursorProvider>
  </BrowserRouter>
);

import { useDocumentTitle } from "../hooks/useDocumentTitle";

import { Home } from "./Home/Home";
import { ComingSoon } from "./ComingSoon/ComingSoon";
import { NotFound } from "./NotFound/NotFound";
import { About } from "./About/About";
import { Event } from "./Event/Event";
import { EventDetail } from "./Event/EventDetail";
import { useContext } from "react";
import { EventTitleContext } from "../context/EventTitleContext";

// custom title
function Page({ children }) {
  return <>{children}</>;
}

function HomePage() {
  return <Page children={<Home />} />;
}
function AboutPage() {
  useDocumentTitle("about motion ime");
  return <Page children={<About />} />;
}
function EventPage() {
  useDocumentTitle("motion ime activity");
  return <Page children={<Event />} />;
}
function EventDetailPage() {
  const { title } = useContext(EventTitleContext);

  useDocumentTitle(`motion ime activity | ${title ? title : "..."}`);
  return <Page children={<EventDetail />} />;
}

function ComingSoonPage() {
  useDocumentTitle("page is coming soon");
  return <Page children={<ComingSoon />} />;
}
function NotFoundPage() {
  useDocumentTitle("motion not found");
  return <Page children={<NotFound />} />;
}

export {
  HomePage,
  ComingSoonPage,
  NotFoundPage,
  AboutPage,
  EventPage,
  EventDetailPage,
};

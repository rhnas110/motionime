import { useDocumentTitle } from "../hooks/useDocumentTitle";

import { Navbar } from "../components/Layouts";

import { Home } from "./Home/Home";
import { ComingSoon } from "./ComingSoon/ComingSoon";
import { NotFound } from "./NotFound/NotFound";
import { About } from "./About/About";

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
function ComingSoonPage() {
  useDocumentTitle("page is coming soon");
  return (
    <Page
      children={
        <>
          {/* <Navbar /> */}
          <ComingSoon />
        </>
      }
    />
  );
}
function NotFoundPage() {
  useDocumentTitle("motion not found");
  return <Page children={<NotFound />} />;
}

export { HomePage, ComingSoonPage, NotFoundPage, AboutPage };

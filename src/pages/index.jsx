import { useDocumentTitle } from "../hooks/useDocumentTitle";

import { Home } from "./Home/Home";
import { ComingSoon } from "./ComingSoon/ComingSoon";
import { NotFound } from "./NotFound/NotFound";

// custom title
function Page({ children }) {
  return <>{children}</>;
}

function HomePage() {
  return <Page children={<Home />} />;
}
function ComingSoonPage() {
  useDocumentTitle("page is coming soon");
  return <Page children={<ComingSoon />} />;
}
function NotFoundPage() {
  useDocumentTitle("motion not found");
  return <Page children={<NotFound />} />;
}

export { HomePage, ComingSoonPage, NotFoundPage };

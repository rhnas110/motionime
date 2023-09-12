import {
  Navbar,
  Catalog as CatalogLayouts,
  Footer,
} from "../../components/Layouts";

export const Catalog = () => {
  return (
    <div>
      <Navbar />
      <CatalogLayouts />
      <Footer className="bg-inherit" />
    </div>
  );
};

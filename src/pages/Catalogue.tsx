import CatalogueList from "../components/CatalogueList";
import ComponentMenu from "../components/ComponentMenu";
import Navbar from "../components/Navbar";

const Catalogue = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow px-4 pt-4 mb-3">
        <ComponentMenu title="Catalogue" />
      </div>
      <CatalogueList />
      <Navbar />
    </div>
  );
};

export default Catalogue;

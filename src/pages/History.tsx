import ComponentMenu from "../components/ComponentMenu";
import HistoryList from "../components/HistoryList";
import Navbar from "../components/Navbar";

const History = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow px-4 pt-4 mb-3">
        <ComponentMenu title="History" />
      </div>
      <HistoryList />
      <Navbar />
    </div>
  );
};

export default History;

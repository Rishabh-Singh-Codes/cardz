import historyList from "../mock-data/historyList.json";
import HistoryListItem from "./HistoryListItem";

interface HistoryListProps {
  page?: String;
}

const HistoryList: React.FC<HistoryListProps> = ({page}) => {
  return (
    <div className={`overflow-y-scroll ${page==="card" ? "h-[30%]" : "h-[80%] px-4"}`}>
      {historyList.data.map((day) => (
        <div key={day.dayId} className="flex flex-row mb-3">
          <div className="text-white w-full">
            {day.date}
            {
              day.data.map((item) => (
                <HistoryListItem key={item.id} itemData={item} />
              ))
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;

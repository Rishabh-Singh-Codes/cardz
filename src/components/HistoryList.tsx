import historyList from "../mock-data/historyList.json";
import HistoryListItem from "./HistoryListItem";

const HistoryList = () => {
  return (
    <div className="overflow-y-scroll px-4 h-[80%]">
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

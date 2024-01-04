import { useState } from "react";
import historyList from "../mock-data/historyList.json";
import HistoryListItem from "./HistoryListItem";

interface HistoryListProps {
  page?: String;
}

const HistoryList: React.FC<HistoryListProps> = ({ page }) => {
  const [showIndex, setShowIndex] = useState<null | Number>(null);
  return (
    <div
      className={`overflow-y-scroll ${
        page === "card" ? "h-[40%] md:h-[20%] pt-6" : "h-[80%] px-4"
      }`}
    >
      {historyList.data.map((day) => (
        <div key={day.dayId} className="flex flex-row mb-3">
          <div className="text-white w-full">
            {day.date}
            {day.data.map((item, index) => (
              <HistoryListItem
                key={item.id}
                itemData={item}
                showData={index === showIndex ? true : false}
                setShowIndex={() => {
                  index === showIndex ? setShowIndex(null) : setShowIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;

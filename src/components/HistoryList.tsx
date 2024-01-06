import { useState } from "react";
import historyList from "../mock-data/historyList.json";
import HistoryListItem from "./HistoryListItem";

interface HistoryListProps {
  page?: string;
  showIndex?: number | null;
  setShowIndex?: (index: number | null) => void;
  historyList?: any;
}

const HistoryList: React.FC<HistoryListProps> = ({ page }) => {
  const [showIndex, setShowIndex] = useState<null | Number>(null);
  return (
    <div
      data-testid="history-list-container"
      className={`overflow-y-scroll ${
        page === "card" ? "h-[40%] md:h-[20%] pt-6" : "h-[80%] px-4"
      } [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']`}
    >
      {historyList.data.map((day, index) => (
        <div key={`day.dayId${index + 1}`} className="flex flex-row mb-3">
          <div className="text-white w-full">
            {day.date}
            {day.data.map((item, index) => (
              <HistoryListItem
                key={item.id}
                itemData={item}
                showData={index === showIndex ? true : false}
                setShowIndex={() => {
                  index === showIndex
                    ? setShowIndex(null)
                    : setShowIndex(index);
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

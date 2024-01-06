import cardHist from "../assets/cardHist.svg";
import musicHist from "../assets/musicHist.svg";
import travelHist from "../assets/travelHist.svg";

interface HistoryListItemProps {
  itemData: {
    id: Number;
    title: String;
    amount: String;
    category: String;
    receiver: String;
    accNo?: String;
    time?: String;
  };
  showData?: Boolean;
  setShowIndex?: () => void;
}

interface ImageConfig {
  [key: string]: string;
}

const HistoryListItem: React.FC<HistoryListItemProps> = ({
  itemData: { id, title, amount, category, receiver, accNo, time },
  showData,
  setShowIndex,
}) => {
  const imageConfig: ImageConfig = {
    cardTransactions: cardHist,
    musicTransactions: musicHist,
    travelTransactions: travelHist,
  };

  const showCompleteData = () => {
    setShowIndex && setShowIndex();
  };

  return (
    <>
      <div
        className="w-full flex flex-row align-middle justify-between"
        onClick={showCompleteData}
        data-testid={'history-list-item-' + id}
        data-showdata={showData ? 'true' : 'false'}
      >
        <div className="flex flex-row align-middle justify-start">
          <div className="flex align-middle">
            <img src={imageConfig[`${category}`]} alt="" />
          </div>
          <div className="flex flex-col align-middle my-auto">
            <span className="text-white">{title}</span>
            <span className="text-xs text-white/60">{receiver}</span>
            {showData && <span className="text-xs text-white/60">{accNo}</span>}
            {showData && <span className="text-xs text-white/60">{time}</span>}
          </div>
        </div>
        <div className="flex text-white align-middle my-auto">{amount}</div>
      </div>
    </>
  );
};

export default HistoryListItem;

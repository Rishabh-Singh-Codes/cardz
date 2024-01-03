import cardHist from "../assets/cardHist.svg"
import musicHist from "../assets/musicHist.svg"
import travelHist from "../assets/travelHist.svg"

interface HistoryListItemProps {
    itemData: {
        title: String;
        amount: String;
        category: String;
        receiver: String;
    }
  }

interface ImageConfig {
    [key: string]: string;
  }

const HistoryListItem: React.FC<HistoryListItemProps> = ({
    itemData: {title, amount, category, receiver}
  }) => {
    const imageConfig: ImageConfig = {
        cardTransactions: cardHist,
        musicTransactions: musicHist,
        travelTransactions: travelHist,
      };
  return (
    <>
      <div className="w-full flex flex-row align-middle justify-between">
        <div className="flex flex-row align-middle justify-start">
          <div className="flex align-middle">
            <img src={imageConfig[`${category}`]} alt="" />
          </div>
          <div className="flex flex-col align-middle my-auto">
            <span className="text-white">{title}</span>
            <span className="text-xs text-white/60">{receiver}</span>
          </div>
        </div>
        <div className="flex text-white align-middle my-auto">
        {amount}
        </div>
      </div>
    </>
  );
};

export default HistoryListItem;

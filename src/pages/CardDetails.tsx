import { Link } from "react-router-dom";
import Card from "../components/Card";
import backBtn from "../assets/backBtn.svg";
import transactionHistBtn from "../assets/transactionHistBtn.svg";
import forwardHistBtn from "../assets/forwardHistBtn.svg";
import History from "./History";
import HistoryList from "../components/HistoryList";

const CardDetails = () => {
  return (
    <div className="flex flex-col h-full px-4 py-2">
      <div className="mt-1 mb-3">
        <Link to="/">
          <img src={backBtn} alt="Home" />
        </Link>
      </div>
      <div className="text-white text-3xl w-1/3 mb-3">Salary Card</div>
      <div className="mb-5">
        <Card />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="text-sm text-white/60">Balance</div>
          <div className="text-xl text-white">$2,748.00</div>
        </div>
        <div className="flex flex-row">
          <button className="mr-3">
            <img src={transactionHistBtn} alt="transaction history" />
          </button>
          <button>
            <img src={forwardHistBtn} alt="forward history" />
          </button>
        </div>
      </div>
      <div className="w-full">
        <HistoryList />
      </div>
    </div>
  );
};

export default CardDetails;

import { Link } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import CardDetails from "./CardDetails";
import cardList from "../mock-data/cardList.json";
import ComponentMenu from "../components/ComponentMenu";

const Home = () => {
  const totalBalance = cardList.data.reduce((acc, curr) => {
    acc += Number(curr.balance.split("$")[1].split(",").join(""));
    return acc;
  }, 0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow pt-20 md:pt-4 px-4">
        <ComponentMenu title="Bank Cards" />
      </div>
      <div className="flex flex-col px-4">
        <div className="text-lg md:text-sm text-white/60">Balance</div>
        <div className="text-2xl md:text-xl text-white">${totalBalance}</div>
      </div>
      <div className="scale-125 md:scale-100 flex flex-col overflow-x-scroll mt-10 mb-10 md:mt-6 px-8 py-12 md:py-0 md:px-4 -rotate-90 h-[400px] md:h-[350px]">
        {cardList.data.map((card) => (
          <div className="my-3" key={card.id}>
            <Link to="/card" state={card}>
              <Card cardData={card} position="vertical" />
            </Link>
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Home;

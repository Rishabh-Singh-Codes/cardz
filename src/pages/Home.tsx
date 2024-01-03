import { Link } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import CardDetails from "./CardDetails";
import cardList from "../mock-data/cardList.json"

const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4">
        <div className="text-white">
        {
            cardList.data.map((card) => (
                <Link to="/card" state={card}>card</Link>
            ))
        }
        </div>
      </div>
      <Navbar />
    </div>
    // <div className="flex flex-col h-full">
    //   <div className="flex-grow px-4 pt-4 mb-3">
    //     <CardDetails />
    //   </div>
    //   <Navbar />
    // </div>
  );
};

export default Home;

import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        Home
        <div className="px-3">
        <Card />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;

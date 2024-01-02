import Home from "../assets/Home.svg";
import Scan from "../assets/Scan.svg";
import History from "../assets/History.svg";
import Menu from "../assets/Menu.svg";
import HomeSelected from "../assets/HomeSelected.svg";
import ScanSelected from "../assets/ScanSelected.svg";
import HistorySelected from "../assets/HistorySelected.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className="w-full h-20 rounded-t-3xl p-4 flex items-center"
      style={{
        background:
          "linear-gradient(8.66deg, rgba(19, 27, 49, 0.92) 21.76%, rgba(47, 57, 91, 0.92) 97.66%)",
      }}
    >
      <div className="h-16 w-full flex justify-between">
        <Link to="/"><img src={pathname === "/" ? HomeSelected : Home} alt="Home" /></Link>
        <Link to="/catalogue"><img src={pathname === "/catalogue" ? ScanSelected : Scan} alt="Scan" /></Link>
        <Link to="/history"><img src={pathname === "/history" ? HistorySelected : History} alt="History" /></Link>
        <img src={Menu} alt="Menu" />
      </div>
    </div>
  );
};

export default Navbar;

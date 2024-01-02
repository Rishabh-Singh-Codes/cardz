import Home from "../assets/Home.svg";
import Scan from "../assets/Scan.svg";
import History from "../assets/History.svg";
import Menu from "../assets/Menu.svg";
import HomeSelected from "../assets/HomeSelected.svg";

const Navbar = () => {
    return (
        <div className="w-full h-20 rounded-t-3xl p-4 flex items-center" 
        style={{background: "linear-gradient(8.66deg, rgba(19, 27, 49, 0.92) 21.76%, rgba(47, 57, 91, 0.92) 97.66%)"}}>
            <div className="h-16 w-full flex justify-between">
                <img src={HomeSelected} alt="Home" />
                <img src={Scan} alt="Scan" />
                <img src={History} alt="History" />
                <img src={Menu} alt="Menu" />
            </div>
        </div>
    )
}

export default Navbar;
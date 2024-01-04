import BlueBg from "../assets/blue-bg.svg";
import OrangeBg from "../assets/orangeBg.svg";
// import OrangeBg from "../assets/orangeBg.jpeg";
// import OrangeBg from "../assets/orangeBg.png";
import wifi from "../assets/wifi.svg";
import mastercard from "../assets/mastercard.svg";
import { useState } from "react";

interface CardProps {
    position?: String; 
    cardData: {
        bankName: String;
        cardNumber: String;
        cvv: String;
        date: String;
        theme: String;
    }
  }

const Card: React.FC<CardProps> = ({
  position = "horizontal",
  cardData
}) => {
    const [showCVV, setShowCVV] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    position === "horizontal" && setShowCVV(true);
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    position === "horizontal" && setShowCVV(false);
  };
  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    position === "horizontal" && setShowCVV(false);
  };

  const {bankName, cardNumber, cvv, date, theme} = cardData;

  return (
    <div
      className={`rounded-2xl h-48 ${showCVV === false && "p-4"}`}
      style={{
        backgroundImage: `url(${theme==="blue" ? BlueBg : OrangeBg})`,
        backgroundRepeat: "no-repeat",
        // backgroundRepeat: `${theme==="orange" ? "repeat": "no-repeat"}`,
        minWidth: "100%",
      }}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => handleMouseUp(e)}
      onMouseOut={(e) => handleMouseOut(e)}
    >
      {showCVV === false ? <div className="flex flex-col">
        <div className="flex flex-row mb-3">
          <h2 className="text-white text-2xl border-r-2 pr-2 text-center align-middle">
            CB
          </h2>
          <h2 className="text-white/60 text-lg pl-2 text-center align-middle h-fit">
            {bankName}
          </h2>
        </div>
        <div className="flex flex-row justify-between align-middle mb-3">
          <div className="h-10 w-12 rounded-lg bg-[#FFFFFF4D]"></div>
          <div className="h-10 flex align-middle p-1">
            <img src={wifi} alt="wifi" />
          </div>
        </div>
        <div className="flex flex-row justify-between align-middle mb-3">
          <h2 className="text-white text-xl text-center align-middle">
            {cardNumber}
          </h2>
        </div>
        <div className="flex flex-row justify-between align-middle">
          <h2 className="text-white/60 text-sm text-center align-middle">
            {date}
          </h2>
          <h2 className="text-white text-sm text-center flex align-middle">
            <img src={mastercard} alt="wifi" />
          </h2>
        </div>
      </div>: <div className="flex flex-col">
        <div className="w-full h-12 mt-6 mb-5 bg-black/60">
        </div>
        <div className="w-[90%] m-auto px-3 h-10 bg-white/30 rounded-md flex flex-row-reverse text-2xl text-white">
            <span className="my-auto">{cvv}</span>
        </div>
      </div>
      }
    </div>
  );
};

export default Card;

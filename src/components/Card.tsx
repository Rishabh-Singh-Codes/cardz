import BlueBg from "../assets/blue-bg.svg";
import wifi from "../assets/wifi.svg";
import mastercard from "../assets/mastercard.svg";

const Card = ({
  position = "horizontal",
}: {
  position?: "horizontal" | "vertical";
}) => {
  return (
    <div
      className={`rounded-2xl ${position === "horizontal" ? "h-48" : "20"} p-4`}
      style={{
        backgroundImage: `url(${BlueBg})`,
        backgroundRepeat: "no-repeat",
        minWidth: "100%",
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row mb-3">
          <h2 className="text-white text-2xl border-r-2 pr-2 text-center align-middle">
            CB
          </h2>
          <h2 className="text-white/60 text-lg pl-2 text-center align-middle h-fit">
            Universal Bank
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
            5489 7452 5726 9827
          </h2>
        </div>
        <div className="flex flex-row justify-between align-middle">
          <h2 className="text-white/60 text-sm text-center align-middle">
            04/24
          </h2>
          <h2 className="text-white text-sm text-center flex align-middle">
            <img src={mastercard} alt="wifi"/>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;

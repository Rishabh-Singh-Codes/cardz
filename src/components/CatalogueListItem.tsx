import callCat from "../assets/callCat.svg";
import internetCat from "../assets/internetCat.svg";
import trafficCat from "../assets/trafficCat.svg";
import housingCat from "../assets/housingCat.svg";
import utilityCat from "../assets/utilityCat.svg";

interface CatalogueListItemProps {
  title: String;
  amount: String;
  category: String;
  paid: Boolean;
}

interface ImageConfig {
  [key: string]: string;
}

const CatalogueListItem: React.FC<CatalogueListItemProps> = ({
  title,
  amount,
  category,
  paid,
}) => {
  const imageConfig: ImageConfig = {
    mobile: callCat,
    internet: internetCat,
    traffic: trafficCat,
    housing: housingCat,
    utility: utilityCat,
  };
  return (
    <>
      <div className="w-full flex flex-row align-middle justify-between">
        <div className="flex flex-row align-middle justify-start">
          <div className="flex align-middle mr-3">
            <img src={imageConfig[`${category}`]} alt="" />
          </div>
          <div className="flex flex-col align-middle my-auto">
            <span className="text-lg text-white">{title}</span>
            <span className="text-xs text-white/60">{`The debt is $${amount}`}</span>
          </div>
        </div>
        <div className="flex">
          <button className={`border border-${paid ? "gray-700" : "[#7295FB]"} h-12 w-16 text-${paid ? "gray-700" : "[#7295FB]"} rounded-2xl my-auto`}>
            Pay
          </button>
        </div>
      </div>
      <div className="border border-b-[1px] border-[#2D3757] mb-2"></div>
    </>
  );
};

export default CatalogueListItem;

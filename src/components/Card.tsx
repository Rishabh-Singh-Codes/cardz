import BlueBg from "../assets/blue-bg.svg"

const Card = ({position="horizontal"}: { position?: "horizontal" | "vertical" }) => {
    const config = {
        position: {
            horizontal: {
                h: "h-20"
            }
        }
    }
  return <div className={`rounded-2xl ${position==="horizontal" ? "h-48" : "20"} p-4`} style={{backgroundImage: `url(${BlueBg})`}}>
    Card
    </div>;
};

export default Card;

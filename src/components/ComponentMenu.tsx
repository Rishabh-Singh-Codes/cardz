import userImg from "../assets/userImg.svg";

interface ComponentMenuProps {
  title: String;
}

const ComponentMenu: React.FC<ComponentMenuProps> = ({ title }) => {
  return (
    <div className="flex flex-row justify-between my-3">
      <div className="flex flex-col">
        <div className={`${title !== "Bank Cards" ? "text-3xl" : "text-5xl"} text-white`}>
          {title.split(" ")[0]}
        </div>
        <div className="text-5xl text-white">
          {title.split(" ")[1]}
        </div>
      </div>
      <div>
        <img src={userImg} alt="user pic" />
      </div>
    </div>
  );
};

export default ComponentMenu;

import userImg from "../assets/userImg.svg";

interface ComponentMenuProps {
  title: String;
}

const ComponentMenu: React.FC<ComponentMenuProps> = ({ title }) => {
  return (
    <div className="flex flex-row justify-between my-3">
      <div className="text-3xl text-white">{title}</div>
      <div>
        <img src={userImg} alt="user pic" />
      </div>
    </div>
  );
};

export default ComponentMenu;

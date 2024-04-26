import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="flex justify-between  items-center p-4  w-full">
      <h2 className="font-bold ">Gemini</h2>
      <img className="w-12 h-12 rounded-full" src={assets.user_icon} alt="" />
    </div>
  );
};

export default Navbar;

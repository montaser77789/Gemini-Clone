import { assets } from "../../assets/assets";
import Navbar from "../Navbar/Navbar";
import Input from "../Ui/Input";

const Main = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="max-w-[900px] mx-auto">
        <div className="my-16 text-[56px] text-[#c4c7c5]">
          <p className="font-semibold">
            <span className="font-bold  block bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-transparent">Hello, Montaser.</span> How can I help you today?
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#f0f4f9] h-[200px] p-3 rounded-xl flex flex-col justify-between cursor-pointer
           hover:bg-[#e6eaf1]">
            <h3>What is React ...</h3>
            <div className="self-end">
              <img src={assets.bulb_icon} className="w-10 h-10 rounded-full bg-white" />
            </div>
          </div>
          <div className="bg-[#f0f4f9] h-[200px] p-3 rounded-xl flex flex-col justify-between cursor-pointer
           hover:bg-[#e6eaf1]">            <h3>What is Html ...</h3>
            <div className="self-end">
              <img src={assets.compass_icon} className="w-10 h-10 rounded-full bg-white" />
            </div>
          </div>
          <div className="bg-[#f0f4f9] h-[200px] p-3 rounded-xl flex flex-col justify-between cursor-pointer
           hover:bg-[#e6eaf1]">            <h3>What is Css ...</h3>
            <div className="self-end">
              <img src={assets.message_icon} className="w-10 h-10 rounded-full bg-white" />
            </div>
          </div>
          <div className="bg-[#f0f4f9] h-[200px] p-3 rounded-xl flex flex-col justify-between cursor-pointer
           hover:bg-[#e6eaf1]">            <h3>What is Js ...</h3>
            <div className="self-end">
              <img src={assets.code_icon} className="w-10 h-10 rounded-full bg-white" />
            </div>
          </div>
        </div>
      <div className="mt-10">
        <Input placeholder="Enter your query" />
      </div>
      <div className="m-1 text-center">
        <span className="text-gray-600 text-[15px]">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</span>
      </div>
      </div>
    </div>
  );
};

export default Main;

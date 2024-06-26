import { useState } from "react";
import { assets } from "../../assets/assets";
import { RootState, useAppDispatch } from "../../app/store";
import { newChat } from "../../app/slices/chstSlice";
import { useSelector } from "react-redux";
const Sidepar = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();
  const inputValue = useSelector((state: RootState) => state.chat.inputValue);

  return (
    <div className="hidden sm:block min-h-screen">
      <div className=" flex  flex-col justify-between h-full bg-[#f0f4f9]  py-[11px] px-7 duration-75 ">
        <div>
          <img
            className="width-img block ml-3 cursor-pointer"
            src={assets.menu_icon}
            onClick={() => setOpen((prev) => !prev)}
          />
          <div
            className="mt-10px inline-flex items-center gap-3 py-[10px] px-4 
         bg-[#e6eaf1] text-[14px] color-gray cursor-pointer red rounded-[50px] mt-5"
            onClick={() => dispatch(newChat())}
          >
            <img className="width-img  " src={assets.plus_icon} />
            {open && <p className="font-semibold opacity-[0.7]">New Chat</p>}
          </div>
          {open && (
            <div className="mt-5 font-semibold">
              <p>Recent</p>
              <div
                className="inline-flex items-center flex-nowrap gap-3 py-[15px] px-4 hover:bg-[#e6eaf1] mt-2 
          text-[14px] color-gray cursor-pointer red rounded-[50px] 	"
              >
                <img className="width-img" src={assets.message_icon} />
                <p>{inputValue ? inputValue : "Recent"}</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className="flex items-center gap-3 py-[15px] px-4 w-full hover:bg-[#e6eaf1] rounded-[50px]
        cursor-pointer  font-semibold	"
          >
            <img className="width-img" src={assets.question_icon} />
            {open && <p>Heelp</p>}
          </div>
          <div
            className="flex items-center gap-3 py-[15px] px-4 hover:bg-[#e6eaf1] rounded-[50px]
        cursor-pointer  font-semibold	"
          >
            <img className="width-img" src={assets.history_icon} />
            {open && <p>Activity</p>}
          </div>
          <div
            className="flex items-center gap-3 py-[15px] px-4 hover:bg-[#e6eaf1] rounded-[50px]
        cursor-pointer  font-semibold	"
          >
            <img className="width-img" src={assets.setting_icon} />
            {open && <p>Seetings</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepar;

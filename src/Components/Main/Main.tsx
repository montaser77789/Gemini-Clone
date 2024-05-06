import { useSelector } from "react-redux";
import { chat, valueOnClick } from "../../app/slices/chstSlice";
import { RootState, useAppDispatch } from "../../app/store";
import { assets } from "../../assets/assets";
import Navbar from "../Navbar/Navbar";
import Input from "../Ui/Input";
import  { useState } from "react";
import PageNotFound from "../Error/PageNtoFound";

const Main = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const input = useSelector((state: RootState) => state.chat.inputValue);
  const resp = useSelector((state: RootState) => state.chat.responseValue);
  const Loading = useSelector((state: RootState) => state.chat.loading);
  const Error = useSelector((state: RootState) => state.chat.error);
  const ShowResponse = useSelector(
    (state: RootState) => state.chat.showResponse
  );

  const handleClick = async () => {
    await dispatch(chat({ props: `${inputValue}` }));
    dispatch(valueOnClick(inputValue));
  };
  if (Error) {
    return <PageNotFound/>
  }
  return (
    <div className="px-4  mx-auto  w-[100%]">
      <Navbar />

      <div className="flex flex-col justify-between min-h-screen   mx-auto ">
        <div>
          {!ShowResponse ? (
            <div className="">
              <div className="my-4  text-[56px] text-[#c4c7c5]">
                <p className="font-semibold">
                  <span className="font-bold  block bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546] text-transparent">
                    Hello, Montaser.
                  </span>{" "}
                  How can I help you today?
                </p>
              </div>

              <div className="grid   gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-auto ">
                <div
                  className="bg-[#f0f4f9] h-[170px] p-3 rounded-xl flex flex-col justify-between cursor-pointer
   hover:bg-[#e6eaf1]"
                  onClick={() => {
                    dispatch(chat({ props: "What is React ..." }));
                    dispatch(valueOnClick("What is React ..."));
                  }}
                >
                  <h3>What is React ...</h3>
                  <div className="self-end">
                    <img
                      src={assets.bulb_icon}
                      className="w-10 h-10 rounded-full bg-white"
                    />
                  </div>
                </div>
                <div
                  className="bg-[#f0f4f9] h-[170px] p-3 rounded-xl flex flex-col justify-between cursor-pointer
   hover:bg-[#e6eaf1]"
                  onClick={() => {
                    dispatch(chat({ props: "What is Html ..." }));
                    dispatch(valueOnClick("What is Html ..."));
                  }}
                >
                  {" "}
                  <h3>What is Html ...</h3>
                  <div className="self-end">
                    <img
                      src={assets.compass_icon}
                      className="w-10 h-10 rounded-full bg-white"
                    />
                  </div>
                </div>
                <div
                  className="bg-[#f0f4f9] h-[170px] p-3 rounded-xl flex flex-col justify-between cursor-pointer
   hover:bg-[#e6eaf1]"
                  onClick={() => {
                    dispatch(chat({ props: "What is Css ..." }));
                    dispatch(valueOnClick("What is Css ..."));
                  }}
                >
                  {" "}
                  <h3>What is Css ...</h3>
                  <div className="self-end">
                    <img
                      src={assets.message_icon}
                      className="w-10 h-10 rounded-full bg-white"
                    />
                  </div>
                </div>
                <div
                  className="bg-[#f0f4f9] h-[170px] p-3 rounded-xl flex flex-col justify-between cursor-pointer
   hover:bg-[#e6eaf1]"
                  onClick={() => {
                    dispatch(chat({ props: "What is Js ..." }));
                    dispatch(valueOnClick("What is Js ..."));
                  }}
                >
                  <h3>What is Js ...</h3>
                  <div className="self-end">
                    <img
                      src={assets.code_icon}
                      className="w-10 h-10 rounded-full bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) :
          
           (
            <div className=" p-3">
              <div className="flex gap-3">
                <img className="w-7 h-7" src={assets.code_icon} />
                <p>{input}</p>
              </div>
              <div className="flex gap-3">
                <img className="w-7 h-7" src={assets.gemini_icon} />
                <p className=" font-bold">{Loading ? 
                  <div className="flex gap-3 bg-[#f0f4f9] p-3 rounded-xl">Loading... <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg></div>
                :resp}</p>
              </div>
            </div>
          )}
        </div>

        <div >
          <div className=" mt-3   flex justify-between  items-center bg-[#f0f4f9]   rounded-2xl pr-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your query"
            />
            <div className="flex gap-3  items-center">
              <img
                className="w-5 h-5 rounded-full cursor-pointer"
                src={assets.gallery_icon}
              />
              <img
                className="w-5 h-5 rounded-full cursor-pointer"
                src={assets.mic_icon}
              />
              <img
                className="w-5 h-5 rounded-full cursor-pointer"
                src={assets.send_icon}
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="m-1 text-center">
            <span className="text-gray-600 text-[15px]">
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

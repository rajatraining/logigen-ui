import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";
import { ReactTyped ,Typed  } from "react-typed";

function Chat() {
  const { message, msgEnd,initPage,setInitPage } = useContext(ContextApp);
  return (
    <div className=" w-full h-[85%] flex items-center justify-center overflow-hidden overflow-y-auto px-2 py-1 scroll">
      <div className="w-full lg:w-4/5 flex flex-col h-full items-start justify-start">
     {initPage &&  <div className="flex w-full item-start justify-center">
        <div className="flex flex-col item-start justify-center w-2/4">
          <span className="flex flex-start justify-start gap-2 lg:gap-5 my-2 p-3 rounded-md">
            <img src={"bot.gif"}
            alt="user"
            className="w-20 h-20 rounded object-cover"/>
            <label class="text-slate-600 font-bold  mb-1 md:mb-0 pr-4 text-4xl" for="inline-full-name">
              LogiGen Co-Pilot
            </label>
          </span>
          <p className="block text-gray-300 font-bold text-2xl">One Click to Transform Complex Logs into Clear Insights with AI</p>
        </div>

      </div>}
     
        {message?.map((msg, i) => (
          <div className="w-full">
            <span
            key={i}
            className={
              msg.isBot
                ? "flex drop-shadow items-start justify-start  gap-2 lg:gap-5 my-2 text-slate-600 bg-slate-200 p-3 rounded-md "
                : "flex items-start end  flex-row-reverse text-slate-600 gap-2 lg:gap-5 my-2 p-3"
            }
          >
            <img
              src={msg.isBot ? "bot-logo.gif" : "/userlogo.png"}
              alt="user"
              className="w-10 h-10 rounded object-cover"
            />
           
            {/* {message.length-1==i &&  <p className="text-inherit text-[15px]">
              <ReactTyped strings={[msg?.text]} typeSpeed={2}  backSpeed={2} showCursor={false} loop={false}/> </p>} */}
            {message.length >i && 
            <p className="text-inherit text-[15px]">
              {msg?.text}
              </p>}
          </span>
          </div>
          
        ))}
        <div ref={msgEnd} />
      </div>
    </div>
  );
}

export default Chat;

import { createContext, useEffect, useRef, useState } from "react";
import { sendMsgToAI } from "../Service/service";
export const ContextApp = createContext();
const AppContext = ({ children }) => {
  const [chatValue, setChatValue] = useState("");
  const [message, setMessage] = useState([
  ]);
  const [loading, setLoading] = useState(false);
  const [initPage, setInitPage] = useState(true);
  const msgEnd = useRef(null);


  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);

  // button Click function
  const handleSend = async () => {
  if(chatValue.trim()===""){
    return;
  }
    setInitPage(false)
    setLoading(true);
    
    const text = chatValue;
    setChatValue("");
    setMessage([...message, { text, isBot: false }]);
    const res =await sendMsgToAI(text) ;
    //const res =await sendMsgToAI(text.choices[0].message.content);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
    setLoading(false);
  };
  // Enter Click function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <ContextApp.Provider
      value={{
        chatValue,
        setChatValue,
        handleSend,
        message,
        msgEnd,
        handleKeyPress,
        initPage,
        setInitPage,
        loading
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
export default AppContext;

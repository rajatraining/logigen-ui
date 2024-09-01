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
    // setLoading(true);
    console.log(message )
    const text = chatValue;
    setChatValue("");
    setMessage([...message, { text, isBot: false }]);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: "", isBot: true,ispending:true },
    ]);
    // const res ="To avoid the errors observed in the log data, several measures can be implemented. Below is an analysis of the errors along with recommendations to avoid them: 1. **Payment Processing Errors (Insufficient Funds, Card Expired)** - **Cause:** User has insufficient funds or an expired card. - **Solution:** Implement pre-validation checks before attempting payment. Notify users about any issues with their payment methods beforehand. 2. **Database Connection Timeout and Query Execution Errors** - **Cause:** Unable to connect to the database or issues with query execution. - **Solution:** - Ensure database servers are properly scaled and optimized for handling high traffic. - Implement query optimization techniques to reduce execution time. - Implement a retry mechanism for transient connection issues. - Regularly monitor and maintain database health. 3. **Data Integrity Violations** - **Cause:** Violation of database constraints such as unique constraints. - **Solution:** - Implement thorough validation checks in the application layer before inserting or updating records. - Improve database design to handle unique constraints efficiently. - Use transactions wisely to ensure data integrity and to handle errors gracefully. 4. **Transaction Rollbacks (Deadlock Detected)** - **Cause:** Deadlocks occur when two or more transactions block each other. - **Solution:** - Optimize locking strategies to minimize the risk of deadlocks. - Implement deadlock detection and retry logic in the application. - Break transactions into smaller parts to reduce the locking time. 5. **Notification Sending Failures (SMTP Server Not Reachable, Invalid Phone Number)** - **Cause:** Issues with the email server or incorrect phone number formats. - **Solution:** - Validate email addresses and phone numbers before sending notifications. - Implement a retry mechanism for transient network issues. - Configure fallback notification methods (e.g., SMS backup if email fails). 6. **Payment Retry Attempts and Gateway Timeouts** - **Cause:** Delays or failures in processing payments. - **Solution:** - Work closely with payment gateway providers to ensure their services are reliable. - Implement a retry logic with exponential backoff for handling transient timeout issues. - Provide users with clear information and alternative payment options. 7. **Order Processing and Refund Failures (Order Already Shipped, Refund Amount Exceeds Limit)** - **Cause:** Attempting to cancel or refund orders after certain actions have been completed. - **Solution:** - Implement checks to prevent cancellation/refunds for shipped orders. - Validate refund amounts against business rules before processing. - Clearly communicate refund policies to users. 8. **Cache Issues (Cache Miss, Invalidations)** - **Cause:** Cache misses or frequent invalidations leading to performance issues. - **Solution:** - Optimize cache strategy to ensure frequently accessed data is cached. - Implement proper cache invalidation logic to maintain cache consistency. By addressing these issues with the recommended solutions, many of the errors can be avoided, leading to a more stable and reliable system. Regular monitoring, proper validation, retry mechanisms, and maintaining good communication with third-party services are key factors in enhancing the overall system robustness."
    const res =await sendMsgToAI(text,message.filter(msg=>!msg.isBot).length + 1) ;
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

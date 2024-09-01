import { API_BASE_URL } from "../Configuration/Configuration";
export const sendMsgToAI = async (msg,msgCount) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({'queryIndex': msgCount, 'query': msg}),
    };
    try {
     
  const res = await ( await fetch(API_BASE_URL, requestOptions)
    .then((response)=> {
      console.log("Server call success", response);
      return response;
    })
    .catch((error)=>{
      console.log("Error from service" ,error);
      return "Error on connecting API. Please try again later."
    })
  ).text();

  return res; 
    
    } catch (error) {
      console.log("Error from service" ,error);
       return "Error on connecting API. Please try again later."
    }
  };
  
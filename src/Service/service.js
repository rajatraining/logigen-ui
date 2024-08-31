export const sendMsgToAI = async (msg) => {
    const API_URL="http://localhost:5000/api/logAalyzer?query="+msg
    const requestOptions = {
      method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.REACT_APP_GPT_KEY}`,
    //   },
    //   body: JSON.stringify({}),
    };
    try {
      //const response = await (await fetch(API_URL, requestOptions)).text();
    //   const response = await (await fetch(API_URL, requestOptions));

  const res = await ( await fetch(API_URL, requestOptions)
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
  
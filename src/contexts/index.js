import React, { createContext, useState } from "react";


  export const MainContext = createContext({});

  const MainContextProvider=(props)=>{
    const [data, setData] = useState([]);


    return(
        <MainContext.Provider value={{ data, setData }} >
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;
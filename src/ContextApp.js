import React, { createContext } from "react";
import ComA from "./ComA"

const FirstName = createContext()
const LastName = createContext()
const Context = ()=>{
        return(
            <>
              <FirstName.Provider value={"hari"}>
              <LastName.Provider value={"bol"}>
                  <ComA />
                 </LastName.Provider>
              </FirstName.Provider>
            </>
        )
}

export default Context
export {FirstName,LastName}
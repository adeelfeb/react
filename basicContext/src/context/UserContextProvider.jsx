import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)
    return(
        // What we are doing here is giving the values that need to be used in the chidern components #giving an object of data values
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>)

}

export default UserContextProvider
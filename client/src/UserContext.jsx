import { createContext, useState } from "react";

export const UserContext = createContext({});


export function UserContextProvider({children}) {
    const [userName, setUsername] = useState(null);
    const [id, setId] = useState(null);
    return(
        <UserContext.Provider value={{userName, setUsername, id, setId}}>
            {children}
        </UserContext.Provider>
    )
}
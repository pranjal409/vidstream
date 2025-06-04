import {useState, useContext, createContext} from "react";

//const {createContext, useState, useContext} = require(react);

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({children}) => {

    const [isSidebar, setIsSidebar] = useState(false);
    const [mobileShow, setmobileShow] = useState(false);

    return <UtilsContext.Provider value={{isSidebar, setIsSidebar, mobileShow, setmobileShow}} >
        {children}
    </UtilsContext.Provider>
}

export const useUtils = () => {
const utilsContext = useContext(UtilsContext);

if(!UtilsContext) return null;

return UtilsContext;
}

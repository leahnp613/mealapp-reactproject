import { useContext } from "react";
import React {useContext} from 'react';



const AppContext = React.createContext();


const AppProvider = ({children}) => {

    return(
        <AppContext.Provider value= {{name:'john', role:'student'}}>
            {children}
        </AppContext.AppProvider>
    )
}
 export const useGlobalContext = () => {
    return useContext(AppContext)
 }




export{AppContext, AppProvider}


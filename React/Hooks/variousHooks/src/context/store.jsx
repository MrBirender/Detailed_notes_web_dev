import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=> {
    const phone = "+91 9991239813"

    const value = {
        phone
    }

    return (
        <AppContext value={value}>
            {props.children}
        </AppContext>
    )
}

export default ContextProvider;
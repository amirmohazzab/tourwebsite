import { createContext, useState } from "react";

export const TourContext = createContext();


export const TourContextProvider = ({children}) => {

    const [goNext, setGoNext] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <TourContext.Provider value={{ goNext, openMenu, setGoNext, setOpenMenu }}>
            {children}
        </TourContext.Provider>
    )
}
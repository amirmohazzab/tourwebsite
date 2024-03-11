import { createContext, useState } from "react";

export const TourContext = createContext();


export const TourContextProvider = ({children}) => {

    const [goNext, setGoNext] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openHamburger, setOpenHamburger] = useState(false);

    // const handleHamburgerMenu = () => setOpenHamburger(!openHamburger)


    return (
        <TourContext.Provider value={{
             goNext, 
             openMenu, 
             setGoNext, 
             setOpenMenu, 
             openHamburger, 
             setOpenHamburger 
        }}>
            {children}
        </TourContext.Provider>
    )
}
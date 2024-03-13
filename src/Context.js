import { createContext, useState } from "react";

export const TourContext = createContext();


export const TourContextProvider = ({children}) => {

    const [goNext, setGoNext] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openHamburger, setOpenHamburger] = useState(false);

    const [theme, setTheme] = useState("light");

    const handleThemeSwitch = () => {
        setTheme(prevtheme => prevtheme === "dark" ? "light" : "dark")
    }


    return (
        <TourContext.Provider value={{
             goNext, 
             openMenu, 
             setGoNext, 
             setOpenMenu, 
             openHamburger, 
             setOpenHamburger,
             theme,
             handleThemeSwitch
        }}>
            {children}
        </TourContext.Provider>
    )
}
import { createContext, useState } from "react";

export const TourContext = createContext();


export const TourContextProvider = ({children}) => {

    const [goNext, setGoNext] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openHamburger, setOpenHamburger] = useState(false);

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');

    const handleThemeSwitch = () => {
        setTheme(prevtheme => prevtheme === "light" ? "dark" : "light")
        if (theme === 'dark') {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.setItem('theme', 'light')
        }
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
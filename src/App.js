import { useContext, useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main"
import Visitedplaces from "./components/Visitedplaces";
import MostVisitedPlaces from "./components/MostVisitedPlaces";
import TripRequest from "./components/TripRequest";
import FlexTable from "./components/FlexTable";
import { TourContext } from "./Context";
import MainSwiper2 from "./components/MainSwiper2";



const App = () => {

  const {openHamburger, theme} = useContext(TourContext);

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = () => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add("dark");
        localStorage.setItem('theme', 'dark')
        break;
      case 'light':
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme', 'light')
        break;
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break;
    }
  }, [theme]);

  darkQuery.addEventListener('change', (e) => {
    if(!("theme" in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });
  

  return (
    <div class={`bg-[#f2f2f2] ${openHamburger ? 'scroll_fixed' : ''} dark:bg-dark-600`}>
      <Nav />
      <MainSwiper2 />
      <Visitedplaces />
      <MostVisitedPlaces />
      <div class="p-4 mb-10 bg-gray-200 dark:bg-dark-800">
        <TripRequest />
      </div>
      <FlexTable />
    </div>
  );
}

export default App;

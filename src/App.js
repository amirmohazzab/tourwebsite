import { useContext, useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main"
import Visitedplaces from "./components/Visitedplaces";
import MostVisitedPlaces from "./components/MostVisitedPlaces";
import TripRequest from "./components/TripRequest";
import FlexTable from "./components/FlexTable";
import { TourContext } from "./Context";



const App = () => {

  const {openHamburger, theme} = useContext(TourContext);

  useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  }, [theme])
  

  return (
    <div class={`bg-[#f2f2f2] ${openHamburger ? 'scroll_fixed' : ''} dark:bg-dark-600`}>
      <Nav />
      <Main />
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

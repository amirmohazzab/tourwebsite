import { useContext } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main"
import Visitedplaces from "./components/Visitedplaces";
import MostVisitedPlaces from "./components/MostVisitedPlaces";
import TripRequest from "./components/TripRequest";
import FlexTable from "./components/FlexTable";
import { TourContext } from "./Context";



const App = () => {

  const {openHamburger} = useContext(TourContext);

  return (
    <div class={`bg-[#f2f2f2] ${openHamburger ? 'scroll-fixed' : ''}`}>
      <Nav />
      <Main />
      <Visitedplaces />
      <MostVisitedPlaces />
      <div class="p-4 mb-10 bg-gray-200">
        <TripRequest />
      </div>
      <FlexTable />
    </div>
  );
}

export default App;

import Nav from "./components/Nav";
import Main from "./components/Main"
import Visitedplaces from "./components/Visitedplaces";
import MostVisitedPlaces from "./components/MostVisitedPlaces";
import TripRequest from "./components/TripRequest";



const App = () => {
  return (
    <div class="bg-[#f2f2f2]">
      <Nav />
      <Main />
      <Visitedplaces />
      <MostVisitedPlaces />
      <div class="p-4 mb-10 bg-gray-200">
        <TripRequest />
      </div>
    </div>
  );
}

export default App;

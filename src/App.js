import Nav from "./components/Nav";
import Main from "./components/Main"
import Visitedplaces from "./components/Visitedplaces";
import MostVisitedPlaces from "./components/MostVisitedPlaces";


const App = () => {
  return (
    <div class="bg-[#f2f2f2]">
      <Nav />
      <Main />
      <Visitedplaces />
      <MostVisitedPlaces />
    </div>
  );
}

export default App;

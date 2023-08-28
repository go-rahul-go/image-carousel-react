import Carousel from "./components/Carousel";
import "./style.css";
import data from "./data";

function App() {
  return(
    <div className="app">
        <Carousel data={data}/>
    </div>
  )
}

export default App;

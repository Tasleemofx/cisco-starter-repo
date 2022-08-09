import Banner from "./components/Banner"
import Exhibit from "./components/Exhibit"
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="cards">
          <Exhibit heading="HEADING" childcomp="child" version="ipV4"/>
          <Exhibit heading="HEADING" childcomp="child" version="ipV6" />
      </div>
    </div>
  );
}

export default App;

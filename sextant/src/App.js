import Banner from "./components/Banner"
import Exhibit from "./components/Exhibit"
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="HEADING" childcomp="child"/>
    </div>
  );
}

export default App;

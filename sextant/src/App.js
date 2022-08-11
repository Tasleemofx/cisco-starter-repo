import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import Address from "./components/Address";
import Latency from "./components/Latency"
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="cards">
          <Exhibit>
            <Address version="ipV4"/>
          </Exhibit>
          <Exhibit>
            <Address version="ipV6"/>
          </Exhibit>
          <Exhibit>
            <Latency />
          </Exhibit>
      </div>
    </div>
  );
}

export default App;

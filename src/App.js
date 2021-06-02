import Header from "./Components/index.js";
import Text from "./Components/text.js";
import Table from "./Components/table.js";
import "./Components/color.css";
import './App.css';

function App() {
   return (
    <div className="App">
      <div class='color'>
        <Header />
        <Text />
        <Table />
      </div>
    </div>
  );
}

export default App;

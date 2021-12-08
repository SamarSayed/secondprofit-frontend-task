import "./App.css";
import './assets/scss/styles.scss';
import Routes from "./Routes";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;

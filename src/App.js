import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Router path="/checkout">
            <Header />
            <Checkout />
          </Router>
          <Router path="/">
            <Header />
            <Home />
          </Router>
        </switch>
      </div>
    </Router>
  );
}

export default App;

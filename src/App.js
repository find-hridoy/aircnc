import { Route, Switch } from "react-router-dom";
import "./App.css";
import Confirm from "./Pages/Confirm";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";
import Result from "./Pages/Result";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/details">
          <HotelDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
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
      </Switch>
    </div>
  );
}

export default App;

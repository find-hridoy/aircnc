import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddDataForm from "./Dashboard/AddDataForm";
import Confirm from "./Pages/Confirm";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";
import Result from "./Pages/Result";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/result">
            <Result />
          </Route>
          <Route exact path="/details">
            <HotelDetails />
          </Route>
          <Route exact path="/confirm">
            <Confirm />
          </Route>
          <Route exact path="/dashboard">
            <AddDataForm />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;

// {
//   // Theme
//   "workbench.colorTheme": "Dracula",
//   "editor.fontFamily": "Operator Mono, Dank Mono, Fira Code"
// }

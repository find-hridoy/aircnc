import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dataReducer } from "./reducers/dataReducer";

const store = createStore(dataReducer, composeWithDevTools());
export default store;

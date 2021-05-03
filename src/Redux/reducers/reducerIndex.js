import { combineReducers } from "redux";
import { dataReducer, allHotelDataReducer } from "./dataReducer";

export default combineReducers({
  data: dataReducer,
  allHotelData: allHotelDataReducer,
});

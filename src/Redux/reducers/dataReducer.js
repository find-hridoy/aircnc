import { ADD_DATA } from "../actions/actionsType";

const initialState = {
  data: [],
};
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };

    default:
      return state;
  }
};

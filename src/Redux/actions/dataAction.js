import { ADD_DATA, ADD_ALL_HOTEL_DATA, ADD_USER } from "./actionsType";

// Actions
export const addData = (data) => ({
  type: ADD_DATA,
  payload: data,
});

export const addALlHotelData = (allHotelData) => ({
  type: ADD_ALL_HOTEL_DATA,
  payload: allHotelData,
});

export const addUserData = (addUser) => ({
  type: ADD_USER,
  payload: addUser,
});

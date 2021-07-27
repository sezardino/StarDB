import { combineReducers } from "redux";
import favoriteReducer from "./favorites";

export default combineReducers({
  favorites: favoriteReducer,
});

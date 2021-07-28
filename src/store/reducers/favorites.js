import ls from "@/utils/localStorage";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types";

const initialState = ls.getFavorites();

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, list: [...state.list, action.payload] };

    case REMOVE_FROM_FAVORITES:
      const list = state.list.filter((item) => item.id !== action.payload);
      return { ...state, list };

    default:
      return state;
  }
};

export default favoriteReducer;

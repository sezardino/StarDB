import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types";

export const addToFavorites = (payload) => ({ type: ADD_TO_FAVORITES, payload });
export const removeFromFavorites = (id) => ({ type: REMOVE_FROM_FAVORITES, payload: id });

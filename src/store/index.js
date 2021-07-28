import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import reducer from "./reducers";
import ls from "@/utils/localStorage";

const store = createStore(reducer, composeWithDevTools());

store.subscribe(() => {
  ls.setFavorites(store.getState().favorites);
});

export default store;

import { createStore, combineReducers } from "redux";
import heroes from "../redusers/heroes";
import filters from "../redusers/filters";

const store = createStore(
  combineReducers({ heroes, filters }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import todoApp from "../store/reducer";

const store = createStore(
  todoApp,

  compose(applyMiddleware(thunk))
);

export default store;

import { combineReducers } from "redux";
import { tasksReducer } from "../store/_reducers/tasks";

const todoApp = combineReducers({
  tasksReducer,
});

export default todoApp;

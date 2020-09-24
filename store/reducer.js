import { combineReducers } from "redux";
import tasks from "../../../todo_list/todo_list/store/_reducers/tasks";

const todoApp = combineReducers({
  tasks,
});

export default todoApp;

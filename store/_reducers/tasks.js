import { ADD_TODO, GET_TODOS, SET_FORM, SET_NAME } from "../actions";

const initState = {
  todoList: [],
  form: {
    name: "",
    id: "",
  },
};

export const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        ...[state.todoList, action.payload.name],
      };
    }
    case GET_TODOS: {
      return {
        ...state,
        todoList: action.payload,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        form: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

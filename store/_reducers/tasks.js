import { ADD_TODO, GET_TODOS, DELETE_TODO, SET_NAME } from "../actions";

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
        todoList: [...state.todoList, action.payload],
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
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

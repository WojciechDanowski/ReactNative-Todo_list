import { ADD_TODO, GET_TODOS, DELETE_TODO } from "../actions";
export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://react-native-todo-list-461a3.firebaseio.com/todos.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(todo),
        }
      );

      dispatch({ type: ADD_TODO, payload: todo });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://react-native-todo-list-461a3.firebaseio.com/todos/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      dispatch({
        type: DELETE_TODO,
        payload: { id },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://react-native-todo-list-461a3.firebaseio.com/todos.json`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const responseBody = await response.json();
      let todos = [];
      console.log(responseBody);
      Object.keys(responseBody || {}).forEach((key) => {
        const todo = { ...responseBody[key], id: key };
        todos = [...todos, todo];
      });

      dispatch({ type: GET_TODOS, payload: todos });
    } catch (e) {
      console.log(e);
    }
  };
};

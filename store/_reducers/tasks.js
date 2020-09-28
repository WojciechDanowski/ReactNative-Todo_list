const initState = {
  todoList: ["cr", "a teraz cr"],
};

export const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, deleteTodo, editTodo } from "../store/_actions/todoServices";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "orange",
    width: 250,
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addingButton: {
    marginLeft: "auto",
    alignSelf: "center",
  },
  editingButton: {
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 40,
  },
});

export const TodosList = () => {
  const todos = useSelector((state) => state.tasksReducer.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const handleTodoDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleTodoEdit = (id) => {
    dispatch(editTodo(id));
  };
  return (
    <View>
      {todos?.map((todo) => {
        return (
          <View key={todo.id} style={styles.container}>
            <Text style={styles.text}>{todo.name}</Text>
            <View styles={styles.buttonsContainer}>
              <Button
                onPress={() => handleTodoDelete()}
                style={styles.addingButton}
                title="-"
              />
              <Button
                onPress={() => handleTodoEdit}
                style={styles.editingButton}
                title="<>"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

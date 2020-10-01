import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, deleteTodo } from "../store/_actions/todoServices";
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
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
  linetroughtText: {
    alignSelf: "center",
    textDecorationLine: "line-through",
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
  const [line, setLine] = useState(false);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const handleTodoDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <View>
      {todos.map((todo) => {
        return (
          <View key={todo.id} style={styles.container}>
            <Text
              onPress={() => setLine(!line)}
              style={line === true ? styles.linetroughtText : styles.text}
            >
              {todo.name}
            </Text>
            <View styles={styles.buttonsContainer}>
              <Button
                onPress={() => handleTodoDelete(todo.id)}
                style={styles.addingButton}
                title="-"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

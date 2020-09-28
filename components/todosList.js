import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export const TodosList = () => {
  const todos = useSelector((state) => state.tasksReducer.todoList);

  return (
    <View>
      {todos.map((todo) => {
        return (
          <View style={styles.container}>
            <Text>{todo}</Text>
            <Button title="-" />
            <Button title="=" />
          </View>
        );
      })}
    </View>
  );
};

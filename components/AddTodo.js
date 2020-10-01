import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addTodo, getTodos } from "../store/_actions/todoServices";
import { v4 as uuidv4 } from "uuid";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  Text: {
    fontSize: 25,
    width: 30,
  },
  Input: {
    color: "#000",
  },
});

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    const payload = { id: uuidv4(), name: value };
    dispatch(addTodo(payload));
    setValue("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your activity there"
        style={styles.Input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      {value.length > 2 && (
        <Button style={styles.Text} title="+" onPress={() => handleAddTodo()} />
      )}
    </View>
  );
};

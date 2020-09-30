import React, { useState } from "react";
import { SET_FORM, SET_NAME } from "../store/actions";
import { TextInput, StyleSheet, View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodos } from "../store/_actions/todoServices";
import { v4 as uuidv4 } from "uuid";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightGray",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  Text: {
    fontSize: 25,
    width: 30,
  },
  Input: {},
});

export const AddTodo = () => {
  const [value, onChangeText] = useState();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.tasksReducer.form);
  const handleAddTodo = () => {
    const payload = formData;

    dispatch(addTodo(payload));
    dispatch(getTodos());
  };
  const onChangeTexte = (e) => {
    dispatch({
      type: SET_NAME,
      payload: {
        name: e,
        id: uuidv4(),
      },
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your activity there"
        style={styles.Input}
        value={value}
        onChangeText={onChangeTexte}
      />

      {formData.name?.length > 2 && (
        <Button style={styles.Text} title="+" onPress={() => handleAddTodo()} />
      )}
    </View>
  );
};

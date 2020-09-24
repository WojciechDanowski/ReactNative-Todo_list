import React, { useState } from "react";
import { TextInput } from "react-native";

export const AddTodo = () => {
  const [value, onChangeText] = useState("Useless Placeholder");

  return (
    <TextInput value={value} onChangeText={(text) => onChangeText(text)} />
  );
};

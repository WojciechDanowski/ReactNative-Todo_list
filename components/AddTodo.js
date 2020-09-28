import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text, Button } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Text: {
    fontSize: 25,
    width: 30,
  },
  Input: {},
});
export const AddTodo = () => {
  const [value, onChangeText] = useState();

  const handleAddTodo = () => {};

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your activity there"
        style={styles.Input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />

      {value?.length > 2 && (
        <Button style={styles.Text} title="+" onPress={() => handleAddTodo()} />
      )}
    </View>
  );
};

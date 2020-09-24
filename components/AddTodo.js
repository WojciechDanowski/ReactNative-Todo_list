import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text, Button } from "react-native";

export const AddTodo = () => {
  const [value, onChangeText] = useState();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
    },
    Text: {
      marginLeft: 5,
      fontSize: 25,
      width: 30,
    },
    Input: {
      height: 40,
      paddingLeft: 6,
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your activity there"
        style={styles.Input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />

      {value && <Button style={styles.Text} title="+" />}
    </View>
  );
};

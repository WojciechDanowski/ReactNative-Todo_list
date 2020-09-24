import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { State } from "react-native-gesture-handler";

export default function App() {
  const [textValue, setTextValue] = useState("Steven CR?");

  handleButtonClick = () => {
    setTextValue("Adrian CR?");
  };

  return (
    <View style={styles.container}>
      <Text>{textValue}</Text>
      <Button title="click me" onPress={() => handleButtonClick()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

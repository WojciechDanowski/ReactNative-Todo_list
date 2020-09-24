import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  const [textValue, setTextValue] = useState("Steven CR?");

  handleButtonClick = () => {
    setTextValue("Adrian CR?");
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>{textValue}</Text>
        <Button title="click me" onPress={() => handleButtonClick()}></Button>
        <StatusBar style="auto" />
      </View>
    </Provider>
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

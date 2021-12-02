import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const AppButton = ({ title, onPress, style, styleText }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2F82BC",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});

export default AppButton;

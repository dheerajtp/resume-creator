import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../../assets/styles/style";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonColor}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

import React from "react";
import { StyleSheet, Text } from "react-native";

import styles from "../config/styles";

export default function AppText({
  title = false,
  fontSize = 20,
  color,
  content,
  numberOfLines,
  style,
}) {
  const textStyle = StyleSheet.create({
    title: {
      fontSize: fontSize && !title ? fontSize : title ? 40 : fontSize,
      fontWeight: "bold",
      color: color ? color : styles.colors.primary,
      ...style,
    },
  });

  return (
    <Text style={textStyle.title} numberOfLines={numberOfLines}>
      {content}
    </Text>
  );
}

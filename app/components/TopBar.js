import React from "react";
import { View, StyleSheet, Text } from "react-native";

import styles from "../config/styles";
import AppText from "./AppText";

export default function TopBar({ title, Btn }) {
  const style = StyleSheet.create({
    container: {
      height: 88,
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingHorizontal: Btn ? 0 : "10%",
      backgroundColor: styles.colors.light,
    },
  });
  return (
    <View style={style.container}>
      {Btn ? Btn : null}
      <AppText title={true} content={title}></AppText>
    </View>
  );
}

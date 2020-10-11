import React from "react";
import { View, StyleSheet, Text } from "react-native";

import styles from "../config/styles";
import { useRoute } from "../contexts/useRoute";
import AppText from "./AppText";

export default function TopBar({ title }) {
  const { selectedRoute, setSelectedRoute } = useRoute();

  return (
    <View style={style.container}>
      <AppText title={true} content={title}></AppText>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 88,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "10%",
    backgroundColor: styles.colors.light,
  },
});

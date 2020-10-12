import React from "react";
import { View } from "react-native";

import styles from "../config/styles";
import { useGlobalContext } from "../contexts/useGlobalContext";

export default function MainContainer({ Component }) {
  const { state, dispatch } = useGlobalContext();

  return <View style={styles.container}>{Component}</View>;
}

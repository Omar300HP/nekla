import React from "react";
import { View } from "react-native";

import styles from "../config/styles";
import { useRoute } from "../contexts/useRoute";

export default function MainContainer({ Component }) {
  const { selectedRoute, setSelectedRoute } = useRoute();

  return <View style={styles.container}>{Component}</View>;
}

import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "../config/styles";
import { useRoute } from "../contexts/useRoute";

export default function NavBar() {
  const { selectedRoute, setSelectedRoute } = useRoute();
  const screens = [
    {
      icon: "home",
      name: "home",
      fn: () => {
        setSelectedRoute("home");
      },
    },
    {
      icon: "flag",
      name: "goals",
      fn: () => {
        setSelectedRoute("goals");
      },
    },
    {
      icon: "back-in-time",
      name: "report",
      fn: () => {
        setSelectedRoute("report");
      },
    },
  ];

  return (
    <View style={style.container}>
      {screens.map((route, index) => {
        return (
          <TouchableHighlight
            underlayColor={styles.colors.light}
            style={[
              style.touchContainer,
              selectedRoute === route.name
                ? {
                    backgroundColor: styles.colors.light,
                    // borderColor: styles.colors.primary,
                    // borderWidth: 10,
                  }
                : null,
            ]}
            onPress={() => {
              route.fn();
            }}
            key={index}
          >
            <View style={style.iconContainer}>
              <Entypo
                name={route.icon}
                size={selectedRoute === route.name ? 54 : 34}
                style={selectedRoute !== route.name && { opacity: 0.6 }}
                color={styles.colors.primary}
              />
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 85,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  touchContainer: {
    width: "33.3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // borderColor: styles.colors.primary,
    // borderTopWidth: 2,
    // borderLeftWidth: 2,
    // borderRightWidth: 2,
    // borderRadius: 5,
    backgroundColor: styles.colors.primary2,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

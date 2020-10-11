import React, { useState } from "react";
import { Text, View } from "react-native";

import styles from "./app/config/styles";
import { routeContext } from "./app/contexts/useRoute";

import NavBar from "./app/components/NavBar";
import MainContainer from "./app/components/MainContainer";
import Home from "./app/screens/home/Home";

export default function App() {
  const [selectedRoute, setSelectedRoute] = useState("home");
  const routes = {
    home: <Home />,
  };
  return (
    <View style={styles.appContainer}>
      <routeContext.Provider value={{ selectedRoute, setSelectedRoute }}>
        <MainContainer Component={routes[selectedRoute]} />
        <NavBar />
      </routeContext.Provider>
    </View>
  );
}

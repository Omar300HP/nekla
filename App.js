import React, { useReducer, useState } from "react";
import { Text, View } from "react-native";

import styles from "./app/config/styles";
import { globalContext } from "./app/contexts/useGlobalContext";

import NavBar from "./app/components/NavBar";
import MainContainer from "./app/components/MainContainer";
import Home from "./app/screens/home/Home";

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ROUTE":
      return { ...state, route: action.payload };
    case "ADD_MONEY":
      return {
        ...state,
        currentMoney: parseInt(state.currentMoney) + parseInt(action.payload),
      };
    case "SUBSTRACT_MONEY":
      return {
        ...state,
        currentMoney: parseInt(state.currentMoney) - parseInt(action.payload),
      };

    default:
      return state;
  }
};

const initialState = {
  route: "home",
  currentMoney: 75000000,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const routes = {
    home: <Home />,
  };
  return (
    <View style={styles.appContainer}>
      <globalContext.Provider value={{ state, dispatch }}>
        <MainContainer Component={routes[state.route]} />
        <NavBar />
      </globalContext.Provider>
    </View>
  );
}

import React, { Fragment, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Entypo } from "@expo/vector-icons";

import Icon from "../../assets/main-icon.svg";
import AppText from "../../components/AppText";

import TopBar from "../../components/TopBar";

import styles from "../../config/styles";
import AddMoney from "./AddMoney";

export default function Home() {
  const [currentMoney, setCurrentMoney] = useState(75000000);
  const [modalVisible, setModalVisible] = useState(false);

  const homeBtns = [
    {
      name: "add",
      fn: () => {
        setModalVisible(true);
      },
      icon: "plus",
    },
    {
      name: "sub",
      fn: () => {
        alert("GodDamn!");
      },
      icon: "minus",
    },
  ];

  return (
    <>
      <AddMoney
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        currentMoney={currentMoney}
        setCurrentMoney={setCurrentMoney}
      />
      <TopBar title={"Home"} />
      <View style={style.part1}>
        <Icon height={166} width={152} />
      </View>
      <View style={style.part2}>
        <View style={style.moneyAmountBadge}>
          <AppText fontSize={28} content={`$ ${currentMoney} `} />
        </View>
      </View>
      <View style={style.part3}>
        <View style={style.iconsContainer}>
          {homeBtns.map((btn, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={style.iconContainer}
                onPress={() => {
                  btn.fn();
                }}
              >
                <Entypo
                  name={btn.icon}
                  size={60}
                  color={styles.colors.primary}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  part1: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 10,
  },
  part2: {
    flex: 2,
    width: "100%",
    flexShrink: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  part3: {
    flex: 3,
    width: "100%",
    flexShrink: 1,

    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  moneyAmountBadge: {
    marginTop: 25,
    width: 189,
    height: 62,
    borderColor: styles.colors.border,
    backgroundColor: styles.colors.white,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  iconsContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: styles.colors.light,
    borderRadius: 35,
    elevation: 10,
  },
});

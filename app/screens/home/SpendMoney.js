import React, { Fragment, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Entypo } from "@expo/vector-icons";

import AppText from "../../components/AppText";
import TopBar from "../../components/TopBar";

import styles from "../../config/styles";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import AppTextInput from "../../components/AppTextInput";
import MoneyInput from "../../components/MoneyInput";

export default function SpendMoney({ setShowSpendMoney }) {
  const { state, dispatch } = useGlobalContext();
  const moneyPlaceHolder = "Ex. 750$";
  const [moneyToSub, setMoneyToSub] = useState(moneyPlaceHolder);

  const backBtn = (
    <TouchableOpacity
      style={style.chevronBtn}
      onPress={() => {
        setShowSpendMoney(false);
      }}
    >
      <Entypo name="chevron-left" size={34} color={styles.colors.primary} />
    </TouchableOpacity>
  );
  return (
    <>
      <TopBar Btn={backBtn} title={"Spendings"} />
      <View style={style.part1}></View>
      <View style={style.part2}>
        <AppText content={"Money Amount"} fontSize={28} />
        <MoneyInput
          value={moneyToSub}
          placeHolder={moneyPlaceHolder}
          setValue={setMoneyToSub}
        />
      </View>
      <View style={style.part3}>
        <TouchableOpacity
          style={style.modalbtn}
          onPress={() => {
            if (moneyToSub !== moneyPlaceHolder && parseInt(moneyToSub)) {
              dispatch({ type: "SUBSTRACT_MONEY", payload: moneyToSub });
              setShowSpendMoney(false);
            }
          }}
        >
          <AppText content={"Spend"} />
        </TouchableOpacity>
      </View>
      <View style={style.part4}></View>
    </>
  );
}

const style = StyleSheet.create({
  part1: {
    flex: 5,
    width: "100%",
    backgroundColor: "red",
  },
  part2: {
    flex: 3,
    width: "100%",
    flexShrink: 1,
    flexDirection: "row",
    paddingHorizontal: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  part3: {
    flex: 3,
    flexShrink: 1,
    justifyContent: "flex-end",
  },
  chevronBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  modalbtn: {
    backgroundColor: styles.colors.light,
    borderColor: styles.colors.borderDark,
    marginTop: 30,
    borderRadius: 17,
    paddingVertical: 8,
    paddingHorizontal: 20,
    elevation: 2,
  },
  part4: {
    flex: 3,
    width: "100%",
    flexShrink: 1,
  },
});

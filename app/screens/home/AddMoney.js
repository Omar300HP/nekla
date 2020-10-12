import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppText from "../../components/AppText";
import AppTextInput from "../../components/AppTextInput";
import MoneyInput from "../../components/MoneyInput";

import styles from "../../config/styles";
import { useGlobalContext } from "../../contexts/useGlobalContext";

export default function AddMoney({ modalVisible, setModalVisible }) {
  const { state, dispatch } = useGlobalContext();
  const moneyPlaceHolder = "Ex. 750$";

  const [moneyToAdd, setMoneyToAdd] = useState(moneyPlaceHolder);

  useEffect(() => {
    if (!modalVisible) {
      setMoneyToAdd(moneyPlaceHolder);
    }
  }, [modalVisible]);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={style.centeredView}>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <View style={style.modalView}>
              <AppText content={"Adding Money"} fontSize={32} />
              <MoneyInput
                value={moneyToAdd}
                placeHolder={moneyPlaceHolder}
                setValue={setMoneyToAdd}
              />
              <TouchableOpacity
                style={style.modalbtn}
                onPress={() => {
                  if (moneyToAdd !== moneyPlaceHolder && parseInt(moneyToAdd)) {
                    dispatch({ type: "ADD_MONEY", payload: moneyToAdd });
                    setModalVisible(false);
                  }
                }}
              >
                <AppText content={"Add"} />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: styles.colors.white,
    borderRadius: 33,
    width: "80%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
});

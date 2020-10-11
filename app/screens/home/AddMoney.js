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

import styles from "../../config/styles";

export default function AddMoney({
  modalVisible,
  setModalVisible,
  setCurrentMoney,
  currentMoney,
}) {
  const [moneyToAdd, setMoneyToAdd] = useState("Ex. 750$");

  useEffect(() => {
    if (!modalVisible) {
      setMoneyToAdd("Ex. 750$");
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
              <AppTextInput
                keyboardType="numeric"
                style={[
                  styles.input,
                  {
                    width: 127,
                    height: 62,
                    fontSize: 16,
                    color:
                      moneyToAdd === "Ex. 750$"
                        ? styles.colors.light
                        : styles.colors.primary,
                  },
                ]}
                maxLength={8}
                onFocus={() => {
                  if (moneyToAdd === "Ex. 750$") {
                    setMoneyToAdd(null);
                  }
                }}
                value={moneyToAdd}
                onChangeText={(text) => {
                  setMoneyToAdd(parseInt(text));
                }}
              />
              <TouchableOpacity
                style={style.modalbtn}
                onPress={() => {
                  setCurrentMoney(parseInt(currentMoney) + moneyToAdd);
                  setModalVisible(false);
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

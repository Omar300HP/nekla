import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const colors = {
  backgroundColor: "#F8F2F1",
  primary: "#EF866B",
  primary2: "#F7EDEB",
  light: "#FBE5E0",
  border: "#F1A997",
  borderDark: "#707070",
  white: "#FFFFFF",
};

export default styles = {
  colors,
  ...StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: colors.backgroundColor,
      alignItems: "center",
      justifyContent: "space-between",
    },
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    input: {
      borderColor: colors.border,
      borderRadius: 27,
      elevation: 5,
      margin: 10,
      marginTop: 20,
      backgroundColor: colors.white,
      minWidth: 70,
      height: 40,
      paddingHorizontal: 20,
    },
  }),
};

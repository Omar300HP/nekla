import React from "react";
import AppTextInput from "./AppTextInput";

export default function MoneyInput({ value, placeHolder, setValue }) {
  return (
    <AppTextInput
      keyboardType="numeric"
      style={[
        styles.input,
        {
          width: 127,
          height: 62,
          fontSize: 16,
          color:
            value === placeHolder ? styles.colors.light : styles.colors.primary,
        },
      ]}
      maxLength={8}
      onFocus={() => {
        if (value === placeHolder) {
          setValue(null);
        }
      }}
      value={value}
      onChangeText={(text) => {
        setValue(parseInt(text));
      }}
    />
  );
}

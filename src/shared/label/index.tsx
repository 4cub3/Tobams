import { StyleSheet, Text, View, TextProps } from "react-native";
import React from "react";
import { label_text_lg, label_text_sm } from "@/constants/font-sizes";

interface Props extends TextProps {
  type?: "small" | "large" | "medium";
  children: React.ReactNode | string;
  textStyle?: object;
}

const Label = ({ children, type, textStyle, ...props }: Props) => {
    if (type === "large") {
        return (
          <Text style={[textStyle, styles.textLargeStyle, styles.textStyle]} {...props}>
            {children}
          </Text>
        );
      }
  if (type === "medium") {
    return (
      <Text style={[textStyle, styles.textMediumStyle, styles.textStyle]} {...props}>
        {children}
      </Text>
    );
  }
  return <Text style={[textStyle, styles.textStyle]} {...props}>{children}</Text>;
};

export default Label;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "poppins-medium",
    fontSize: label_text_sm,
    lineHeight: 21,
    // letterSpacing: 3,
  },
  textMediumStyle: {
    fontSize: label_text_lg,
    lineHeight: 24,
    // letterSpacing: 3,
  },
  textLargeStyle: {
    fontSize: 18,
    lineHeight: 27,
    // letterSpacing: 3,
  },
});

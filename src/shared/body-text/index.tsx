import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";
import { bodyTextgray } from "@/constants/colors";
import { body_text_sm } from "@/constants/font-sizes";

interface Props extends TextProps {
  children: React.ReactNode | string;
  textStyle?: object;
}

const BodyText = ({ children, textStyle, ...props }: Props) => {
  return <Text style={[textStyle, styles.textStyle]}>{children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "poppins-regular",
    fontSize: body_text_sm,
    lineHeight: 18,
    color: bodyTextgray
  },
});

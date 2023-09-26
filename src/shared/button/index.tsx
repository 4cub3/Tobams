import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { tomatoRed, white } from "@/constants/colors";

interface Props extends TouchableOpacityProps {
  containerStyle?: object;
  children: React.ReactNode;
  textStyle?: object;
  type?: "filled" | "outlined";
}

const Button: React.FC<Props> = ({
  textStyle,
  containerStyle,
  children,
  type,
  ...props
}) => {
  if (type === "outlined") {
    return (
      <TouchableOpacity style={[containerStyle, styles.outlined]} {...props}>
        <Text style={[textStyle, styles.textOutlinedStyle]}>{children}</Text>
      </TouchableOpacity>
    );
  }
  if (type === "filled") {
    return (
      <TouchableOpacity style={[containerStyle, styles.container]} {...props}>
        <Text style={[textStyle, styles.textStyle]}>{children}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={[containerStyle, styles.container]} {...props}>
      <Text style={[textStyle, styles.textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: tomatoRed,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: white,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "poppins-medium",
  },
  outlined: {
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderColor: tomatoRed,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  textOutlinedStyle: {
    color: tomatoRed,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "poppins-medium",
  },
});

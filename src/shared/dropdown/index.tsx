import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Label from "../label";
import { Pressable } from "react-native";
import { gray } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
type Props = {
  title?: string;
  children: React.ReactNode;
};

const Dropdown = ({ children, title }: Props) => {
  const [contentIsVisible, setContentIsVisible] = useState(false);
  const toggleContentVisibility = () => {
    setContentIsVisible((prev) => !prev);
  };

  return (
    <TouchableOpacity
      onPress={toggleContentVisibility}
      style={styles.container}
    >
      <View style={styles.labelContainerStyle}>
        <Label type="medium">{title}</Label>
        <Ionicons
          name={contentIsVisible ? "chevron-up" : "chevron-down"}
          size={16}
        />
      </View>
      <View
        style={[{ height: contentIsVisible ? "auto" : 0, overflow: "hidden" }]}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    // borderTopWidth: 1,
    borderColor: "#E1E5E9",
  },
  contentStyle: {
    borderWidth: 1,
    height: 0,
  },
  labelContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
});

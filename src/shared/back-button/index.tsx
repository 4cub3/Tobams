import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ParamsList } from "@/types/general-types";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  navigation: StackNavigationProp<ParamsList, "item">;
};

const BackButton = ({ navigation }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.goBack}
    >
      <Ionicons name="chevron-back" size={16} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  goBack: {
    position: "absolute",
    left: 6,
    top: 0,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E1E5E9",
  },
});

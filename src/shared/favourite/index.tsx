import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { gray, tomatoRed } from "@/constants/colors";

interface Props extends TouchableOpacityProps  {
favourite?: boolean;
};

const Favourite = ({favourite,...props}: Props) => {

  return (
    <TouchableOpacity {...props}>
      <Ionicons name={favourite ? "heart" : "heart-outline"} size={24} color={favourite ? tomatoRed : gray} />
    </TouchableOpacity>
  );
};

export default Favourite;

const styles = StyleSheet.create({});

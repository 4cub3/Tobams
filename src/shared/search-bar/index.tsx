import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
} from "react-native";
import React from "react";
import { black, tomatoRed } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

interface Props extends TextInputProps {
  containerStyle?: object;
  inputStyle?: object;
}

const Search: React.FC<Props> = ({ containerStyle,inputStyle, ...props }: Props) => {
  return (
    <View style={[containerStyle, styles.container]}>
      <Ionicons name="search" color={black} size={18} />
      <TextInput {...props} placeholder="Search" cursorColor={tomatoRed} style={[inputStyle, styles.inputStyle]} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth:1,
    borderColor: "#E1E5E9",
    borderRadius:8,
    padding:10
  },
  inputStyle:{
    fontSize:14,
    fontFamily:'poppins-regular',
    width: '100%',
  }
});

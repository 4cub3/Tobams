import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { label_text_sm } from "@/constants/font-sizes";
import { black, gray } from "@/constants/colors";

type Props = {
  containerStyle?: object;
  getValue?: (val: number) => void;
  value?: string;
  type?: 'horizontal' | 'vertical';
};

const Counter = ({ containerStyle,type, getValue, value }: Props) => {
  const [counter, setCounter] = useState(value ? +value : 1);
  const increaseHandler = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseHandler = () => {
    setCounter((prev) => (prev <= 1 ? 1 : prev - 1));
  };
  useLayoutEffect(() => {
    if (getValue) {
      getValue(counter);
    }
  }, [counter]);
  if(type === 'vertical'){
    return ( 
    <KeyboardAvoidingView behavior="position">
      <View style={[containerStyle, styles.verticalContainer]}>
        <TouchableOpacity
          style={[styles.buttonVerticalStyle]}
          onPress={decreaseHandler}
          disabled={counter <= 1}
        >
          <FontAwesome name="minus" size={10} />
        </TouchableOpacity>
        <TextInput
          value={value ? value : counter.toString()}
          style={[styles.textInputStyle]}
          keyboardType="number-pad"
          maxLength={3}
          onChangeText={(val) => {
            setCounter(+val);
          }}
        />
        <TouchableOpacity
          style={[styles.buttonVerticalStyle]}
          onPress={increaseHandler}
        >
          <FontAwesome name="plus" size={10} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  }
  return (
    <KeyboardAvoidingView behavior="position">
      <View style={[containerStyle, styles.container]}>
        <TouchableOpacity
          style={[styles.buttonStyle]}
          onPress={decreaseHandler}
          disabled={counter <= 0}
        >
          <FontAwesome name="minus" size={10} color={counter <= 1 ? '#E1E5E9' : black} />
        </TouchableOpacity>
        <TextInput
          value={value ? value : counter.toString()}
          style={[styles.textInputStyle]}
          keyboardType="number-pad"
          maxLength={3}
          onChangeText={(val) => {
            setCounter(+val);
          }}
        />
        <TouchableOpacity
          style={[styles.buttonStyle]}
          onPress={increaseHandler}
        >
          <FontAwesome name="plus" size={10} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Counter;
const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent:'space-between'
  },
  buttonStyle: {
    padding: 14,
    borderWidth: 1,
    borderColor: "#E1E5E9",
    borderRadius: 8,
  },
  textInputStyle: {
    fontFamily: 'poppins-semi-bold',
    fontSize:label_text_sm,
    lineHeight:21,
    textAlign: 'center'
  },
  verticalContainer: {
    alignItems: "center",
    gap: 5,
    justifyContent:'space-between'
  },
  buttonVerticalStyle: {
    padding: 14,
    // borderWidth: 1,
    borderColor: "#E1E5E9",
    borderRadius: 8,
  },
});

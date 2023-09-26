import { StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { white } from "@/constants/colors";

interface ContainerProps extends ViewProps {
  containerStyle?: object;
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({
  containerStyle,
  children,
  ...props
}) => {
  return (
    <View style={[containerStyle, styles.container]} {...props}>
      {children}
    </View>
  );
};

export default Container;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 16,
  },
});

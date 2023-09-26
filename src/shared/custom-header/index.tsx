import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { gray, white } from "@/constants/colors";
import { Label } from "..";
// import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
// import { ParamsList } from "@/types/general-types";
type Props = {
  navigation: any;
  headerRight?: React.ReactNode;
  headerLeft?: React.ReactNode;
  title?: string;
  back?: boolean;
};

const Header = ({
  navigation,
  headerRight,
  headerLeft,
  title,
  back,
}: Props) => {
  return (
    <View style={styles.container}>
      {headerLeft && headerLeft}
      {back && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.goBack}
        >
          <Ionicons name="chevron-back" size={16} />
        </TouchableOpacity>
      )}

      <Label type="medium" textStyle={styles.headText}>{title}</Label>
      {<View style={styles.headerRight}>{headerRight}</View>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E1E5E9",
    borderBottomWidth: 1,
    backgroundColor: white
  },
  goBack: {
    position: "absolute",
    left: 6,
    top: 0,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E1E5E9",
  },
  headText: {
    textAlign: "center",
    width: "100%",
  },
  headerRight: {
    position: "absolute",
    left: 6,
    top: 0,
    padding: 10,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, Search } from "@/shared";
import { MenuList } from "@/component/menu-component";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamsList } from "@/types/general-types";

type Props = {
    navigation?: BottomTabNavigationProp<ParamsList, 'bottomTab'>

};

const Menu = ({navigation}: Props) => {
  return (
    <Container>
      <View style={styles.searchContainer}>
        <Search />
        <MenuList navigation={navigation}/>
      </View>
    </Container>
  );
};

export default Menu;

const styles = StyleSheet.create({
    searchContainer:{
        paddingVertical:14,
    }
});

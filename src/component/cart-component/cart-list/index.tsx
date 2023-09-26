import { FlatList, StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { Cart } from "@/store/cart-context";
import CartItem from "../cart-item";
import { Button, Label } from "@/shared";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamsList, Path } from "@/types/general-types";
type Props = {
  data: Cart[];
  navigation: BottomTabNavigationProp<ParamsList , 'cart'>
};

const CartList: FC<Props> = ({ data, navigation }: Props) => {
  return (
    <FlatList
      data={data}
      style={{ marginBottom: 100 }}
      keyExtractor={(item) => item.item?.id!}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => {
        return (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical:50 }}
          >
            <Label textStyle={{ textAlign: "center" }}>
              You have no item in your cart, goto menu page and  add a new item to your cart{" "}
            </Label>
            <Button containerStyle={{marginTop:20}} onPress={()=>{
                navigation.navigate(Path.MENU)
            }}>Goto Menu</Button>
          </View>
        );
      }}
      renderItem={({ item }) => (
        <CartItem
          item={item.item}
          amount={item.amount}
          id={item.id}
          quantity={item.quantity}
        />
      )}
    />
  );
};

export default CartList;

const styles = StyleSheet.create({});

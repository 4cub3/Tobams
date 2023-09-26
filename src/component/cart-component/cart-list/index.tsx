import { FlatList, StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { Cart } from "@/store/cart-context";
import CartItem from "../cart-item";

type Props = {
  data: Cart[];
};

const CartList: FC<Props> = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      style={{ marginBottom: 100 }}
      keyExtractor={(item) => item.item?.id!}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => {
        return (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ textAlign: "center" }}>
              You have no item in your cart, add a new item to your cart{" "}
            </Text>
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

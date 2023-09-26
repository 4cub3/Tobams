import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useContext, useLayoutEffect } from "react";
import { Cart, CartContext } from "@/store/cart-context";
import { Counter, Label } from "@/shared";
import { tomatoRed } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
interface Props extends Cart {}

const CartItem: React.FC<Props> = ({ amount, item, quantity, id }) => {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const { image, title, price } = item!;
  const { removeCartItem, addItemToCart } = useContext(CartContext);
  
  return (
    <Pressable style={styles.container}>
      <View style={styles.itemDetails}>
        <View style={{ width: 92, height: 92 }}>
          <Image source={image} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={styles.textContainer}>
          <Label type="medium">{title}</Label>
          <Label type="medium" textStyle={{ color: tomatoRed }}>
            {price}
          </Label>
          <TouchableOpacity
            onPress={() => {
              removeCartItem(id);
            }}
          >
            <Ionicons name="trash-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <Counter
        value={newQuantity?.toString()}
        type="vertical"
        getValue={(val) => {
          setNewQuantity(val);
          addItemToCart({ amount, id, item, quantity: val });
        }}
      />
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 14,
  },
  itemDetails: {
    flexDirection: "row",
    gap: 10,
  },
  textContainer: {
    gap: 10,
    justifyContent: "space-between",
  },
});

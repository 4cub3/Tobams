import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { Button, Container } from "@/shared";
import { CartList } from "@/component/cart-component";
import { CartContext } from "@/store/cart-context";
import { Label } from "@/shared";
import { gray, white } from "@/constants/colors";
type Props = {};

const Cart = (props: Props) => {
  const { cart,totalAmount } = useContext(CartContext);
  return (
    <>
      <Container>
        <CartList data={cart!} />
      </Container>
      {cart?.length! > 0 && (
        <View style={styles.foot}>
          <View style={styles.amountContainer}>
            <Label>
              Total
              <Label textStyle={{ color: gray }}>
                {" "}
                ({cart?.length ? cart.length : 0} items){" "}
              </Label>
            </Label>
            <Label> £{totalAmount}</Label>
          </View>
          <Button>Checkout - £{totalAmount}</Button>
        </View>
      )}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  foot: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    paddingBottom: 30,
    paddingtop: 10,
    backgroundColor: white,
    paddingHorizontal: 10,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
});

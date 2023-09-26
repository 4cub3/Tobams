import { ProductType } from "@/utils/product-data";
import { createContext, ReactNode, FC, useState, useLayoutEffect } from "react";
export type Cart = {
  id: string;
  quantity: number;
  amount: number;
  item: ProductType;
};
type CartType = {
  cart?: Cart[];
  addItemToCart: (item: Cart) => void;
  removeCartItem: (id: string) => void;
  totalAmount: number;
};
export const CartContext = createContext<CartType>({
  cart: [],
  addItemToCart: () => {},
  removeCartItem: () => {},
  totalAmount: 0,
});

interface Props {
  children: ReactNode;
}
const CartProvider: FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCart = (item: Cart) => {
    if (cart.length <= 0) {
      setCart([item]);
    } else {
      const existingItem = cart.find((exItem) => exItem.id === item.id);
      if (!existingItem) {
        setCart((prev) => [item, ...prev]);
      } else {
        setCart((prev) => {
          return prev.map((itm) => {
            if (item.id === itm.id) {
              return { ...itm, quantity: itm.quantity + 1 };
            }
            return itm;
          });
        });
      }
    }
  };
  useLayoutEffect(() => {
   if(cart.length ){
    let total = 0;
    for (const itm of cart) {
      total = itm.amount * itm.quantity;
    }
    setTotalAmount(total);
   }
  }, [cart.length]);

  const removeCartItem = (id: string) => {
    const newCart = cart?.filter((item) => item.id !== id);
    setCart(newCart);
  };
  const CartValues: CartType = {
    cart,
    addItemToCart,
    removeCartItem,
    totalAmount,
  };

  return (
    <CartContext.Provider value={CartValues}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

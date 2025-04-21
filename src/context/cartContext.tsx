import { createContext, useEffect, useState } from "react";
import {
  Product,
  ProductCart,
  ProductCataLog,
} from "../utils/interfaces/Product";
import { toast } from "sonner";
import { CartContextInterface } from "../utils/interfaces/CartContext.inteface";
import { saveLogPurchase } from "../services/carServices";

export const CartContext = createContext<CartContextInterface>({
  cart: [],
  total: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  purchase: () => {},
});

export function CartProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addToCart = (product: Product) => {
    const productInCartIndex = cart.findIndex(
      (item: ProductCart) => item.cproCodigo === product.cproCodigo,
    );

    if (productInCartIndex >= 0) {
      const newCart: ProductCart[] = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      toast.success(
        `Item ${product.cproNombre}  ahora tiene ${newCart[productInCartIndex].quantity}  unidades`,
      );
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
    toast.success(`Item ${product.cproNombre}  agregado correctamente`);
  };

  const purchase = async () => {
    const today = new Date();
    const totalPurchase: ProductCataLog = {
      list: cart,
      total,
      date: today.toISOString(),
    };

    const response: boolean = await saveLogPurchase(totalPurchase);

    if (response) clearCart();
  };

  const removeFromCart = (product: Product) => {
    setCart((prevState) =>
      prevState.filter((item) => item.caprId !== product.caprId),
    );
    toast.info(`Item ${product.cproNombre} se ha borrado correctamente`);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPay = () => {
    let totalPrice: number = 0;
    cart.map((pr: ProductCart) => {
      totalPrice += pr.quantity * 1;
    });

    setTotal(totalPrice);

    return total;
  };

  useEffect(() => {
    totalPay();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        purchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

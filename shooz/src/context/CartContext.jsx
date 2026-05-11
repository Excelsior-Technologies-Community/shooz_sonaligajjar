import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.size === product.size
    );

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id &&
        item.size === product.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id, size) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id, size) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id && item.size === size
        ? {
            ...item,
            quantity: item.quantity > 1
              ? item.quantity - 1
              : 1
          }
        : item
    );

    setCartItems(updatedCart);
  };

  // REMOVE ITEM
  const removeItem = (id, size) => {

    const filteredCart = cartItems.filter(
      (item) =>
        !(item.id === id && item.size === size)
    );

    setCartItems(filteredCart);
  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>

  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
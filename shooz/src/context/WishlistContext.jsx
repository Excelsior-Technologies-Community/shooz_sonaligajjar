import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlistItems, setWishlistItems] = useState([]);

  // ADD
  const addToWishlist = (product) => {

    const alreadyExists = wishlistItems.find(
      (item) => item.type === product.type
    );

    if (!alreadyExists) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  // REMOVE
  const removeFromWishlist = (type) => {

    const updatedWishlist = wishlistItems.filter(
      (item) => item.type !== type
    );

    setWishlistItems(updatedWishlist);
  };

  // CHECK
  const isInWishlist = (type) => {

    return wishlistItems.some(
      (item) => item.type === type
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
import React from "react";
import { useWishlist } from "../context/WishlistContext";
import "/src/styles/WishlistButton.css";

function WishlistButton({ product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useWishlist();

  // prevent crash if product is undefined
  if (!product) return null;

  const isAdded = isInWishlist(product.type);

  const handleClick = () => {
    if (isAdded) {
      removeFromWishlist(product.type);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="wishlist" onClick={handleClick}>
      <p>
        <i
          className={
            isAdded
              ? "fa-solid fa-heart"
              : "fa-regular fa-heart"
          }
        ></i>

        &nbsp;

        {isAdded
          ? "Remove from Wishlist"
          : "Add to Wishlist"}
      </p>
    </div>
  );
}

export default WishlistButton;
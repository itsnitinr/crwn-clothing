import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addToCart,
  removeFromCart,
} from "../../redux/cart/cart.actions";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addToCart,
  removeFromCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { clearItemFromCart, addToCart, removeFromCart })(
  CheckoutItem
);

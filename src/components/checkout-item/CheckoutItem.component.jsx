import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addToCart,
  removeFromCart,
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./CheckoutItem.styles";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addToCart,
  removeFromCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeFromCart(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addToCart(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, { clearItemFromCart, addToCart, removeFromCart })(
  CheckoutItem
);

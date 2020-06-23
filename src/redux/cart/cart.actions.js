import {
  TOGGLE_CART_HIDDEN,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_ITEM_FROM_CART,
} from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

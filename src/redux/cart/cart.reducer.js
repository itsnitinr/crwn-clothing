import {
  TOGGLE_CART_HIDDEN,
  ADD_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_FROM_CART,
} from "./cart.types";
import { addToCart, removeFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;

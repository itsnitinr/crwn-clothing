// This function checks if the item to be added already exists in cart
// If so, it will just increase the quantity by 1
// If not, it will add the item to cart with inital quanity of 1

export const addToCart = (cartItems, cartItemToAdd) => {
  // Check if item already exists using find method
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // If item already exists, increase quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If its a new item, set quantity to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

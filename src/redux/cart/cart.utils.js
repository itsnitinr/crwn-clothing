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

// This function decreases the quantity of an item by 1
// If the quantity of item before decreasing is 1, it clears it from the cart

export const removeFromCart = (cartItems, cartItemToRemove) => {
  // Check if item exists using find method
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // If the quanity is 1, clear it from cart using filter method
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // Else, decrease quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

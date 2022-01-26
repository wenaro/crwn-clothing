export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (cartItemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItemQuantity = (cartItems, cartId) => {
  const cartItem = cartItems.find((item) => item.id === cartId);

  if (!cartItem) {
    return cartItems;
  }

  if (cartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartId);
  }

  return cartItems.map((cartItem) => cartItem.id === cartId ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
};

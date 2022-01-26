import { CartActionTypes } from "./cart.types";

export const toogleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const decreaseItemQuantity = itemId => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: itemId
});
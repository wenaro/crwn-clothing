import React from "react";
import "./checkout-item.css";
import { addItem, decreaseItemQuantity, removeItemFromCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  addItem,
  decreaseItemQuantity,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemQuantity(cartItem.id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}$</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItemQuantity: (itemId) => dispatch(decreaseItemQuantity(itemId))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

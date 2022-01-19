import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Shoppingicon } from "../../assets/shopping-bag.svg";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.css";


const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <Shoppingicon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

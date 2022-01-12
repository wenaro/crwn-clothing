import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = ({ currentUser }) => {

  console.log(currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      <CartDropdown></CartDropdown>
    </div>
  );
}
// state = top level root reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser

})
export default connect(mapStateToProps)(Header);
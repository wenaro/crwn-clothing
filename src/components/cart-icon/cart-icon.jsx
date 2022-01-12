
import React from 'react';

import { ReactComponent as Shoppingicon } from '../../assets/shopping-bag.svg';
import './cart-icon.css';

const CartIcon = () => (
    <div className='cart-icon'>
        <Shoppingicon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon;
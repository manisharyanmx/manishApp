import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/cart/cart.selectors';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';

import './CartDropDown.styles.scss';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className = "cart-dropdown">
        <div className = "cart-items">
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key = {cartItem.id} item = {cartItem} />
            )) 
            ) : (
            <span className = "empty-message"> Your Cart is empty </span>
            )}
        </div>
        <Button onClick = {() =>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
             GO TO CHECKOUT 
        </Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
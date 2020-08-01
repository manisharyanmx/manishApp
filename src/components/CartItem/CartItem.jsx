import React from 'react';

import './CartItem.styles.scss';

const CartItem = ({item:{imageUrl, price, name, quantity}}) => (
    <div className = "cart-item">
        <img src = {imageUrl} alt="cartItem" />
        <div className = "item-details">
            <span className="name" >{name}</span>
            <span className="price" >{quantity}*{price}</span>
        </div>
    </div>
)

export default CartItem;
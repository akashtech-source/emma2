import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price, 0);

    return (
        <div>
            <h4>Order Summery: </h4>
            <p>Items ordered: {cart.length}</p>
            <p>total price: {total}</p>
        </div>
    );
};

export default Cart;
import React, { useState, useEffect } from "react";
import CartItem from './CartItem'

// looping over the items
function Cart({ initialItems }){

    const GrandTotal = initialItems.reduce((total, item) => (
        total + item.qty * item.price), 0).toFixed(2)


    return (
        <div className="Cart">
          <h1 className="Cart-title">Shopping Cart</h1>
          <div className="Cart-items">
            {initialItems.map(item => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
          <h2>Grand total: {GrandTotal}</h2>
        </div>
      );
}

export default Cart;
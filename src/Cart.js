import React, { useState, useEffect } from "react";
import CartItem from './CartItem'


function Cart({ initialItems }){

    
    return (
        <div className="Cart">
          <h1 className="Cart-title">Shopping Cart</h1>
          <div className="Cart-items">
            {initialItems.map(item => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      );
}

export default Cart;
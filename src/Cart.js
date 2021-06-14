import React, { useState, useEffect } from "react";
import CartItem from './CartItem'

// looping over the items
function Cart({ initialItems }){


    const [items, setItems] = useState(initialItems)

    // update the qty
    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
          if (item.id === id) {
            return { ...item, qty: newQty };
          }
          return item;
        });
        setItems(newItems);
      };

    // calcs the grand total of all items in the cart
    const GrandTotal = items.reduce((total, item) => (
        total + item.qty * item.price), 0).toFixed(2)


    return (
        <div className="Cart">
          <h1 className="Cart-title">Shopping Cart</h1>
          <div className="Cart-items">
            {items.map(item => (
              <CartItem {...item} updateQty={updateQty} key={item.id} />
            ))}
          </div>
          <h2>Grand total: {GrandTotal}</h2>
        </div>
      );
}

export default Cart;
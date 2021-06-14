import React from 'react';

function CartItem({id, itemName, price, qty}){

    return(
        
        <div className="CartItem">
            <div>{itemName}</div>
            <div>${price}</div>
            <div>{qty}</div>

        </div>
    )
}


export default CartItem
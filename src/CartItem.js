import React from 'react';
import './CartItem.css'

function CartItem({id, itemName, price, qty, updateQty, handleDelete }){

    // call updateQty function
    const addOne = () => updateQty(id, qty + 1)
    const subtractOne = () => updateQty(id, qty - 1)
    const deleteItem = () => handleDelete(id)

    return(
        
        <div className="CartItem">
            <div>{itemName}</div>
            <div>${price}</div>
            <div>
                <button onClick={subtractOne} disabled={qty<=1}>-</button>
                {qty}
                <button onClick={addOne}disabled={qty>=100}>+</button>
                <button onClick={deleteItem}> Delete</button>
            </div>

            <div>{`Total : ${qty*price}`}</div>
        </div>
    )
}


export default CartItem
import React from 'react';

function CartItem({id, itemName, price, qty, updateQty }){

    // call updateQty function
    const addOne = () => updateQty(id, qty + 1)
    const subtractOne = () => updateQty(id, qty - 1)


    return(
        
        <div className="CartItem">
            <div>{itemName}</div>
            <div>${price}</div>
            <div>
                <button onClick={subtractOne} disabled={qty<=1}>-</button>
                {qty}
                <button onClick={addOne}disabled={qty>=100}>+</button>
            </div>
            <div>{`Total : ${qty*price}`}</div>


        </div>
    )
}


export default CartItem
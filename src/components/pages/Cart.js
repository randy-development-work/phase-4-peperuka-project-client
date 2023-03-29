import React, { useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom'

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0); 

    useEffect(() => {
        fetch("/carts")
        .then((r)=> r.json())
        .then((data) => {
            setCartItems(data.cartItems)
            setTotal(data.total)
        })   

    },[])
    console.log(cartItems);
    console.log(total);

    const onDelete = (deleted) => {
        const updatedState = cartItems.filter((item) => item.id !== deleted.id);
        setCartItems(updatedState);

        const newTotal = total -= deleted.price
        
        
        setTotal(newTotal)
    }

    // function to remove the cart item
    const removeFromCart = (item) => {
        fetch(`/carts/${item.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => {
            onDelete(item)
        })
    }

    return (
        <Fragment>
            <h2>Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map((cartitem) => (
                    <div>
                        <img src = {cartitem.image}/>
                        <h2>{cartitem.name}</h2>
                        <p>{cartitem.vendor}</p>
                        <small>{cartitem.price}</small>

                        <button onClick={() => removeFromCart(cartitem)}>Remove from Cart</button>

                    </div>
                ))
                
            ) : (
                <Fragment>
                    <h2>Cart is Empty</h2>
                    <button as={Link} to="/">
                        Find an Item
                    </button>
                </Fragment>
            )}
            <h3>Total: {total}</h3>
        </Fragment>
    )
}

export default Cart;
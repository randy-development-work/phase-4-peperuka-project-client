import React, { useState, useEffect, Fragment} from "react";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0); 

    useEffect(() => {
        fetch("/carts")
        .then((r)=> r.json())
        .then((data) => setCartItems(data.cartItems)        
        )

    },[])
    console.log(cartItems);
    console.log(total);

    return (
        <Fragment>
            <h2>Cart</h2>
        </Fragment>
    )
}

export default Cart;
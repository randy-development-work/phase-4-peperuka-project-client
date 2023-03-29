import React, { useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom'
import { Button, Image, List } from 'semantic-ui-react'

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


    // function to remove the cart item
    const removeFromCart = (item) => {
        fetch(`/carts/${item.id}`, {
            method: "DELETE",
        })
        .then((resp) => resp.json())
        .then((json) => {
            console.log(json);
            setCartItems(json.cartItems)
            setTotal(json.total)
        })
    }

    return (
        <Fragment>
            <h2>Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map((cartitem) => (
                    <List animated verticalAlign='middle'>
                        <List.Item>
                            <List.Content floated='right'>
                                <Button onClick={() => removeFromCart(cartitem)}>Remove from Cart</Button>
                            </List.Content>
                            <Image avatar src={cartitem.image} />
                            <List.Content>
                                <List.Header>{cartitem.name}</List.Header>
                                <List.Description>
                                    Vendor:{' '}
                                    <a>
                                    <b>{cartitem.vendor}</b>
                                    </a>{' '}
                                </List.Description>
                                <List.Description>
                                    <b>{cartitem.price}</b>
                                </List.Description>
                            </List.Content>
                        </List.Item> 
                    </List>
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
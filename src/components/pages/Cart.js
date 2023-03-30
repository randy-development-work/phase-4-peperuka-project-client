import React, { useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom'
import { Image, List } from 'semantic-ui-react'
import { Button, Space, Tooltip } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

function Cart({user}) {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0); 
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/items")
        .then((r)=> r.json())
        .then((data) => {
            setItems(data)
        })   

    },[])

    useEffect(() => {
        fetch("/carts")
        .then((r)=> r.json())
        .then((data) => {
            setCartItems(data.cartItems)
            setTotal(data.total)
        })   

    },[])


    // function to remove the cart item
    const removeFromCart = (id) => {
        fetch(`/carts/${id}`, {
            method: "DELETE",
        })
        .then((resp) => resp.json())
        .then((json) => {
            console.log(json);
            setCartItems(json.cartItems)
            setTotal(json.total)
            // setItems(json.user_id = null)
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
                                <Button onClick={() => removeFromCart(cartitem.id)}>Remove from Cart</Button>
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
                <Fragment style={{alignItems: "center"}}>
                    <h2>Cart is Empty</h2>
                    <Link to="/">
                    <Tooltip title="home">
                        <Button icon={<HomeOutlined />}>Find an Item</Button>
                        
                    </Tooltip>
                    </Link>
                </Fragment>
            )}


            <h3>Total: {total}</h3>
        </Fragment>
    )
}

export default Cart;
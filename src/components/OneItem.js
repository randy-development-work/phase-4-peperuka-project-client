import React, { useState } from 'react'

import { Card, Icon, Image, Button } from 'semantic-ui-react';

function OneItem({item}) {
    const {id, name, image, vendor, vendor_contact, category_id, price, location} = item;
    const [inCart, setInCart] = useState(false);

    // styling for button when clicked      
    const switchCart = () => setInCart(!inCart)
    const background = inCart ? "rgb(181 172 171)" : "#020202";
    const color = inCart ? "#000000" : "#fff";

  return (
    <Card className='card-style'>
            {/* <Image src={image} wrapped ui={true} /> */}
            <div className="rounded-item" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}
            
            ></div>
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{location}</Card.Meta>
            <Card.Description>
                <h4>Vendor:</h4>
            </Card.Description>
            <Card.Description>
                {vendor} | {vendor_contact}
                <br />
                <br />
                <p className='money-bill'>
                <Icon name="money bill alternate"/> &nbsp;
                {price}
                </p>
            </Card.Description>
            </Card.Content>
            <Card.Content extra style={{alignItems: "center"}}>
            <a>
                
                <Button primary style={{
                  color: color,
                  background: background,
                  
                }}
                onClick={switchCart}
                >
                  <Icon name={inCart ? 'thumbs up' : 'add to cart'} />{inCart ? "In Cart" : "Add to Cart"}
                  </Button>
                {/* <Button secondary><Icon name='delete calendar' />Delete</Button> */}
            </a>
            </Card.Content>
        </Card>
  )
}

export default OneItem;

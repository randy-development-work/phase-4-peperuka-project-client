import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Items.css'
import OneItem from "./OneItem";

export default function Items() {
    const [items, setItems] = useState([]);
    let params = useParams();
    console.log(items);
    // console.log(params.categoryID);

    // fetch item data within categories
    useEffect(() => {
        fetch(`/categories/${params.categoryID}`)
        .then((r) => r.json())
        .then((itemData) => setItems(itemData))
    }, [params.categoryID])

    let item = items.map((item) => {
        return (
            <OneItem key={item.id} item={item} />
        )
    })

  return (
    <Fragment>
        <div className="ui three column grid container" style={{                
            display: 'flex',
            justifyContent: 'space-between', 
            // position: 'relative',
            // alignItems: 'center' 
            }}>
            <div className="row">
                {item}
            </div>
        </div>
        
    </Fragment>
  )
}

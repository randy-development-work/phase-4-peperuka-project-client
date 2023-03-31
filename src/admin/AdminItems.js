import React, { useEffect, useState } from 'react'
import OneItem from './OneItem';
import {
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';


function AdminItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/items")
        .then((r)=>r.json())
        .then((json) => setItems(json))
    }, [])

    

  return (
    <div style={{backgroundColor: "grey"}}>
        <h2>Items</h2>
        <MDBRow className='row-cols-1 row-cols-md-4 g-5' style={{paddingBottom: "20px", paddingRight: "15px", paddingLeft: "15px"}}>
        {items.map((item) => {
            return (
                
            <OneItem item={item}/>
            
            )

        })}
        </MDBRow>
    </div>
  )
}

export default AdminItems
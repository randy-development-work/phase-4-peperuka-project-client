import React, { Fragment, useState, useEffect } from 'react';
import './Categories.css';
import EachCategory from './EachCategory';

function Categories() {
    const [categories, setCategories] = useState([])

    // fetching categories from the backend
    useEffect(() => {
        fetch("/categories")
        .then((r) => r.json())
        .then(setCategories)
    }, [])
    console.log(categories);


    let onecategory = categories.map((category) => {
        return (          
                <EachCategory 
                    key={category.id} 
                    category={category}                    
                />            
        )
    })
    return (
        <div className='cards'>
            <h2 style = {{fontFamily: "'Eczar', serif"}}>Pick a Category</h2>
        <div className="ui three column grid container" style={{
                            
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center' 
            }}>
            <div className="cat_item row">
                {onecategory}
            </div>
            
        </div>
        </div>
    )
}

export default Categories;

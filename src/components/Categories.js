import React, { Fragment, useState, useEffect } from 'react';
import './Categories.css';
import EachCategory from './EachCategory';
import { useCategories } from '../library';

function Categories() {
    const categories = useCategories();


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

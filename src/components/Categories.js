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


    let onecategory = categories.map((category) => {
        return (
            <EachCategory key={category.id} category={category}/>
        )
    })
    return (
        <Fragment>
            <div className='cards'>
                <h2>Pick a Category to Order From</h2>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            {onecategory}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Categories;

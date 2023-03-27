import React from 'react';
import { Link } from 'react-router-dom';

function EachCategory({category}) {
    const {id, image, name} = category
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to= "/">
          <figure className='cards__item__pic-wrap' data-category={name}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={image}
            />
          </figure>
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{name}</h4>
          </div>
        </Link>
      </li>
    </>
  );
}

export default EachCategory;
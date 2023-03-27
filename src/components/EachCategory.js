import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

function EachCategory({category}) {
    const {id, image, name} = category
  return (
    <Fragment>
      <li className='cards__item'>
        <Link className='cards__item__link' to= "/">
          <figure className='cards__item__pic-wrap' data-category={name}>
            <div
              className='cards__item__img'
              alt={name}
            //   src={image}
            style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}
            >
            </div>
          </figure>
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{name}</h4>
          </div>
        </Link>
      </li>
    </Fragment>
  );
}

export default EachCategory;
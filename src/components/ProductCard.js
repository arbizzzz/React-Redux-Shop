import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AddCounter from './AddCounter';

export default function ProductCard({ product }) {
  const [showCounter, setShowCounter] = useState(false);

  function handleShowCounter() {
    setShowCounter(true);
  }

  function onAddToCart() {
    setShowCounter(false);
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='img-holder'>
          <img
            className='img-responsive'
            src={product.image}
            alt={product.title}
          />
        </div>
        <h3>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <p className='price'>${product.price}</p>
        <div className='d-flex justify-content-between'>
          <p className='category'>
            <span>{product.category}</span>
          </p>
          {!showCounter && (
            <p className='add-to-cart' onClick={handleShowCounter}>
              <FontAwesomeIcon icon={faCartPlus} size='lg' />
            </p>
          )}

          {showCounter && (
            <AddCounter id={product.id} onAddToCart={onAddToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

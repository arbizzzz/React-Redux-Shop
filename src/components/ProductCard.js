import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cart';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [showCounter, setShowCounter] = useState(false);

  function handleAddtoCart(id, count) {
    dispatch(addToCart({ id, count }));
    setShowCounter(false);
    setCount(0);
  }

  function handleIncrement() {
    setCount((count) => (count += 1));
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount((count) => (count -= 1));
  }

  function handleShowCounter() {
    setShowCounter(true);
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
            <div className='counter'>
              <div className='counter-inner d-flex justify-content-between'>
                <span className='counter-indicator' onClick={handleIncrement}>
                  <FontAwesomeIcon icon={faPlus} size='1x' />
                </span>
                <span className='count'>{count}</span>
                <span className='counter-indicator' onClick={handleDecrement}>
                  <FontAwesomeIcon icon={faMinus} size='1x' />
                </span>
              </div>
              <div>
                <button
                  type='button'
                  className='btn btn-outline-success'
                  onClick={() => handleAddtoCart(product.id, count)}
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

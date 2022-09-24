import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../redux/actions/cart';

export default function AddCounter({ id, onAddToCart }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  function handleAddtoCart(id, count) {
    if (count === 0) return;
    dispatch(addToCart({ id, count }));
    setCount(1);
    if (onAddToCart) {
      onAddToCart();
    }
  }

  function handleIncrement() {
    setCount((count) => (count += 1));
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount((count) => (count -= 1));
  }

  return (
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
          onClick={() => handleAddtoCart(id, count)}
        >
          Add
        </button>
      </div>
    </div>
  );
}

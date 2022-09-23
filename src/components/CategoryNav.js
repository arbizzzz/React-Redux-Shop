import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../actions/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import NavCart from './NavCart';

export default function CategoryNav() {
  const [selected, setSelected] = useState('all');
  const [showCart, setShowCart] = useState(false);

  const categories = useSelector((state) => state.products.categories);
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products);

  const itemsCount = items.reduce((total, { count }) => {
    return total + count;
  }, 0);

  const dispatch = useDispatch();

  function catClickHandler(category) {
    setSelected(category);
    dispatch(filterProducts(category));
  }

  function handleMouseOver() {
    setShowCart(true);
  }
  function handleMouseLeave() {
    setShowCart(false);
  }

  return (
    <div className='container mb-2'>
      <nav className='navbar navbar-expand-lg bg-light'>
        <ul className='navbar-nav'>
          <li
            className={`nav-item ${selected === 'all' ? 'active' : ''}`}
            key='all'
            onClick={() => catClickHandler('all')}
          >
            <span className='nav-link' onClick={() => setSelected('all')}>
              All
            </span>
          </li>
          {categories &&
            categories.map((category, index) => {
              return (
                <li
                  className={`nav-item ${
                    category === selected ? 'active' : ''
                  }`}
                  key={`_${index}`}
                >
                  <span
                    onClick={() => catClickHandler(category)}
                    className='nav-link'
                  >
                    {category}
                  </span>
                </li>
              );
            })}
        </ul>
        <div
          className='nav-cart-item ml-auto'
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {itemsCount > 0 && (
            <span className='nav-cart-badge'>{itemsCount}</span>
          )}
          <FontAwesomeIcon icon={faCartShopping} size='lg' />
          {showCart && (
            <NavCart
              cartItems={items}
              products={products.data}
              count={itemsCount}
            />
          )}
        </div>
      </nav>
    </div>
  );
}

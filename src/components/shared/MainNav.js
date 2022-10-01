import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../../redux/actions/products';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import WithClick from '../hoc/WithClick';
import NavCart from './NavCart';
import ProfileCard from './ProfileCard';

export default function MainNav() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [selected, setSelected] = useState('all');

  const categories = useSelector((state) => state.products.categories);
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products);

  const itemsCount = items.reduce((total, { count }) => {
    return total + count;
  }, 0);

  const dispatch = useDispatch();

  function catClickHandler(category) {
    navigate('/', { state: { category } });
    setSelected(state?.category || category);
    dispatch(filterProducts(category));
  }

  useEffect(() => {
    if (state?.category) {
      setSelected(state.category);
    } else {
      setSelected('');
    }
  }, [state?.category]);

  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg'>
        <div className='navbar-brand'>Fake Store</div>
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
        <div className='nav-cart-item ml-auto'>
          <WithClick icon={faCartShopping} badgeCount={itemsCount}>
            <NavCart
              cartItems={items}
              products={products.data}
              count={itemsCount}
            />
          </WithClick>
          <WithClick icon={faUser}>
            <ProfileCard />
          </WithClick>
        </div>
      </nav>
    </div>
  );
}

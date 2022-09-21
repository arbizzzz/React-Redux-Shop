import React, { useEffect, useState } from 'react';
import { Api } from '../utils/api';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../actions/products';

export default function CategoryNav() {
  const [categories, setCategories] = useState();
  const [selected, setSelected] = useState('all');

  const dispatch = useDispatch();

  useEffect(() => {
    Api.get('/products/categories')
      .then((data) => {
        setCategories(data.data);
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }, []);

  function catClickHandler(category) {
    setSelected(category);
    dispatch(filterProducts(category));
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
      </nav>
    </div>
  );
}

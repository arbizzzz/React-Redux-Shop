import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsGrid({ products }) {
  return (
    <div className='row'>
      {products.map((item) => {
        return (
          <div className='col-3'>
            <div className='card'>
              <div className='card-body'>
                <div className='img-holder'>
                  <img
                    className='img-responsive'
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h3>
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                </h3>
                <p className='price'>{item.price}</p>
                <p className='category'>
                  <span>{item.category}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

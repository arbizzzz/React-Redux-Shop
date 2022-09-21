import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
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
        <p className='category'>
          <span>{product.category}</span>
        </p>
      </div>
    </div>
  );
}

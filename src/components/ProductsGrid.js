import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsGrid({ products }) {
  return (
    <div className='row'>
      {products?.map((item) => {
        return (
          <div className='col-3' key={item.id}>
            <ProductCard product={item} />
          </div>
        );
      })}
    </div>
  );
}

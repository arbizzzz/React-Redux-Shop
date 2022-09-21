import React, { useState, useEffect } from 'react';
import '../scss/products.scss';
import { useSelector } from 'react-redux';
import ProductsGrid from './ProductsGrid';

export default function AllProducts() {
  const products = useSelector((state) => state.products);

  const filteredProducts = products?.data?.filter(
    (item) => item.category === products.selected
  );

  if (Object.keys(products).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container' id='products'>
      <ProductsGrid
        products={
          products.selected !== 'all' ? filteredProducts : products.data
        }
      />
    </div>
  );
}

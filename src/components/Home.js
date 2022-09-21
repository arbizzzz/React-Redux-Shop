import React from 'react';
import AllProducts from './AllProducts';
import CategoryNav from './CategoryNav';

export default function Home(props) {
  return (
    <div className='container'>
      <CategoryNav />
      <AllProducts />
    </div>
  );
}

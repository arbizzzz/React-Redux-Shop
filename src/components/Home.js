import React from 'react';
import AllProducts from './AllProducts';
import Header from './shared/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='container'>
        <AllProducts />
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../utils/api';
import AddCounter from './AddCounter';
import Header from './shared/Header';

export default function Product() {
  const [product, setProduct] = useState('');
  const [error, setError] = useState('');
  const params = useParams();

  const { productId } = params;

  useEffect(() => {
    Api.get(`/products/${productId}`)
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [productId]);

  const { image, title, description, category, price, id } = product;

  return (
    <>
      <Header />
      <div className='container' id='single-product'>
        {error && <div className='alert alert-danger'>Error: {error}</div>}
        <div className='row'>
          <div className='col-6'>
            <img className='img-fluid' src={image} alt={title} />
          </div>
          <div className='col-6'>
            <div className='category'>
              <span>{category}</span>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='price'>${price}</div>
            <AddCounter id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

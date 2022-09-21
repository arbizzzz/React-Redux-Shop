import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product(props) {
  const params = useParams();
  return <h1>This is product page</h1>;
}

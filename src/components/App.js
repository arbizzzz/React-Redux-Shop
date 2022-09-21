import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Api } from '../utils/api';
import Home from './Home';
import Product from './Product';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../actions/products';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Api.get('/products')
      .then((data) => {
        const initialData = data.data;
        dispatch(getProducts(initialData));
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:id' element={<Product />}></Route>
      </Routes>
    </Router>
  );
}

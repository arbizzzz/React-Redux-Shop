import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleInitialData } from '../utils/helpers';
import Profile from './Profile';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    handleInitialData(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/product/:productId' element={<Product />}></Route>
        <Route exact path='/profile/:userId' element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

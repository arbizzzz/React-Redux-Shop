import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import profile from './profile';

export default combineReducers({
  products,
  cart,
  profile,
});

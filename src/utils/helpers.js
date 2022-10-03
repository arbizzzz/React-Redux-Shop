import { Api } from './api';
import { getCategories, getProducts } from '../redux/actions/products';

export const getCartProducts = (cartItems, products) => {
  if (cartItems.length === 0) return;
  return cartItems.map((item) => {
    const product = products.find((product) => item.id === product.id);
    return { ...product, count: item.count };
  });
};

export const handleInitialData = (dispatch) => {
  Api.get('/products')
    .then((data) => {
      dispatch(getProducts(data.data));
    })
    .catch((err) => {
      console.warn(err.message);
    });

  Api.get('/products/categories')
    .then((data) => {
      dispatch(getCategories(data.data));
    })
    .catch((err) => {
      console.warn(err.message);
    });
};

export const getProfile = async (id) => {
  try {
    const response = await Api.get(`/users/${id}`);
    const profile = response.data;
    return profile;
  } catch (error) {
    console.warn(error);
  }
};

export const formatPassword = (password) => '*'.repeat(password.length);

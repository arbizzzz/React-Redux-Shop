import { Api } from './api';
import { getCategories, getProducts } from '../redux/actions/products';

export const getCartProducts = (cartItems, products) => {
  if (cartItems.length === 0) return;
  const itemsInCart = [];
  cartItems.map((item, index) => {
    let count = item.count;
    itemsInCart.push(...products.filter((product) => item.id === product.id));
    itemsInCart[index]['count'] = count;
    return [...itemsInCart];
  });
  return [...itemsInCart];
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
    const profile = await response.data;
    return profile;
  } catch (error) {
    console.warn(error);
  }
};

export const formatPassword = (password) => {
  let string = '';
  for (let i = 0; i < password.length; i++) {
    string = string + '*';
  }
  return string;
};

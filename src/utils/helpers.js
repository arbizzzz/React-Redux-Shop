import { Api } from './api';
import { getCategories, getProducts } from '../redux/actions/products';

export const getCartProducts = (cartItems, products) => {
  if (cartItems.length === 0) return;
  const itemsInCart = [];
  cartItems.map((item, index) => {
    let count = item.count;
    itemsInCart.push(...products.filter((product) => item.id === product.id));
    console.log(itemsInCart);
    itemsInCart[index]['count'] = count;
    return [...itemsInCart];
  });
  return [...itemsInCart];
};

export const handleInitialData = (dispatch) => {
  Api.get('/products')
    .then((data) => {
      const initialData = data.data;
      dispatch(getProducts(initialData));
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

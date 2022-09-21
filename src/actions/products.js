export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products,
  };
}

export function filterProducts(selected) {
  return {
    type: FILTER_PRODUCTS,
    selected,
  };
}

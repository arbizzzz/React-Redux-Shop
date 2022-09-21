export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';

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

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories,
  };
}

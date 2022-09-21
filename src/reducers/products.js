import {
  GET_PRODUCTS,
  FILTER_PRODUCTS,
  GET_CATEGORIES,
} from '../actions/products';

export default function products(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        data: [...action.products],
        selected: 'all',
      };

    case FILTER_PRODUCTS:
      const { selected } = action;
      if (selected === 'all') return { ...state, selected: 'all' };
      return {
        ...state,
        selected,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
}

import { GET_PRODUCTS, FILTER_PRODUCTS } from '../actions/products';

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
      console.log(selected);
      if (selected === 'all') return { ...state, selected: 'all' };
      return {
        ...state,
        selected,
      };
    default:
      return state;
  }
}

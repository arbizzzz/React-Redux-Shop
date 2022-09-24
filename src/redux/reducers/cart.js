import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';

export default function cart(state = { items: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const hasItem = state.items.some((item) => item.id === action.payload.id);
      if (hasItem) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                count: item.count + action.payload.count,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case REMOVE_FROM_CART:
      const { items } = state;

      return {
        ...state,
        items: items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

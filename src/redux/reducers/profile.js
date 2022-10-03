import { LOGIN, LOGOUT } from '../actions/profile';
import jwt from 'jwt-decode';

const token = localStorage.getItem('auth');
const id = token ? jwt(token) : '';

export default function user(
  state = { auth: token ? true : false, id },
  action
) {
  switch (action.type) {
    case LOGIN:
      const { token } = action.payload;
      localStorage.setItem('auth', token);
      const { sub } = jwt(token);
      return {
        ...state,
        auth: true,
        id: sub,
      };
    case LOGOUT:
      localStorage.removeItem('auth');
      return {
        ...state,
        auth: false,
        id: '',
      };
    default:
      return state;
  }
}

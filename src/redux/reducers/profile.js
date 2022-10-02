import { LOGIN, LOGOUT } from '../actions/profile';
import jwt from 'jwt-decode';

const token = localStorage.getItem('auth');
const { sub } = jwt(token);

export default function user(
  state = { auth: token ? true : '', id: sub || null },
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

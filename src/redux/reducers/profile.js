import { LOGIN, LOGOUT } from '../actions/profile';
import jwt from 'jwt-decode';

const isAuthed = localStorage.getItem('auth') !== null;
const { sub } = isAuthed && jwt(localStorage.getItem('auth'));

export default function user(
  state = { auth: isAuthed, id: sub || '' },
  action
) {
  switch (action.type) {
    case LOGIN:
      const { token } = action;
      localStorage.setItem('auth', token);
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
      };
    default:
      return state;
  }
}

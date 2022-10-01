export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(token, username, id) {
  return {
    type: LOGIN,
    token,
    id,
  };
}

export function logOut() {
  return {
    type: LOGOUT,
  };
}

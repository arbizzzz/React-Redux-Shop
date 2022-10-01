export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(token, id) {
  return {
    type: LOGIN,
    payload: {
      token,
      id,
    },
  };
}

export function logOut() {
  return {
    type: LOGOUT,
  };
}

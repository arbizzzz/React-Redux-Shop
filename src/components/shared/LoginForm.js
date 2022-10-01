import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Api } from '../../utils/api';
import { login } from '../../redux/actions/profile';
import jwt from 'jwt-decode';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  function handleEmailChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    Api.post('/auth/login', { username, password })
      .then((data) => {
        const { token } = data.data;
        const { sub } = jwt(token);
        dispatch(login(token, sub));
      })
      .catch((error) => {
        setError({ hasError: true, message: error.response.data });
      });
  }

  return (
    <div className='login-form' onSubmit={handleSubmit}>
      <h4>Sign in </h4>
      <form autoComplete='off'>
        <input
          type='text'
          name='username'
          className='form-control mb-2'
          placeholder='username'
          onChange={handleEmailChange}
        />
        <input
          type='password'
          name='password'
          className='form-control mt-2 mb-2'
          onChange={handlePasswordChange}
          placeholder='password'
        />
        <button type='submit' className='btn btn-primary d-block mt-2'>
          Submit
        </button>
      </form>
      {error?.hasError && <p className='text-danger'>{error.message}</p>}
    </div>
  );
}

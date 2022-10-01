import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/actions/profile';

export default function ProfileInfo({ username, id, onHandleLogOut }) {
  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(logOut());
  }

  return (
    <div className='profile-infor'>
      <p>
        Welcome! <strong>{username}</strong>
      </p>
      <div className='d-flex justify-content-between align-items-center'>
        <Link to={`/profile/${id}`}>View Profile Info</Link>
        <button
          type='submit'
          className='btn btn-danger mt-2'
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

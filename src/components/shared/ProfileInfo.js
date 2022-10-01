import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileInfo({ username, id, onHandleLogOut }) {
  return (
    <div className='profile-info'>
      <p>
        Welcome! <strong>{username}</strong>
      </p>
      <div className='d-flex justify-content-between align-items-center'>
        <Link to={`/profile/${id}`}>View Profile Info</Link>
        <button
          type='submit'
          className='btn btn-danger mt-2'
          onClick={onHandleLogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import ProfileInfo from './ProfileInfo';
import { getProfile } from '../../utils/helpers';
import { logOut } from '../../redux/actions/profile';
import { useNavigate } from 'react-router-dom';

export default function LoginCard() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [username, setUsername] = useState('');
  const isLoggedIn = profile.auth === true;
  const id = profile.id;
  const navigate = useNavigate();

  console.log(profile);

  useEffect(() => {
    if (isLoggedIn) {
      getProfile(id).then((data) => {
        const { username } = data;
        setUsername(username);
      });
    }
  }, [id, isLoggedIn]);

  function handleLogOut() {
    dispatch(logOut());
    setUsername('');
    navigate('/');
  }

  return (
    <>
      {isLoggedIn ? (
        <ProfileInfo
          username={username}
          id={id}
          onHandleLogOut={handleLogOut}
        />
      ) : (
        <LoginForm />
      )}
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import ProfileInfo from './ProfileInfo';
import { getProfile } from '../../utils/helpers';

export default function LoginCard() {
  const profile = useSelector((state) => state.profile);
  const [username, setUsername] = useState('');
  const isLoggedIn = profile.auth === true;
  const id = profile.id;

  useEffect(() => {
    getProfile(id).then((data) => {
      const { username } = data;
      setUsername(username);
    });
  }, [id]);

  return (
    <>
      {isLoggedIn ? <ProfileInfo username={username} id={id} /> : <LoginForm />}
    </>
  );
}

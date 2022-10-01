import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './shared/Header';
import { getProfile } from '../utils/helpers';
import { formatPassword } from '../utils/helpers';

export default function Profile() {
  const params = useParams();
  const { userId } = params;

  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile(userId)
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const { username, email, password, address, name } = profile;
  const { city, street, zipcode, number } = address;
  const { firstname, lastname } = name;

  return (
    <>
      <Header />
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h4>Personal Information</h4>
            <p>
              Name:{' '}
              <strong>
                {firstname} {lastname}
              </strong>
            </p>
            <p>
              email: <strong>{email}</strong>{' '}
            </p>
            <p>
              username: <strong>{username}</strong>
            </p>
            <p>
              password: <strong>{formatPassword(password)}</strong>
            </p>
            <hr />
            <h4>Address</h4>
            <p>
              <strong>
                {number} {street} {city} {zipcode}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const params = useParams();
  const { userId } = params;

  return (
    <>
      <h1>Profile {userId}</h1>
    </>
  );
}

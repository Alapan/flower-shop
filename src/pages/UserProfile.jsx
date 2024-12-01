import { useContext } from 'react';
import { AuthContext } from '../auth/AuthWrapper';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h2>Hello {user.username}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </>
  );
};

export default UserProfile;

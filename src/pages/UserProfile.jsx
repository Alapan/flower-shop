import { useContext } from 'react';
import { AuthContext } from '../auth/AuthWrapper';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h2>Hello {user.name}</h2>
    </>
  );
};

export default UserProfile;

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthWrapper';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password)
      .then(() => {
        setIsLoginInvalid(false);
        navigate('/myaccount')
      })
      .catch(() => setIsLoginInvalid(true));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type='text'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
      {isLoginInvalid ? <p>Invalid login. Please try again</p> : null}
    </>
  );
}

export default Login;

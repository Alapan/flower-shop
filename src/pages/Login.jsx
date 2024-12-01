import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthWrapper';

const Login = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoginInvalid, setIsLoginInvalid ] = useState(false);
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
      <h2>Log in to your account</h2>
      <p>
        New user? <NavLink to='/signup'>Sign up.</NavLink>
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type='text'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      {isLoginInvalid ? <p>Invalid login. Please try again</p> : null}
    </>
  );
}

export default Login;

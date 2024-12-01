import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ isSuccess, setIsSuccess ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        address
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) setIsSuccess(true);
      });
  };

  return (
    <>
      <h2>Create your account here</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter a username: </label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Enter your email: </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Enter your address: </label>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type='submit'>Create Account</button>
      </form>
      { isSuccess ? (
        <p>
          Sign up successful!
          <NavLink to='/login'>Login</NavLink> to view and place orders.
        </p>
      ) : null}
    </>
  );
};

export default SignUp;

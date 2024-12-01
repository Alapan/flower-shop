import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [ user, setUser ] = useState({
    email: '',
    username: '',
    address: '',
    isAuthenticated: false
  });

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      if (password === 'password'){
        fetch(`http://localhost:8000/users?username=${username}`)
          .then((response) => response.json())
          .then((user) => {
            setUser({
              ...user[0],
              isAuthenticated: true
            });
            resolve('Success');
          })
      } else {
        setUser({
          email: '',
          username: '',
          address: '',
          isAuthenticated: false
        });
        reject('Incorrect password!');
      }
    })
  };

  const logout = () => {
    setUser({
      email: '',
      username: '',
      address: '',
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;

import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [ user, setUser ] = useState({
    name: '',
    isAuthenticated: false
  });

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      if (password === 'password'){
        setUser({
          name: username,
          isAuthenticated: true
        });
        resolve('Success');
      } else {
        setUser({
          name: '',
          isAuthenticated: false
        });
        reject('Incorrect password!');
      }
    })
  };

  const logout = () => {
    setUser({
      name: '',
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

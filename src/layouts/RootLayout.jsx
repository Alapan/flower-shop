import { createContext, useContext, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthWrapper';
import './styles/RootLayout.css';

export const CartContext = createContext();

const RootLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const [ cartProducts, setCartProducts ] = useState([]);
  const [ currentTab, setCurrentTab ] = useState('/');
  const [ cartLinkCls, setCartLinkCls ] = useState('nav-link-item')
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const removeFromCart = (productToRemove) => {
    const index = cartProducts.findIndex((product) => product.id === productToRemove.id);
    setCartProducts([...cartProducts.slice(0, index), ...cartProducts.slice(index+1)])
  };

  const clearCart = () => setCartProducts([])

  const setNavLinkCls = (path) => {
    if (user.isAuthenticated) setCartLinkCls((prev) => prev + ' cart-link');
  
    if (currentTab === window.location.path) {
      setCartLinkCls((prev) => prev + ' active');
    }
  }

  return (
    <CartContext.Provider value={{
      cartProducts,
      addToCart,
      removeFromCart,
      clearCart,
      setNavLinkCls
    }}>
      <header className='header'>
        <h1 className='site-heading'>Flowers for You</h1>
        <nav className='navbar'>
          <NavLink
            to='/'
            className={cartLinkCls}
            onClick={() => setCurrentTab('')}
          >Home</NavLink>
          <NavLink
            to='/shop'
            className={cartLinkCls}
            onClick={() => setCurrentTab('/shop')}
          >Shop</NavLink>
          <NavLink
            to='/about'
            className={cartLinkCls}
            onClick={() => setCurrentTab('/about')}
          >Info</NavLink>
          {
            user.isAuthenticated ? (
              <>
                <NavLink
                  to='/myaccount'
                  className={cartLinkCls}
                  onClick={() => setCurrentTab('/myaccount')}
                >Account</NavLink>
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
              </>
            ) : (
              <NavLink
                to='/login'
                className={cartLinkCls}
                onClick={() => setCurrentTab('/login')}
                >Login
              </NavLink>
            )
          }
          <NavLink to='/cart' className={cartLinkCls}>
            Cart {cartProducts.length > 0 ? `(${cartProducts.length})` : null}
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </CartContext.Provider>
  ); 
};

export default RootLayout;

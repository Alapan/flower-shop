import { createContext, useContext, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthWrapper';
import './styles/RootLayout.css';

export const CartContext = createContext();

const RootLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const [ cartProducts, setCartProducts ] = useState([]);
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

  let cartLinkCls = 'nav-link-item';
  if (user.isAuthenticated) cartLinkCls += ' cart-link';

  return (
    <CartContext.Provider value={{
      cartProducts,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      <header>
        <h1>Flowers for You</h1>
        <nav>
          <NavLink to='/' className='nav-link-item'>Home</NavLink>
          <NavLink to='/shop' className='nav-link-item'>Shop</NavLink>
          <NavLink to='/about' className='nav-link-item'>Info</NavLink>
          {
            user.isAuthenticated ? (
              <>
                <NavLink to='/myaccount' className='nav-link-item'>Account</NavLink>
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
              </>
            ) : <NavLink to='/login' className='nav-link-item'>Login</NavLink>
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

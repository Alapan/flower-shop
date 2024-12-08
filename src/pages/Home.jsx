import { NavLink } from 'react-router-dom';
import './styles/Home.css';
import { useContext } from 'react';
import { CartContext } from '../layouts/RootLayout';

const Home = () => {
  const { setNavLinkCls } = useContext(CartContext);
  return (
    <div className='homepage'>
      <div className='homepage-image'>
        <img src='/flowers_home.webp' width={400} height={400}/>
      </div>
      <div className='homepage-text-container'>
        <div className='homepage-button'>
          <NavLink to='/shop' className='' onClick={() => setNavLinkCls('/shop')}>View our collection</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

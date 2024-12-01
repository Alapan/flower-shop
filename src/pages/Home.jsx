import { Link } from 'react-router-dom';
import './styles/Home.css'

const Home = () => {
  return (
    <div className='homepage'>
      <div className='homepage-image'>
        <img src='/flowers_home.webp' width={400} height={400}/>
      </div>
      <div className='homepage-text'>
        <Link to='/shop' className=''>View our collection</Link>
      </div>
    </div>
  );
};

export default Home;

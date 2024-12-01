import { Fragment } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './styles/Flowers.css';

const Flowers = () => {
  const flowers = useLoaderData();
  return (
    <div className='flowers-grid'>
      {flowers.map((flower) => (
        <Fragment key={flower.id}>
          <div className='flower-image'>
            <img src={flower.image} width={200} height={200}/>
          </div>
          <Link to={flower.id} key={flower.id}>
            <div className='flower-info'>
              <h3 className='flower-name'>{flower.name}</h3>
              <p>{flower.description}</p>
              <p>{flower.price}</p>
            </div>
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default Flowers;

export const flowersLoader = async () => {
  const response = await fetch('http://localhost:8000/flowers');
  return response.json();
};

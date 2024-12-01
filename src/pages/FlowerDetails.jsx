import { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { CartContext } from '../layouts/RootLayout';
import './styles/FlowerDetails.css';

const FlowerDetails = () => {
  const [ selectedQuantity, setSelectedQuantity ]= useState(0);
  const { cartProducts, addToCart, removeFromCart } = useContext(CartContext);
  const flower = useLoaderData();
  const navigate = useNavigate('/shop');
  const handleClick = () => {
    if (selectedQuantity > 0) {
      addToCart({
        ...flower,
        selectedQuantity,
        totalPriceForItem: `£${(selectedQuantity * parseFloat(flower.price.substring(1))).toFixed(2)}`
      });
    } else {
      const itemToRemove = cartProducts.find((item) => item.id === flower.id);
      if (itemToRemove) {
        removeFromCart(flower);
      }
    }
  };

  const quantity = Array.from(Array(20).keys());

  return (
    <div className='flower-page-container'>
      <div className='flower-page-image'>
        <img src={flower.image} width={350} height={350}/>
      </div>
      <div className='flower-page-info'>
        <h2>{flower.name}</h2>
        <p>{flower.description}</p>
        <p>{flower.price}</p>
        <label>Quantity: </label>
        <select onChange={(e) => setSelectedQuantity(e.target.value)}>
          <option>0</option>
          {quantity.map((q)=> (
            <option key={q} value={q}>{q}</option>
          ))}
        </select>
        <div>
          <button
            className='add-to-cart'
            onClick={handleClick}>Add to cart</button>
        </div>
        <br />
        <div>
          <button
            className='go-to-shop'
            onClick={() => 
              navigate('/shop')
            }>Add more items</button>
        </div>
      </div>
    </div>
  );
};

export default FlowerDetails;

export const flowerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch('http://localhost:8000/flowers/' + id);
  return response.json();
};
